export const SITE = {
  name: "Devtude",
  tagline: "Custom AI systems, built for how your business already runs",
  blurb:
    "A small team you hire to design and build AI-powered management systems and custom apps, around how you already work.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Coming Soon", href: "/coming-soon" },
];

export const BOOK_CALL = { label: "Book a Call", href: "/contact" };

export const CALENDLY_URL = "https://calendly.com/devtude/30min";

export const WHO_WE_ARE = {
  eyebrow: "Who we are",
  headline: "We started this because small businesses deserve a team that builds around them.",
  body: "We spent time with shop owners, workshop managers, and restaurant teams, and kept hearing the same thing: spreadsheets that don't talk to each other, software built for companies with a full IT department, and decisions made on gut feeling because the numbers are scattered everywhere. So we work with owners to design and build what actually fits how the business already runs, with AI taking the busywork so they can focus on the work itself.",
};

export const PILLARS = [
  {
    eyebrow: "Management systems",
    headline: "We design and build around how you already run things",
    body: "We sit with your daily operations, inventory, staff, billing, and the small decisions that add up, then design and build a management system around them.",
    ctaLabel: "Book a call to see what we'd build for your business",
    ctaHref: "/contact",
  },
  {
    eyebrow: "Daily insight",
    headline: "We catch the problems most software only records",
    body: "Most software just records what already happened. We design systems that watch your daily operations and flag what's about to go wrong, low stock, an overdue payment, a slow week, while there's still time to do something about it.",
    ctaLabel: "Tell us how your business runs",
    ctaHref: "/contact",
  },
  {
    eyebrow: "Custom builds",
    headline: "We take on custom work, built just for you",
    body: "For businesses that need something specific, we build it from the ground up, without the overhead of a big agency.",
    ctaLabel: "Tell us what you're building",
    ctaHref: "/contact",
  },
];

export const LOSS_POINTS = [
  {
    title: "Dead stock",
    body: "Stock that sits too long and quietly ties up cash.",
  },
  {
    title: "Missed follow ups",
    body: "Customers who wanted to buy or pay, and got forgotten.",
  },
  {
    title: "Over or understaffing",
    body: "Shifts that end up over or understaffed.",
  },
  {
    title: "Late payments",
    body: "Payments that take longer to land than they should.",
  },
  {
    title: "Slow decisions",
    body: "Decisions made after it's already too late to act on cheaply.",
  },
];

export const STAT_CALLOUTS = [
  {
    stat: "2",
    label: "ways we can work with you: a management system, or a custom build",
  },
  {
    stat: "Days",
    label: "not months, from first conversation to a working system",
  },
  {
    stat: "1",
    label: "conversation to start, no forms, no accounts, just a call about how you work",
  },
];

export const FAQS = [
  {
    question: "What do you actually do?",
    answer:
      "You hire us to design and build. Most often that's an AI-enabled management system around how you already run things. Sometimes it's a custom web or mobile app for a specific problem. We work with one business at a time.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Most builds are up and running in days, not months, because we work around how you already operate instead of asking you to adopt a generic template.",
  },
  {
    question: "Do you only build management systems?",
    answer:
      "No. Alongside AI-enabled management systems, we build custom web and mobile apps for businesses that need something specific.",
  },
  {
    question: "What happens to our data?",
    answer:
      "It stays private and secure. We don't ask you to create an account before you've even talked to us.",
  },
  {
    question: "What happens on the call?",
    answer:
      "A short, no pressure conversation about how your business runs. We'll tell you what we'd build, and whether we're the right team for it.",
  },
  {
    question: "Are you also building a product we can sign up for later?",
    answer:
      "Yes. A self-serve version of the work we do with clients is on the way. Hire us now if you need something built, or visit Coming Soon to get notified when it's ready.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Tell us how your business runs",
    body: "A short conversation about your day to day, no forms to fill out.",
  },
  {
    step: "2",
    title: "We design and build your system, tailored to you",
    body: "Designed around how you actually operate, not a generic template.",
  },
  {
    step: "3",
    title: "You get a system that keeps watching",
    body: "We leave you with something that flags what needs attention, so daily decisions don't wait on you hunting for numbers.",
  },
];

