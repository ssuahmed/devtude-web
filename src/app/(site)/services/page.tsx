import type { Metadata } from "next";
import Section, { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import LossCard from "@/components/ui/LossCard";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Chip from "@/components/ui/Chip";
import CtaBanner from "@/components/ui/CtaBanner";
import { SERVICE_CAPABILITIES, CUSTOM_APP_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Devtude",
  description:
    "Hire us to design a management system around your operations, or to build a custom app for a specific problem.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pb-20 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Chip>What we do</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-6xl">
              Two ways we can{" "}
              <span className="gradient-text">work with you.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              We either design a management system around your operations, or
              we build a custom app for a specific problem.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="rounded-md3-lg bg-surface-container-low px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Offering 01</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
              AI-enabled management systems
            </h2>
            <p className="mt-4 leading-relaxed text-on-surface-variant">
              Most management software just records what already happened. We
              sit with how you work, then design and build a system that
              watches your daily operations and flags what&apos;s about to
              cost you, before it does.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICE_CAPABILITIES.map((cap, i) => (
              <LossCard key={cap.title} title={cap.title} body={cap.body} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/contact" variant="filled" showArrow>
              Book a call to see what we&apos;d build for your business
            </Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Offering 02</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            Custom Web and Mobile App Development
          </h2>
          <p className="mt-4 leading-relaxed text-on-surface-variant">
            For businesses that need something specific, a custom web app,
            mobile app, or internal tool, built and shipped without the
            overhead of a big agency.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CUSTOM_APP_STEPS.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className="h-full rounded-md3 bg-surface-container-lowest p-8 text-center shadow-md3 ring-1 ring-outline-variant/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container text-sm font-bold text-on-primary-container">
                  {i + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-on-surface">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/contact" variant="outlined" showArrow>
            Tell us what you&apos;re building
          </Button>
        </div>
      </Section>

      <CtaBanner headline="Not sure which fits? Let's talk it through." ctaLabel="Book a Call" />
    </>
  );
}
