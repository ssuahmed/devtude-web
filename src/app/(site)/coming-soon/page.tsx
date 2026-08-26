import type { Metadata } from "next";
import Section, { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProductBlock from "@/components/ui/ProductBlock";
import SignupForm from "@/components/ui/SignupForm";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Chip from "@/components/ui/Chip";
import { PRODUCTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coming Soon — Devtude",
  description:
    "A future self-serve version of the work we do with clients. Hire us now, or get notified when it's ready.",
};

export default function ComingSoonPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 md:pt-32">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <Chip>A product we&apos;re building</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-medium leading-[1.08] tracking-tight text-on-surface md:text-6xl">
              A self-serve version of the work{" "}
              <span className="gradient-text">we do with clients.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
              Hire us to design and build with you now, or get notified when
              you can use it on your own.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="pt-0">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {PRODUCTS.map((product) => (
            <ProductBlock key={product.name} {...product} />
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-xl rounded-md3-lg bg-surface-container-low px-8 py-12 text-center md:px-12">
            <Eyebrow>Stay in the loop</Eyebrow>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-on-surface">
              Want a note when it&apos;s ready?
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant">
              Get notified about the self-serve version. Or book a call if
              you&apos;d rather hire us now.
            </p>
            <div className="mt-6">
              <SignupForm productName="all products" ctaLabel="Notify Me" />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
