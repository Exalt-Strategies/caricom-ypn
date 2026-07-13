import { test, expect } from "@playwright/test";
import { sections } from "../../src/data/site";

/**
 * Structural contract. Section order comes from the manifest in site.ts —
 * NOT hardcoded — so spawns inherit this test unchanged: reorder or add a
 * section and the test forces manifest + page to stay in sync.
 */

test("sections render in manifest order", async ({ page }) => {
  await page.goto("/");
  const ids = await page.$$eval("main section[id]", (els) => els.map((e) => e.id));
  expect(ids).toEqual([...sections]);
});

test("every nav anchor resolves to an element", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page.$$eval("nav a[href*='#']", (as) =>
    as.map((a) => a.getAttribute("href")!)
  );
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    const id = href.split("#")[1];
    await expect(page.locator(`#${id}`), `nav target #${id}`).toHaveCount(1);
  }
});

test("exactly one conversion panel per page (rhythm rule)", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main section .panel")).toHaveCount(1);
});

test("ticker renders composed strings", async ({ page }) => {
  await page.goto("/");
  const text = await page.locator(".ticker").innerText();
  expect(text.length).toBeGreaterThan(0);
  expect(text).not.toContain("[object Object]");
  expect(text).not.toContain("undefined");
});

test("updates rail: >3 cards, working arrows, cards open detail pages", async ({ page }) => {
  await page.goto("/");
  const rail = page.locator("#updates [data-rail]");
  const cards = rail.locator("a.card");
  expect(await cards.count()).toBeGreaterThan(3);

  // Arrows are visible and actually scroll the rail
  const next = page.locator("#updates [data-rail-next]");
  const prev = page.locator("#updates [data-rail-prev]");
  await next.scrollIntoViewIfNeeded();
  await expect(next).toBeVisible();
  await expect(prev).toBeDisabled(); // at the start
  const before = await rail.evaluate((el) => el.scrollLeft);
  await next.click();
  await expect
    .poll(async () => rail.evaluate((el) => el.scrollLeft), { timeout: 5000 })
    .toBeGreaterThan(before);
  await expect(prev).toBeEnabled();

  // First card navigates to its own page
  const href = await cards.first().getAttribute("href");
  await cards.first().click();
  await page.waitForURL(`**${href}`);
  await expect(page.locator("h1")).toBeVisible();
});

test("candidates and member-state rails render", async ({ page }) => {
  await page.goto("/");
  expect(await page.locator("#candidates [data-rail] > *").count()).toBeGreaterThan(3);
  expect(await page.locator("#memberStates [data-rail] > *").count()).toBeGreaterThan(3);
});

test("faq accordion opens natively", async ({ page }) => {
  await page.goto("/");
  const first = page.locator("#faq details").first();
  await expect(first).not.toHaveAttribute("open", "");
  await first.locator("summary").click();
  await expect(first).toHaveAttribute("open", "");
});

test("campaign progress bars carry valid ARIA", async ({ page }) => {
  await page.goto("/");
  const bars = page.locator("#campaigns [role='progressbar']");
  const count = await bars.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const now = Number(await bars.nth(i).getAttribute("aria-valuenow"));
    expect(now).toBeGreaterThanOrEqual(0);
    expect(now).toBeLessThanOrEqual(100);
  }
});

test("join form has the fields the mailto script needs", async ({ page }) => {
  await page.goto("/");
  const form = page.locator("form[data-join]");
  await expect(form).toHaveCount(1);
  await expect(form).toHaveAttribute("data-email", /@/);
  for (const name of ["name", "email", "city"]) {
    await expect(form.locator(`[name='${name}']`), `field ${name}`).toHaveCount(1);
  }
});

test("blog index lists posts; posts render", async ({ page }) => {
  await page.goto("/blog");
  const first = page.locator("a[href^='/blog/']").first();
  await expect(first).toBeVisible();
  const href = await first.getAttribute("href");
  await page.goto(href!);
  await expect(page.locator("h1")).toBeVisible();
});
