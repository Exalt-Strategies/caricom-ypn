# exalt-druid — spawnable card-layout site skeleton

An Astro 4 static site designed to be **re-themed by Claude Code into any website**.
The demo content ("Meridian Youth Collective", a fictional youth political party)
exists only to exercise every section recipe — replace it wholesale on spawn.

## First run (fresh unzip/clone)

If `node_modules/` is missing or the user hasn't said what site they want yet:

1. `npm install`
2. Start the dev server in the background: `npm run dev` (http://localhost:4321)
3. Then ask the user: **"Hey, it's ready — what do you want to make this website for?"**
4. When they answer, follow the spawn protocol below.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on :4321 |
| `npm run test` | Vitest unit suite — content invariants (fast, no browser) |
| `npm run test:e2e` | Playwright — builds + serves on :4323 (needs `npx playwright install chromium` once) |
| `npm run test:e2e:update` | Refresh visual-regression snapshots after intentional design changes |
| `npm run build` | Production build to `dist/` |

Run `npm run test` after every content change. Run e2e before calling a spawn done;
run `test:e2e:update` after a deliberate restyle (visual snapshots will differ by design).

## Architecture: words vs bones

- **Words layer** (a spawn rewrites this): `src/data/site.ts` — every string on the
  site, typed, scalar leaves only — plus the markdown collections in
  `src/content/updates/` and `src/content/blog/`.
- **Bones layer** (a spawn rarely touches this): `src/components/` (section recipes),
  `src/layouts/BaseLayout.astro`, `src/pages/`.
- **Skin**: `src/styles/tokens.css` — the ONLY file a re-brand edits. Swap the
  ~10 brand tokens (colors, fonts); do NOT touch the layout-grammar block
  (container width, gutters, radii) unless changing the system itself.
  `global.css` implements the card grammar and shouldn't need brand edits.

## Spawn protocol (user says what site they want)

1. Rewrite `src/data/site.ts` with real content for the new subject.
2. Keep only sections that fit — a section renders only if its data key exists.
   To drop one, remove: its key in `site`, its id in the `sections` manifest,
   and its component in `src/pages/index.astro`. **Manifest and index.astro must
   stay in sync** — `tests/e2e/structure.spec.ts` asserts the DOM against the manifest.
3. Replace all markdown in `src/content/updates/` (keep ≥ 6) and
   `src/content/blog/` (keep ≥ 3).
4. Re-skin via `src/styles/tokens.css` brand tokens.
5. `npm run test` until green; fix content, not tests.

## Content rules (enforced by tests/unit/content.test.ts + src/content/config.ts)

- `site.ts` leaves: strings/numbers/booleans only. No undefined, no functions.
- Card titles (events, campaigns, manifestos, timeline): ≤ 60 chars.
- Hero subtitle: ≤ 20 words. Nav hrefs: root-relative (`/...`).
- Campaign `progress`: 0–100.
- Frontmatter (both collections): `title` ≤ 70 chars, `excerpt` ≤ 160 chars,
  `date` as `YYYY-MM-DD`, `tag` from the fixed taxonomy —
  updates: `win | campaign | chapter | event | announcement`;
  blog: `essay | explainer | interview`.

The tests are the spec. If a generation fails a test, the generation is wrong.
