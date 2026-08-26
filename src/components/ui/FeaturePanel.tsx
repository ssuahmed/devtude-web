import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import FeatureVisual, { type FeatureScene } from "@/components/ui/FeatureVisual";

type FeaturePanelProps = {
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  scene: FeatureScene;
  reverse?: boolean;
  tone?: "primary" | "secondary" | "tertiary";
};

const TONES = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

export default function FeaturePanel({
  eyebrow,
  headline,
  body,
  ctaLabel,
  ctaHref,
  scene,
  reverse = false,
  tone = "primary",
}: FeaturePanelProps) {
  return (
    <Reveal>
      <div
        className={`grid grid-cols-1 overflow-hidden rounded-md3-lg bg-surface-container-lowest shadow-md3 ring-1 ring-outline-variant/40 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col justify-center p-8 md:p-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-on-surface md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 leading-relaxed text-on-surface-variant">{body}</p>
          <div className="mt-8">
            <Button href={ctaHref} variant="outlined" showArrow>
              {ctaLabel}
            </Button>
          </div>
        </div>
        <div className={`min-h-72 md:min-h-[22rem] ${TONES[tone]}`}>
          <FeatureVisual scene={scene} tone={tone} />
        </div>
      </div>
    </Reveal>
  );
}
