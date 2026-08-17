/**
 * SITE CONTENT — the words layer. Components read from here.
 *
 * Caribbean Young Parliamentarians Network (CYPN): a network of young elected
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
  name: "Caribbean Young Parliamentarians Network",
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
    "Caribbean Young Parliamentarians Network",
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
      "The Young Parliamentarians Network exists to put that voice inside the chamber, not outside it. It brings young elected members together from across the region, so the youngest person in each parliament is not doing the work alone.",
    ],
    asides: [
      { quote: "Half our region is under thirty. Almost none of the people writing its laws are.", attr: "Why the network exists" },
      { quote: "Get elected, get organised, deliver, bring the next one through. That is the whole method.", attr: "How we work" },
    ],
  },

  stats: {
    eyebrow: "The Network",
    title: "New, and Building",
    items: [
      { num: "2026", label: "Founded", note: "Convened by the Centre for Youth Policy as a network for young Caribbean parliamentarians." },
      { num: "Under 40", label: "Who it's for", note: "Membership is open to sitting members of parliament under forty." },
      { num: "15", label: "Member states", note: "The CARICOM parliaments the network is being built across." },
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
      note: "As founding chair, she helps convene the network and carry its young members' shared agenda into the region's institutions.",
    },
    viceChair: {
      label: "Vice Chairperson",
      name: "Jonathan Wehner",
      role: "Senator · Antigua & Barbuda",
      photo: "/img/jonathan-wehner.jpg",
      note: "As founding vice chair, he helps steer the network's first year and carries the youth agenda into the Antigua and Barbuda Senate.",
    },
    items: [
      { name: "Hector Guerra", role: "Senator", region: "Belize", photo: "/img/hector-guerra.jpg" },
      { name: "Sjamira Roseburg", role: "Member of Parliament", region: "Sint Maarten", photo: "/img/sjamira-roseburg.jpg" },
      { name: "Kiz Johnson", role: "Minister of State", region: "Antigua & Barbuda", photo: "/img/kiz-johnson.jpg" },
      { name: "Seville Francis-Lewis", role: "Parliamentary Secretary, Youth & Sports", region: "Grenada", photo: "/img/seville-francis-lewis.jpg" },
      { name: "Chalika Vidal", role: "Senator", region: "Dominica", photo: "/img/chalika-vidal.jpg" },
      { name: "Kenya Charles", role: "Senator", region: "Trinidad & Tobago", photo: "/img/kenya-charles.jpg" },
    ],
  },

  memberStates: {
    eyebrow: "Fifteen Chambers",
    title: "Caribbean Member States",
    lead: "The Caribbean Community's fifteen member states, the parliaments the network is being built across.",
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
      { country: "Dominica", capital: "Roseau", members: 3 },
      { country: "Saint Kitts & Nevis", capital: "Basseterre", members: 3 },
      { country: "Saint Vincent & the Grenadines", capital: "Kingstown", members: 3 },
      { country: "Haiti", capital: "Port-au-Prince", members: 5 },
      { country: "Montserrat", capital: "Brades", members: 2 },
    ],
  },

  campaigns: {
    eyebrow: "What We'll Push For",
    title: "The Network's Priorities",
    items: [
      { title: "A Stronger Youth Voice in Committees", text: "Making the case for younger members to sit on the committees that shape budgets, climate and reform.", progress: 15, goal: "A founding priority for 2026" },
      { title: "Climate on the Next Generation's Terms", text: "Bringing young parliamentarians into the scrutiny of national climate and resilience spending.", progress: 10, goal: "On the launch agenda" },
      { title: "A Real Path From School to Work", text: "Championing the school-to-first-job pathway young Caribbean people are asking for.", progress: 10, goal: "In development" },
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
    eyebrow: "What We Believe",
    title: "Why This Network",
    items: [
      { quote: "Half the region is under thirty. Almost none of the people writing its laws are. That gap is the whole reason to organise.", attr: "Why it exists" },
      { quote: "You win a seat and then discover how alone the job can be. This is the room where the youngest member in the chamber isn't the youngest in the room.", attr: "What it offers" },
      { quote: "Not a party and not a talking shop. A working network of people who already hold seats, across party and across borders.", attr: "What it is" },
    ],
  },

  manifestos: {
    eyebrow: "Founding Documents",
    title: "Charter & Papers",
    items: [
      { title: "The Network Charter", blurb: "How the network will be governed: membership, the national chapters, and the role of the Centre for Youth Policy as secretariat.", filetype: "In development", href: "#" },
      { title: "Young in the Chamber: A Handbook", blurb: "A working guide for young members finding their feet in their first term, being written with the founding cohort.", filetype: "Coming 2026", href: "#" },
    ],
  },

  press: {
    eyebrow: "Around the Region",
    title: "Youth in the Chamber",
    items: [
      { outlet: "Inter-Parliamentary Union", headline: "Who are the world's youngest parliamentarians?", date: "Aug 2024", href: "https://www.ipu.org/news/news-in-brief/2024-08/who-are-youngest-and-oldest-parliamentarians-in-world" },
      { outlet: "The Voice (St. Lucia)", headline: "Youth parliament debates power the region's reparations drive", date: "May 2026", href: "https://thevoiceslu.com/2026/05/youth-parliament-debates-will-power-caricom-reparations-drive-to-higher-heights/" },
      { outlet: "Antigua Observer", headline: "Hopes to expand the Eastern Caribbean Youth Parliament Network", date: "2025", href: "https://antiguaobserver.com/nypaab-hopes-to-expand-the-eastern-caribbean-youth-parliament-network-to-other-territories/" },
    ],
  },

  timeline: {
    eyebrow: "Where We're Starting",
    title: "A Network in Year One",
    items: [
      { label: "2026", title: "The network launches", text: "The Centre for Youth Policy convenes young Caribbean parliamentarians into one standing network across the region." },
      { label: "2026", title: "A founding cohort", text: "Sitting members under forty, across parties and across borders, come together and choose a chair and vice chair." },
      { label: "Next", title: "Building the chapters", text: "The work ahead: a national chapter in each member parliament and a shared agenda for the region's under-forties." },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "About the Network",
    items: [
      { q: "Who can be a member?", a: "The network is for sitting young parliamentarians: any current member of a Caribbean parliament, in either chamber, who is under forty. It is a caucus of people who already hold a seat." },
      { q: "Is this a political party?", a: "No. The network is cross-party. Members belong to whichever party they were elected under; it brings them together around a shared, generational agenda, not a whip." },
      { q: "What does a national chapter do?", a: "It brings together the young members sitting in one parliament, coordinates their work across committees, and connects them to the wider regional network." },
      { q: "I'm not elected yet. Can I take part?", a: "Full membership is for people already holding a seat, so not yet. But you can follow the network's work, and connect with the young members and chapter forming in your own country." },
      { q: "How is it run?", a: "The Caribbean Young Parliamentarians Network is convened and supported by the Centre for Youth Policy, which acts as its secretariat and fiscal sponsor. Its governance is being set out with the founding members." },
    ],
  },

  join: {
    eyebrow: "Join",
    title: "Bring Your Chamber Into the Network",
    lead: "If you're a young member sitting in a Caribbean parliament, tell us where you are and we'll connect you to the network and the members near you.",
    email: "join@caribbeanypn.org",
    fields: { name: "Your name", email: "Your email", city: "Your parliament or constituency" },
    submit: "Join the network →",
    confirm: "✓ Draft ready in your email app — hit send and we'll be in touch.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to the Network",
    body: [
      "Press enquiries, partnership ideas, or a young member who wants to get involved — the secretariat at the Centre for Youth Policy reads everything.",
    ],
    links: [
      { label: "Email", val: "hello@caribbeanypn.org", href: "mailto:hello@caribbeanypn.org" },
    ],
  },

  footer: {
    tagline: "The network of young elected members across the Caribbean Community.",
    sponsor: "The Caribbean Young Parliamentarians Network is a programme of the Centre for Youth Policy (CYP), which serves as its secretariat, headquarters, and fiscal sponsor.",
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