export const TRUST_POINTS = [
  "We build for owners, not accountants.",
  "Your data stays private.",
  "We ship in days, not months.",
];

export const APPROACH_PILLARS = [
  {
    title: "Simple",
    body: "Built for people without an IT team.",
  },
  {
    title: "Hands-on",
    body: "We stay close through the build, and AI takes the busywork once it's running.",
  },
  {
    title: "Affordable",
    body: "Priced for small businesses, not enterprises.",
  },
];

export const SERVICE_CAPABILITIES = [
  {
    title: "Dead stock",
    body: "Flagged before it ties up cash you could be using.",
  },
  {
    title: "Missed follow ups",
    body: "Customers or payments that would otherwise fall through.",
  },
  {
    title: "Bad staffing calls",
    body: "Over or understaffed shifts, caught before they hit payroll or sales.",
  },
  {
    title: "Late payments",
    body: "Chased automatically, instead of sitting unpaid.",
  },
  {
    title: "Slow decisions",
    body: "Replaced with a daily summary of what actually needs your attention.",
  },
];

export const CUSTOM_APP_STEPS = [
  "We start with what your business actually needs",
  "We build and ship a working build, not just a proposal",
  "You get something usable, not a lengthy dev cycle",
];

export type WorkTone = "primary" | "secondary" | "tertiary";

export interface WorkItem {
  slug: string;
  title: string;
  role: string;
  year: string;
  client: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  /** Live site URL. Leave empty until you have one. */
  href: string;
  /** File in /public, e.g. "/work/project.jpg". Leave empty for a placeholder. */
  image: string;
  tone: WorkTone;
}

