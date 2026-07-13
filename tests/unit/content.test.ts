import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { site, sections } from "../../src/data/site";
import { formatDate } from "../../src/lib/format";

/**
 * Content-layer invariants. These protect the generation protocol:
 * Claude writes site.ts and the markdown collections — these tests catch
 * objects where strings belong, dangling data, and copy-budget blowouts.
 */

describe("sections manifest", () => {
  it("is non-empty and unique", () => {
    expect(sections.length).toBeGreaterThan(0);
    expect(new Set(sections).size).toBe(sections.length);
  });

  it("every manifest entry has a data block in site (except collection-backed ones)", () => {
    for (const id of sections) {
      expect(
        (site as Record<string, unknown>)[id],
        `site.${id} missing for manifest entry "${id}"`
      ).toBeDefined();
    }
  });
});

describe("site content shape", () => {
  it("has no undefined leaves and only string/number/boolean leaves", () => {
    const walk = (value: unknown, path: string) => {
      expect(value, `undefined at site.${path}`).not.toBeUndefined();
      if (value && typeof value === "object") {
        for (const [k, v] of Object.entries(value)) walk(v, path ? `${path}.${k}` : k);
      } else {
        expect(
          ["string", "number", "boolean"].includes(typeof value),
          `non-scalar leaf at site.${path} (${typeof value})`
        ).toBe(true);
      }
    };
    walk(site, "");
  });

  it("respects copy budgets (titles stay card-sized)", () => {
    const titled: Array<{ title: string }> = [
      ...site.campaigns.items,
      ...site.manifestos.items,
      ...site.timeline.items,
    ];
    for (const t of titled) {
      expect(t.title.length, `"${t.title}" exceeds 60 chars`).toBeLessThanOrEqual(60);
    }
    expect(site.hero.subtitle.split(/\s+/).length).toBeLessThanOrEqual(20);
  });

  it("campaign progress is a valid percentage", () => {
    for (const c of site.campaigns.items) {
      expect(c.progress).toBeGreaterThanOrEqual(0);
      expect(c.progress).toBeLessThanOrEqual(100);
    }
  });

  it("nav links are root-relative", () => {
    for (const item of site.nav) expect(item.href).toMatch(/^\//);
  });
});

describe("content collections frontmatter", () => {
  const updates = import.meta.glob("../../src/content/updates/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  }) as Record<string, string>;
  const blog = import.meta.glob("../../src/content/blog/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  }) as Record<string, string>;

  const frontmatter = (raw: string) => {
    const m = raw.match(/^---\n([\s\S]*?)\n---/);
    expect(m, "missing frontmatter block").toBeTruthy();
    const fm: Record<string, string> = {};
    for (const line of m![1].split("\n")) {
      const kv = line.match(/^(\w+):\s*(.+)$/);
      if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, "");
    }
    return fm;
  };

  it("ships enough demo content (≥6 updates, ≥3 blog posts)", () => {
    expect(Object.keys(updates).length).toBeGreaterThanOrEqual(6);
    expect(Object.keys(blog).length).toBeGreaterThanOrEqual(3);
  });

  it("every entry has valid, budget-respecting frontmatter", () => {
    const updateTags = ["win", "campaign", "chapter", "event", "announcement"];
    const blogTags = ["essay", "explainer", "interview"];
    for (const [file, raw] of Object.entries({ ...updates, ...blog })) {
      const fm = frontmatter(raw);
      expect(fm.title, `${file}: title`).toBeTruthy();
      expect(fm.title.length, `${file}: title > 70 chars`).toBeLessThanOrEqual(70);
      expect(fm.excerpt, `${file}: excerpt`).toBeTruthy();
      expect(fm.excerpt.length, `${file}: excerpt > 160 chars`).toBeLessThanOrEqual(160);
      expect(fm.date, `${file}: date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const taxonomy = file.includes("/updates/") ? updateTags : blogTags;
      expect(taxonomy, `${file}: tag "${fm.tag}"`).toContain(fm.tag);
    }
  });
});

describe("formatDate", () => {
  it("property: renders any reasonable date as 'Mon D, YYYY'", () => {
    fc.assert(
      fc.property(
        fc.date({ min: new Date("2000-01-01"), max: new Date("2100-01-01"), noInvalidDate: true }),
        (d) => {
          expect(formatDate(d)).toMatch(/^[A-Z][a-z]{2} \d{1,2}, \d{4}$/);
        }
      )
    );
  });
});
