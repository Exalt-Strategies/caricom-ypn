# exalt-druid

A website skeleton you point [Claude Code](https://claude.com/claude-code) at and
say what site you want. Claude rewrites the content layer, re-skins the design
tokens, and the test suite keeps it honest.

## Setup

```bash
unzip exalt-druid.zip && cd 73-2026-exalt-druid
npm install                        # restores dependencies
npx playwright install chromium    # optional, only for the e2e tests
claude                             # open Claude Code in this folder
```

## First prompt

Paste this as your first message to Claude Code:

> Set up this project: install anything that's missing, start the dev server so
> I can watch the site at http://localhost:4321, read CLAUDE.md so you know how
> the skeleton works, and then ask me what I want to make this website for.
> Once I tell you, rebuild the whole site around it — content, sections, colors,
> fonts — and keep `npm run test` green while you work.

Claude will get everything running and then ask:
**"Hey, it's ready — what do you want to make this website for?"**

Answer with specifics — a name, a place, a vibe — and it takes it from there:

> A wood-fired pizza restaurant in Portland called Ember & Oak. Warm, rustic,
> a little upscale.

## What's inside

- **Astro 4** static site — no framework runtime, plain CSS.
- `src/data/site.ts` — every word on the site lives here.
- `src/content/` — markdown collections for updates + blog posts.
- `src/styles/tokens.css` — swap ~10 tokens to re-brand the whole site.
- `tests/` — Vitest content invariants + Playwright structure/visual tests
  that define what a valid site looks like.
