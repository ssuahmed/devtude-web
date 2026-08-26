import Section, { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import LossCard from "@/components/ui/LossCard";
import FeaturePanel from "@/components/ui/FeaturePanel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import HeroPreview from "@/components/ui/HeroPreview";
import Chip from "@/components/ui/Chip";
import CtaBanner from "@/components/ui/CtaBanner";
import CountUpStat from "@/components/ui/CountUpStat";
import {
  ShieldCheck,
  Lock,
  Zap,
} from "lucide-react";
import {
  WHO_WE_ARE,
  PILLARS,
  LOSS_POINTS,
  STAT_CALLOUTS,
  HOW_IT_WORKS,
  TRUST_POINTS,
  FAQS,
  SITE,
} from "@/lib/content";

const TRUST_ICONS = [ShieldCheck, Lock, Zap];
const PILLAR_TONES = ["primary", "secondary", "tertiary"] as const;
const PILLAR_SCENES = ["ops", "insight", "custom"] as const;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pb-20 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Chip>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {SITE.tagline}
              </Chip>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-7xl">
                Building AI enabled experiences that{" "}<br/>
                <span className="gradient-text">empower your business.</span>
              </h1>
            </Reveal>
            {/* <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                A small team you hire to create AI-powered management systems
                and custom software, one business at a time, starting with how
                you already run things.
              </p>
            </Reveal> */}
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" variant="filled" showArrow>
                  Book a Free Call
                </Button>
                <Button href="/about" variant="outlined">
                  Our Story
                </Button>
              </div>
            </Reveal>
          </div>

          <HeroPreview />
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-md3-lg bg-surface-container-low px-8 py-12 text-center md:px-16 md:py-16">
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
           A team that delivers software{" "}<br/>
            <span className="gradient-text">built around you.</span>
            </h2>
            
            <p className="mt-4 leading-relaxed text-on-surface-variant">
              Spreadsheets that don't talk.{" "}
              Software built for IT departments they don't have.{" "}
              Decisions made on gut feel because the numbers are scattered everywhere.{" "}
              Every bussiness owner, large or small enterprise told us the same story.<br/>
              We build the opposite, software shaped around how the business actually runs,{" "}
              with AI doing the busywork so owners can get back to theirs.
              </p>
          </div>
        </Reveal>
      </Section>

      {/* <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-md3-lg bg-surface-container-low px-8 py-12 text-center md:px-16 md:py-16">
            <Eyebrow>{WHO_WE_ARE.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
              {WHO_WE_ARE.headline}
            </h2>
            
            <p className="mt-4 leading-relaxed text-on-surface-variant">{WHO_WE_ARE.body}</p>
          </div>
        </Reveal>
      </Section> */}

      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {TRUST_POINTS.map((text, i) => {
            const Icon = TRUST_ICONS[i];
            const tones = [
              {
                card: "bg-primary-container text-on-primary-container",
                icon: "bg-primary text-on-primary",
              },
              {
                card: "bg-secondary-container text-on-secondary-container",
                icon: "bg-secondary text-on-secondary",
              },
              {
                card: "bg-tertiary-container text-on-tertiary-container",
                icon: "bg-tertiary text-on-tertiary",
              },
            ] as const;
            const tone = tones[i];
            return (
              <Reveal key={text} delay={i * 0.08}>
                <div className={`flex h-full flex-col items-center gap-3 rounded-md3 px-6 py-8 text-center ${tone.card}`}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.icon}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col gap-6">
          {PILLARS.map((pillar, i) => (
            <FeaturePanel
              key={pillar.eyebrow}
              eyebrow={pillar.eyebrow}
              headline={pillar.headline}
              body={pillar.body}
              ctaLabel={pillar.ctaLabel}
              ctaHref={pillar.ctaHref}
              scene={PILLAR_SCENES[i]}
              reverse={i % 2 === 1}
              tone={PILLAR_TONES[i]}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>A few things almost every business owner tells us</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            See if any of these sound familiar
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {LOSS_POINTS.map((point, i) => (
            <LossCard key={point.title} title={point.title} body={point.body} index={i} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STAT_CALLOUTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="rounded-md3-lg bg-surface-container-low px-6 py-10 text-center">
                <p className="text-5xl font-medium tracking-tight text-on-surface md:text-6xl">
                  <CountUpStat value={item.stat} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="how-it-works">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            Up and running without the overhead
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <div className="h-full rounded-md3 bg-surface-container-lowest p-8 shadow-md3 ring-1 ring-outline-variant/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-on-primary">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Everything you need to know</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            Questions we hear before that first call
          </h2>
        </div>
        <div className="mt-12">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <CtaBanner headline="Let's talk about your business." />
    </>
  );
}
