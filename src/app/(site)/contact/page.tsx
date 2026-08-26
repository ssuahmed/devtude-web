import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Chip from "@/components/ui/Chip";
import CalendlyEmbed from "@/components/ui/CalendlyEmbed";
import { ShieldCheck, Lock, Zap } from "lucide-react";
import { CALENDLY_URL, TRUST_POINTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Call — Devtude",
  description:
    "Tell us how the business runs. We'll tell you what we'd build.",
};

const TRUST_ICONS = [ShieldCheck, Lock, Zap];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <Chip>Book a call</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-6xl">
              Tell us how the business runs.{" "}
              <span className="gradient-text">We&apos;ll tell you what we&apos;d build.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              A short, no pressure call about how you work, and whether we&apos;re
              the right team to build around it.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="pt-0 pb-16">
        <Reveal delay={0.15}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-md3-lg bg-surface-container-lowest shadow-md3 ring-1 ring-outline-variant/40">
            <CalendlyEmbed url={CALENDLY_URL} />
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
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
                <div className={`flex h-full flex-col items-center gap-3 rounded-md3 px-5 py-7 text-center ${tone.card}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone.icon}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
