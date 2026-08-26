import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Section, { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/ui/CtaBanner";
import WorkCard from "@/components/ui/WorkCard";
import { WORK, getWorkBySlug } from "@/lib/content";

const TONES = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

export function generateStaticParams() {
  return WORK.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Work — Devtude" };

  return {
    title: `${item.title} — Devtude`,
    description: item.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  const others = WORK.filter((entry) => entry.slug !== item.slug).slice(0, 2);
  const sections = [
    { eyebrow: "The problem", body: item.challenge },
    { eyebrow: "What we built", body: item.approach },
    { eyebrow: "The result", body: item.outcome },
  ];

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All work
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8">
              <Chip>
                {item.client}
                {item.year ? ` · ${item.year}` : ""}
              </Chip>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-6xl">
              {item.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-sm font-medium text-on-surface-variant">{item.role}</p>
            <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">{item.summary}</p>
          </Reveal>
          {item.tags.length > 0 && (
            <Reveal delay={0.18}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-surface-container-lowest px-3 py-1 text-xs font-medium text-on-surface-variant ring-1 ring-outline-variant/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
          {item.href ? (
            <Reveal delay={0.22}>
              <div className="mt-8">
                <Button href={item.href} variant="filled" showArrow>
                  Visit site
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <Section className="pt-0">
        <Reveal>
          <div
            className={`relative aspect-[16/9] overflow-hidden rounded-md3-lg ${
              item.image ? "bg-surface-container" : TONES[item.tone]
            }`}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 72rem, 100vw"
                priority
              />
            ) : (
              <div className="flex h-full flex-col justify-end p-8 md:p-12">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-1 text-sm opacity-70">{item.client}</p>
              </div>
            )}
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {sections.map((section, i) => (
            <Reveal key={section.eyebrow} delay={i * 0.06}>
              <div className="h-full rounded-md3 bg-surface-container-lowest p-8 shadow-md3 ring-1 ring-outline-variant/40">
                <Eyebrow>{section.eyebrow}</Eyebrow>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {others.length > 0 && (
        <Section className="pt-0">
          <Eyebrow>More work</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            Other projects
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((entry) => (
              <WorkCard key={entry.slug} item={entry} />
            ))}
          </div>
        </Section>
      )}

      <CtaBanner headline="Want something like this for your business?" ctaLabel="Book a Call" />
    </>
  );
}
