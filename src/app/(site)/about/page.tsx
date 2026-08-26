import type { Metadata } from "next";
import Section, { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Chip from "@/components/ui/Chip";
import CtaBanner from "@/components/ui/CtaBanner";
import { APPROACH_PILLARS } from "@/lib/content";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Devtude",
  description:
    "We started this so small businesses could hire a team that builds around them.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pb-20 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Chip>About Devtude</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-6xl">
              We started this so small businesses could hire a team that{" "}
              <span className="gradient-text">builds around them.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              We kept seeing the same thing: small business owners stuck
              between spreadsheets that don&apos;t scale and enterprise
              software that&apos;s too complex or too expensive to bother
              with. So we work as a studio in between, a team you hire to
              build around how the business already runs.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-md3-lg bg-surface-container-low px-8 py-12 md:px-16 md:py-16">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
              What small business owners deal with today
            </h2>
            <p className="mt-4 leading-relaxed text-on-surface-variant">
              Manual tracking in notebooks or spreadsheets. Tools that
              don&apos;t talk to each other. And no time to learn a
              complicated system on top of actually running the business.
              The result is the same story everywhere: small losses that pile
              up quietly, because nothing is watching for them.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            Three things we don&apos;t compromise on
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {APPROACH_PILLARS.map((pillar, i) => {
            const tones = [
              "bg-primary-container text-on-primary-container",
              "bg-secondary-container text-on-secondary-container",
              "bg-tertiary-container text-on-tertiary-container",
            ];
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full rounded-md3 bg-surface-container-lowest p-8 text-center shadow-md3 ring-1 ring-outline-variant/40">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold ${tones[i]}`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-on-surface">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Team</Eyebrow>
          <Reveal>
            <div className="mt-8 flex flex-col items-center gap-4">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant">
                <User className="h-9 w-9" aria-hidden="true" />
              </span>
              <p className="text-sm text-on-surface-variant">Founder story coming soon.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBanner headline="Want to see if we'd be a fit?" ctaLabel="Book a Call" />
    </>
  );
}
