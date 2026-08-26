import type { Metadata } from "next";
import SplitHeading from "@/components/ui/SplitHeading";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import TetherFaq from "@/components/ui/TetherFaq";
import CountUpStat from "@/components/ui/CountUpStat";
import { WHO_WE_ARE, LOSS_POINTS, STAT_CALLOUTS, FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tether Layout — Devtude",
  description:
    "A section-by-section layout demo built on Devtude's own design system, with Devtude's own copy.",
};

const PANELS = [
  {
    eyebrow: "Management systems",
    headline: "A system built around how you already run things",
    body: "We design and build a management system around your daily operations, inventory, staff, billing, and the small decisions that add up.",
    ctaLabel: "Book a call to see what we'd build for your business",
    cardBg: "#ffffff",
  },
  {
    eyebrow: "Daily insight",
    headline: "That's exactly what we build systems to catch",
    body: "Most software just records what already happened. We build systems that watch your daily operations and flag what's about to go wrong, low stock, an overdue payment, a slow week, while there's still time to do something about it.",
    ctaLabel: "Tell us how your business runs",
    cardBg: "#DBD7D1",
  },
  {
    eyebrow: "Custom builds",
    headline: "Something built just for your business",
    body: "For businesses that need something specific, we build it from the ground up, without the overhead of a big agency.",
    ctaLabel: "Tell us what you're building",
    cardBg: "var(--t-yellow)",
  },
];

export default function TetherPage() {
  return (
    <>
      {/* Hero */}
      <section className="t-hero">
        <SplitHeading text="Software built for businesses like yours, not around them." />
        <div className="t-hero__ctas t-fade-up is-in">
          <a className="t-btn-yellow t-btn-reveal" href="/contact">
            <span data-text="Book a Free Call">Book a Free Call</span>
          </a>
          <a className="t-btn-white t-btn-reveal" href="/about">
            <span data-text="Our Story">Our Story</span>
          </a>
        </div>
      </section>

      {/* Bento */}
      <section className="t-bento">
        <Reveal>
          <article className="t-bento__copy">
            <h2>{WHO_WE_ARE.headline}</h2>
            <div className="t-pills">
              <span className="t-pill t-pill--outline">Management systems</span>
              <span className="t-pill">Daily insight</span>
              <span className="t-pill">Custom builds</span>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="t-bento__visual t-bento__visual--a">Illustration coming soon</div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="t-bento__visual t-bento__visual--b">Illustration coming soon</div>
        </Reveal>
      </section>

      {/* Trust ticker */}
      <section className="t-ticker-section">
        <Reveal>
          <h2>A few things almost every business owner tells us</h2>
        </Reveal>
        <Marquee items={LOSS_POINTS.map((p) => p.title)} />
      </section>

      {/* Sticky feature cards */}
      <section className="t-features">
        {PANELS.map((panel) => (
          <article
            className="t-feature-card"
            key={panel.eyebrow}
            style={{ ["--card-bg" as string]: panel.cardBg }}
          >
            <div className="t-feature-card__copy">
              <p className="t-eyebrow">{panel.eyebrow}</p>
              <h2>{panel.headline}</h2>
              <p>{panel.body}</p>
              <a className="t-btn-dark t-btn-reveal" href="/contact">
                <span data-text={panel.ctaLabel}>{panel.ctaLabel}</span>
              </a>
            </div>
            <div className="t-feature-card__media">Illustration coming soon</div>
          </article>
        ))}
      </section>

      {/* Stats grid */}
      <section className="t-ai">
        <Reveal>
          <h2>Built for how small businesses actually work</h2>
          <p className="t-lede">A few honest facts, not manufactured metrics.</p>
        </Reveal>
        <div className="t-ai-grid">
          <Reveal>
            <div className="t-ai-visual">Illustration coming soon</div>
          </Reveal>
          <div className="t-ai-col">
            <Reveal delay={0.05}>
              <article className="t-stat-card">
                <h2>{STAT_CALLOUTS[0].label}</h2>
                <p className="t-milestone">
                  <CountUpStat value={STAT_CALLOUTS[0].stat} />
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="t-stat-card">
                <p className="t-milestone">
                  <CountUpStat value={STAT_CALLOUTS[1].stat} />
                </p>
                <p>{STAT_CALLOUTS[1].label}</p>
              </article>
            </Reveal>
          </div>
          <div className="t-ai-col">
            <Reveal delay={0.1}>
              <article className="t-stat-card">
                <p className="t-milestone">
                  <CountUpStat value={STAT_CALLOUTS[2].stat} />
                </p>
                <p>{STAT_CALLOUTS[2].label}</p>
              </article>
            </Reveal>
            <Reveal delay={0.15}>
              <article className="t-stat-card t-stat-card--cta">
                <a className="t-btn-white t-btn-reveal" href="/contact">
                  <span data-text="Book a Call">Book a Call</span>
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="t-case">
        <Reveal>
          <div className="t-case__copy">
            <p className="t-eyebrow">Case study</p>
            <h2>
              We&apos;re early, so we don&apos;t have a client case study to
              share yet, this is where the first one will go.
            </h2>
            <p className="t-muted">Check back soon.</p>
          </div>
        </Reveal>
      </section>

      {/* Stories */}
      <section className="t-stories">
        <Reveal>
          <h2>The stories are still being written</h2>
        </Reveal>
        <div className="t-story-grid">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="t-story">
                <span className="t-story__avatar">•</span>
                <div className="t-story__lines">
                  <span className="t-story__line" style={{ width: "90%" }} />
                  <span className="t-story__line" style={{ width: "100%" }} />
                  <span className="t-story__line" style={{ width: "60%" }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="t-faq">
        <Reveal>
          <div className="t-faq__intro">
            <h2>Everything you need to know</h2>
            <a className="t-btn-dark t-btn-reveal" href="/contact">
              <span data-text="Contact us">Contact us</span>
            </a>
          </div>
        </Reveal>
        <TetherFaq items={FAQS} />
      </section>

      {/* CTA */}
      <section className="t-cta">
        <Reveal>
          <span className="t-badge">Devtude</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2>Let&apos;s talk about your business.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a className="t-btn-yellow t-btn-reveal" href="/contact">
            <span data-text="Book a Free Call">Book a Free Call</span>
          </a>
        </Reveal>
      </section>
    </>
  );
}
