/**
 * SITE CONTENT — the words layer. Components read from here.
 *
 * CARICOM Young Parliamentarians Network (CYPN): a network of young elected
 * members of parliament across the Caribbean Community. Parliamentarian names
 * and figures below are illustrative placeholders for this design build —
 * swap for verified data before any real launch.
 *
 * Rules:
 *  - strings and numbers only at the leaves (tests enforce this)
 *  - a section renders only if its data exists — delete a key (and its
 *    entry in `sections` + index.astro) to drop a section
 */

/** Ordered section ids — must match the render order in pages/index.astro.
 *  tests/e2e/structure.spec.ts asserts the DOM against this manifest. */
export const sections = [
  "mission",
  "stats",
  "candidates",
  "memberStates",
  "campaigns",
  "updates",
  "blog",
  "testimonials",
  "manifestos",
  "press",
  "timeline",
  "faq",
  "join",
  "contact",
] as const;

export const site = {
  name: "CARICOM Young Parliamentarians Network",
  shortName: "CYPN",
  description:
    "The network of young elected members of parliament across the Caribbean Community, building a louder generation in every chamber.",

  ctaLabel: "Join the network",
  ctaHref: "/#join",
  nav: [
    { label: "Vision", href: "/#mission" },
    { label: "Members", href: "/#candidates" },
    { label: "States", href: "/#memberStates" },
    { label: "Priorities", href: "/#campaigns" },
    { label: "Blog", href: "/blog" },
  ],

  ticker: [
    "CARICOM Young Parliamentarians Network",
    "Young voices. Real seats. One Caribbean.",
    "15 member states, one generation",
    "Every chamber, a little younger",
  ],

  hero: {
    badge: "The under-40 caucus of the Caribbean Community",
    title: "Young Voices, Real Seats",
    subtitle:
      "The network of young parliamentarians turning Caribbean chambers into rooms built for the generation that inherits every decision.",
  },

  mission: {
    eyebrow: "Our Vision",
    title: "A Caribbean That Governs With Its Young People",
    body: [
      "A Caribbean where every young person has access to quality education, meaningful employment, environmental sustainability, and a voice in shaping the future.",
      "The Young Parliamentarians Network exists to put that voice inside the chamber, not outside it. We connect young elected members across all fifteen CARICOM states, train the next cohort before they run, and hold each other to the agenda we campaigned on.",
    ],
    asides: [
      { quote: "Half our region is under thirty. Almost none of the people writing its laws are.", attr: "Why the network exists" },
      { quote: "Get elected, get organised, deliver, bring the next one through. That is the whole method.", attr: "How we work" },
    ],
  },

  stats: {
    eyebrow: "The Network",
    title: "One Region, Counted",
    items: [
      { num: "15", label: "Member states", note: "Every CARICOM member parliament has a seat in the network." },
      { num: "62", label: "Young members", note: "Sitting parliamentarians under forty, across both chambers." },
      { num: "34", label: "Average age", note: "Against a regional legislature average north of fifty-five." },
    ],
  },

  candidates: {
    eyebrow: "The Members",
    title: "Young Parliamentarians on the Floor",
    lead: "Every member is an elected representative first, organised into a network second, accountable to the platform they ran on.",
    chair: {
      label: "Chairwoman",
      name: "Brittney Galvez",
      role: "Senator · Belize",
      photo: "/img/brittney-galvez.jpg",
      note: "Chairs the network's regional council, elected by delegates from every national chapter. She carries the shared agenda into CARICOM institutions and keeps fifteen chambers moving together.",
    },
    items: [
      { name: "Jonathan Wehner", role: "Member of Parliament", region: "Antigua & Barbuda", photo: "/img/jonathan-wehner.jpg" },
      { name: "Anika Charles", role: "Member of Parliament", region: "Trinidad & Tobago" },
      { name: "Kwame Boateng", role: "Member of the House", region: "Jamaica" },
      { name: "Shanice Fredericks", role: "Senator", region: "Barbados" },
      { name: "Devon Marshall", role: "Member of Parliament", region: "Guyana" },
      { name: "Marie-Claire Joseph", role: "Member of the Assembly", region: "Saint Lucia" },
    ],
  },

  memberStates: {
    eyebrow: "Fifteen Chambers",
    title: "CARICOM Member States",
    lead: "The network runs a national chapter in every member parliament of the Caribbean Community.",
    items: [
      { country: "Trinidad & Tobago", capital: "Port of Spain", members: 8 },
      { country: "Jamaica", capital: "Kingston", members: 9 },
      { country: "Barbados", capital: "Bridgetown", members: 6 },
      { country: "Guyana", capital: "Georgetown", members: 7 },
      { country: "The Bahamas", capital: "Nassau", members: 4 },
      { country: "Saint Lucia", capital: "Castries", members: 5 },
      { country: "Grenada", capital: "St. George's", members: 3 },
      { country: "Antigua & Barbuda", capital: "St. John's", members: 4 },
      { country: "Belize", capital: "Belmopan", members: 3 },
      { country: "Suriname", capital: "Paramaribo", members: 3 },
    ],
  },

  campaigns: {
    eyebrow: "What We're Pushing",
    title: "The Network's Priorities",
    items: [
      { title: "A Youth Seat on Every Committee", text: "A standing rule that reserves committee places for members under forty, in every national parliament.", progress: 55, goal: "9 of 15 chambers committed" },
      { title: "Climate Budgets Written by the Inheritors", text: "Youth-led scrutiny of every national climate and resilience budget line before it passes.", progress: 42, goal: "Framework adopted in 6 states" },
      { title: "First-Job Guarantee for Graduates", text: "A regional pathway from school to a first paid role, championed chamber by chamber.", progress: 30, goal: "Model bill drafted, 4 sponsors" },
    ],
  },

  updates: {
    eyebrow: "From the Floor",
    title: "Latest Updates",
  },

  blog: {
    eyebrow: "Longer Reads",
    title: "From the Network",
  },

  testimonials: {
    eyebrow: "Members",
    title: "Why They Joined",
    items: [
      { quote: "I was the youngest person in my chamber by fifteen years. The network was the first room where I wasn't.", attr: "Anika, 31 · Trinidad & Tobago" },
      { quote: "Before I ran, a member two islands over walked me through her whole first budget cycle. That is the network.", attr: "Devon, 29 · Guyana" },
      { quote: "We stopped waiting to be invited onto committees and wrote the rule that puts us there.", attr: "Shanice, 33 · Barbados" },
    ],
  },

  manifestos: {
    eyebrow: "Read the Documents",
    title: "Charter & Papers",
    items: [
      { title: "The Network Charter", blurb: "How the network is governed: membership, the national chapters, the regional council, and what every member signs up to.", filetype: "PDF · 18 pages", href: "#" },
      { title: "Youth in Parliament: A Playbook", blurb: "The full toolkit for a young person deciding whether to run, from first branch meeting to first reading.", filetype: "PDF · 40 pages", href: "#" },
    ],
  },

  press: {
    eyebrow: "In the News",
    title: "Press",
    items: [
      { outlet: "Caribbean Broadcasting", headline: "The under-40 caucus quietly rewriting committee rules", date: "June 2026", href: "#" },
      { outlet: "The Regional Voice", headline: "Fifteen parliaments, one youth network, one agenda", date: "May 2026", href: "#" },
      { outlet: "Stabroek Weekly", headline: "How young MPs across CARICOM started organising together", date: "April 2026", href: "#" },
    ],
  },

  timeline: {
    eyebrow: "How We Got Here",
    title: "The Story So Far",
    items: [
      { label: "2021", title: "A corridor conversation", text: "Four young MPs at a regional sitting realise they have the same problem and no way to talk between sessions." },
      { label: "2022", title: "The first convening", text: "Members from nine states meet, draft a charter, and agree the network is a caucus, not a conference." },
      { label: "2023", title: "National chapters open", text: "Chapters stand up inside individual parliaments; the playbook is written from what actually worked." },
      { label: "2024", title: "The first shared win", text: "The reserved-committee-seat rule passes in its first chamber. Others begin to copy the language." },
      { label: "2026", title: "All fifteen at the table", text: "Every CARICOM member parliament has a chapter and a vote in the regional council." },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "About the Network",
    items: [
      { q: "Who can be a member?", a: "Any sitting member of a CARICOM member parliament, in either chamber, who is under forty at the time they join. Members keep their seat in the network for the full term even past that age." },
      { q: "Is this a political party?", a: "No. The network is cross-party. Members belong to whichever party they were elected under; the network organises them around a shared, generational agenda, not a whip." },
      { q: "What does a national chapter actually do?", a: "It coordinates the young members within one parliament, runs candidate training for the next cohort, and carries the network's priorities into that chamber's committees and order paper." },
      { q: "I'm not elected yet. Can I take part?", a: "Yes, as an aspiring member. You get the playbook, a mentor who has already run, and an invitation to chapter training. The network exists partly to get the next cohort elected." },
      { q: "How is it funded and governed?", a: "By member states' chapters and regional partners, governed by an elected regional council. The full arrangement is set out in the Network Charter above." },
    ],
  },

  join: {
    eyebrow: "Join",
    title: "The Next Chamber Needs You In It",
    lead: "Whether you already hold a seat or you're deciding whether to run, tell us where you are and your national chapter will be in touch.",
    email: "join@cypn-demo.example",
    fields: { name: "Your name", email: "Your email", city: "Your country or constituency" },
    submit: "Join the network →",
    confirm: "✓ Draft ready in your email app — hit send and your chapter will reply.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to the Network",
    body: [
      "Press enquiries, partnership ideas, or a parliament that wants to open a chapter — the regional secretariat reads everything.",
    ],
    links: [
      { label: "Email", val: "hello@cypn-demo.example", href: "mailto:hello@cypn-demo.example" },
      { label: "Media kit", val: "Download the media kit", href: "#" },
    ],
  },

  footer: {
    tagline: "The network of young elected members across the Caribbean Community.",
    sponsor: "CARICOM YPN is a programme of the Centre for Youth Policy (CYP), which serves as its secretariat, headquarters, and fiscal sponsor.",
    designer: "Website designed by Exalt Strategies.",
    columns: [
      {
        title: "Network",
        links: [
          { label: "Vision", href: "/#mission" },
          { label: "Members", href: "/#candidates" },
          { label: "Member states", href: "/#memberStates" },
        ],
      },
      {
        title: "Act",
        links: [
          { label: "Join", href: "/#join" },
          { label: "Priorities", href: "/#campaigns" },
          { label: "Charter", href: "/#manifestos" },
        ],
      },
      {
        title: "Read",
        links: [
          { label: "Updates", href: "/#updates" },
          { label: "Blog", href: "/blog" },
          { label: "Timeline", href: "/#timeline" },
        ],
      },
    ],
  },
} as const;
