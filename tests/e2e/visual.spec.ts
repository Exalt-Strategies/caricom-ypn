import { test, expect, type Page } from "@playwright/test";

/**
 * Visual regression: full-page snapshots at both design breakpoints.
 * Deterministic because reducedMotion (playwright.config.ts) freezes the
 * ticker and reveal transitions. Refresh intentionally with:
 *   npm run test:e2e:update
 */

async function settle(page: Page) {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
}

test("home desktop", async ({ page }) => {
  await settle(page);
  await expect(page).toHaveScreenshot("home-desktop.png", { fullPage: true });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });
  test("home mobile", async ({ page }) => {
    await settle(page);
    await expect(page).toHaveScreenshot("home-mobile.png", { fullPage: true });
  });
});

test("join panel", async ({ page }) => {
  await settle(page);
  await expect(page.locator("#join .panel")).toHaveScreenshot("join-panel.png");
});
