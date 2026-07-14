// Renders the OG share card to public/og.jpg (1200x630 @2x) via headless
// Chromium. Requires the dev server (npm run dev) up on :4321.
//
//   node scripts/gen-og.mjs
//
// The template lives in scripts/og-template.html; it is copied into public/
// only for the duration of the render (so it is never deployed) then removed.
import { chromium } from "@playwright/test";
import { copyFileSync, rmSync } from "node:fs";

const TEMPLATE = "scripts/og-template.html";
const SERVED = "public/og-template.html";
const URL = process.env.OG_URL || "http://localhost:4321/og-template.html";
const OUT = "public/og.jpg";

copyFileSync(TEMPLATE, SERVED);
try {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  await page.screenshot({
    path: OUT,
    type: "jpeg",
    quality: 92,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  await browser.close();
  console.log(`wrote ${OUT}`);
} finally {
  rmSync(SERVED, { force: true });
}
