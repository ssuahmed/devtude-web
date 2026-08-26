import Button from "@/components/ui/Button";
import MeshBackdrop from "@/components/ui/MeshBackdrop";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner({
  headline,
  ctaLabel = "Book a Free Call",
}: {
  headline: string;
  ctaLabel?: string;
}) {
  return (
    <section className="px-5 pb-16 md:px-8 md:pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-md3-lg bg-inverse-surface px-8 py-16 text-center md:px-16 md:py-20">
          <MeshBackdrop variant="dark" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-4xl font-medium tracking-tight text-inverse-on-surface md:text-5xl">
              {headline}
            </h2>
            <div className="mt-8">
              <Button href="/contact" variant="tonal" showArrow>
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
