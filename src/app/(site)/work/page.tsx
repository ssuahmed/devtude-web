import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Chip from "@/components/ui/Chip";
import CtaBanner from "@/components/ui/CtaBanner";
import WorkCard from "@/components/ui/WorkCard";
import { WORK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Devtude",
  description: "Selected platforms we have architected and shipped, from streaming and payments to commerce and custom apps.",
};

export default function WorkPage() {
  const [featured, ...rest] = WORK;

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pb-20 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Chip>Selected work</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-6xl">
              A look at what we&apos;ve{" "}
              <span className="gradient-text">designed and built.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              Platforms we have architected and shipped: streaming, payments,
              personal finance, commerce, and custom apps. Open any one for
              the problem, what we built, and the result.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured && <WorkCard item={featured} featured />}
          {rest.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <CtaBanner headline="Have something similar in mind?" ctaLabel="Book a Call" />
    </>
  );
}