export const WORK: WorkItem[] = [
  {
    slug: "begin",
    title: "Begin",
    role: "Software Architect, Engineering Leadership",
    year: "",
    client: "OTT / Streaming Platform",
    summary:
      "End-to-end delivery of a live streaming platform for major sport and entertainment, with personalization, subscriptions, and carrier billing built in.",
    challenge:
      "Ship a full OTT platform with unique regionalization, personalization, and subscription models, and keep it standing as traffic grew around live events.",
    approach:
      "Architected the solution and shipped core backend and frontend alongside the engineering team. Delivered live streaming for events including the EPL, La Liga, PSL, and Pakistan Idol, plus licensed content such as the PGA Tour. Shipped experimental AI: personalized recommendations, thumbnail rotation, a short-form swipe-up player, and automatic intro/outro detection. Integrated carrier billing and mini apps with Easypaisa and Telenor.",
    outcome:
      "A robust, scalable microservices architecture that held up through rapid growth and rising traffic.",
    tags: ["OTT", "Microservices", "AI", "Live streaming"],
    href: "https://begin.watch",
    image: "",
    tone: "primary",
  },
  {
    slug: "bsecure",
    title: "bSecure",
    role: "Engineering Leadership, Hands-on Contributor",
    year: "",
    client: "Checkout & Payments Platform",
    summary:
      "Took an outsourced one-click checkout in-house, kept operations running, and raised the stack for PCI DSS, fraud detection, and future growth.",
    challenge:
      "Commission an in-house team to take over an outsourced one-click checkout and payments platform for e-commerce, without interrupting live operations, and future-proof the architecture.",
    approach:
      "Formed and worked alongside an in-house team. Reworked the existing architecture, covering integrations with major payment gateways and e-commerce platforms.",
    outcome:
      "Architecture ready for expansion, full PCI DSS compliance, and the ability to detect and react to fraud across high transaction volumes.",
    tags: ["Fintech", "Payments", "PCI DSS", "E-commerce"],
    href: "https://bsecure.pk",
    image: "",
    tone: "secondary",
  },
  {
    slug: "hysabkytab",
    title: "HysabKytab",
    role: "Engineering Leadership, Hands-on Contributor",
    year: "",
    client: "Personal Finance Platform",
    summary:
      "A freemium personal finance manager for consumers and banks, from build through bank integrations and a move from monolith to microservices.",
    challenge:
      "Build a PFM that served both everyday users and financial institutions that needed a clearer view of their customer base, so they could grow revenue and lifespan.",
    approach:
      "Led and contributed to the full build and integrations. The public app reached about 0.6 million users, processing 2 to 8 million transactions a day through major banks. The platform tracks over 108 million transactions at 90% accuracy, with full PCI DSS compliance.",
    outcome:
      "Moved HysabKytab from a monolith to microservices, with a direct Temenos integration for turnkey banking solutions.",
    tags: ["Fintech", "PFM", "Microservices", "PCI DSS"],
    href: "https://hysabkytab.com",
    image: "",
    tone: "tertiary",
  },
  {
    slug: "black-tiger",
    title: "Black Tiger",
    role: "Engineering Leadership & Consultant",
    year: "",
    client: "B2B / B2C Commerce Platform",
    summary:
      "A customized commerce layer on Odoo ERP, with AI recommendations for shoppers and AI shipping optimization for B2B.",
    challenge:
      "Deliver a commerce platform that could serve both B2B and B2C customers on top of Odoo, without inflating ERP-side cost.",
    approach:
      "Built custom Odoo apps: chat-based AI recommendations for consumers, and AI-based shipping optimization for B2B customers, alongside the web commerce platform.",
    outcome:
      "A complete Odoo ERP solution and web commerce storefront, with ERP costs kept in check.",
    tags: ["Odoo", "ERP", "E-commerce", "AI"],
    href: "",
    image: "",
    tone: "primary",
  },
  {
    slug: "hk-dokan",
    title: "HK Dokan",
    role: "Engineering Leadership",
    year: "",
    client: "Ledger App for Small Merchants",
    summary:
      "A HysabKytab side project: Android ledger apps for small stores and dealers to keep credit records and expenses in one place.",
    challenge:
      "Small stores and day-to-day dealers needed a simple way to track credit and expenses, without a heavy finance product.",
    approach:
      "Shipped Android ledger apps and connected the data into HysabKytab's data lake, so merchant records could sit with the wider finance platform.",
    outcome:
      "Merchants got a working ledger on Android, with data flowing into HysabKytab.",
    tags: ["Android", "Fintech", "SMB"],
    href: "",
    image: "",
    tone: "secondary",
  },
  {
    slug: "bogo-canada",
    title: "BOGO Canada",
    role: "Web, Mobile, Backend & Design",
    year: "",
    client: "Subscription Coupon Platform",
    summary:
      "A coupon product offering subscription-based discounts, delivered as web, hybrid mobile, backend, and design.",
    challenge:
      "Give customers a way to subscribe for discounted coupons, across web and mobile, without a long agency cycle.",
    approach:
      "Designed and built the web app, hybrid mobile app, and backend as one engagement.",
    outcome:
      "A live subscription coupon product spanning web and mobile.",
    tags: ["SaaS", "Mobile", "Web app"],
    href: "",
    image: "",
    tone: "tertiary",
  },
];

export function getWorkBySlug(slug: string) {
  return WORK.find((item) => item.slug === slug);
}

export type ProductStatus = "In development" | "Coming soon" | "Early access open";

export interface ProductBlock {
  name: string;
  description: string;
  status: ProductStatus;
  teaser: string;
}

export const PRODUCTS: ProductBlock[] = [
  {
    name: "AI-enabled management system",
    description:
      "A self-serve version of the management systems we design and build with clients today.",
    status: "Coming soon",
    teaser:
      "For shops, workshops, and small teams who want one place to track stock, staff, and payments, with AI watching for the losses that don't show up in a normal report. Hire us to build it with you now, or get notified when you can use it on your own.",
  },
];
