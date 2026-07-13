import { test, expect } from "@playwright/test";
import fc from "fast-check";

/**
 * Grammar invariants, property-based: fast-check samples viewport widths
 * across the phone→desktop range; these must hold at EVERY width. They are
 * brand- and content-agnostic — spawns run them unchanged.
 */

const WIDTHS = fc.integer({ min: 320, max: 1920 });
const RUNS = { numRuns: 10, seed: 4242 };

test("no horizontal overflow at any viewport width (rails must clip)", async ({ page }) => {
  await page.goto("/");
  await fc.assert(
    fc.asyncProperty(WIDTHS, async (width) => {
      await page.setViewportSize({ width, height: 900 });
      await page.waitForTimeout(120);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow, `overflow at ${width}px`).toBeLessThanOrEqual(0);
    }),
    RUNS
  );
});

test("cards stay rounded and inside the container at any width", async ({ page }) => {
  await page.goto("/");
  await fc.assert(
    fc.asyncProperty(WIDTHS, async (width) => {
      await page.setViewportSize({ width, height: 900 });
      await page.waitForTimeout(120);
      const r = await page.evaluate(() => {
        const cards = [...document.querySelectorAll<HTMLElement>("main .card")];
        const minRadius = Math.min(
          ...cards.map((c) => parseFloat(getComputedStyle(c).borderRadius))
        );
        const container = document.querySelector<HTMLElement>(".container")!;
        return { count: cards.length, minRadius, containerWidth: container.offsetWidth };
      });
      expect(r.count).toBeGreaterThan(10);
      expect(r.minRadius, `radius at ${width}px`).toBeGreaterThanOrEqual(12);
      expect(r.containerWidth, `container at ${width}px`).toBeLessThanOrEqual(1280);
    }),
    RUNS
  );
});

test("grid collapses: stats are 3-up on desktop, stacked on phones", async ({ page }) => {
  await page.goto("/");
  const perRow = () =>
    page.evaluate(() => {
      const cards = [...document.querySelectorAll<HTMLElement>("#stats .card")];
      const firstTop = cards[0].getBoundingClientRect().top;
      return cards.filter((c) => Math.abs(c.getBoundingClientRect().top - firstTop) < 2).length;
    });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(120);
  expect(await perRow()).toBe(3);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(120);
  expect(await perRow()).toBe(1);
});
