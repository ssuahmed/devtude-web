import Reveal from "@/components/ui/Reveal";
import SignupForm from "@/components/ui/SignupForm";
import type { ProductBlock as ProductBlockType } from "@/lib/content";

const STATUS_STYLES: Record<string, string> = {
  "In development": "bg-surface-container-high text-on-surface-variant",
  "Coming soon": "bg-primary-container text-on-primary-container",
  "Early access open": "bg-tertiary-container text-on-tertiary-container",
};

export default function ProductBlock({ name, description, status, teaser }: ProductBlockType) {
  return (
    <Reveal>
      <div className="rounded-md3-lg bg-surface-container-lowest p-8 shadow-md3 ring-1 ring-outline-variant/40 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-on-surface">{name}</h3>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}>
            {status}
          </span>
        </div>
        <p className="mt-3 text-sm font-medium text-on-surface">{description}</p>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{teaser}</p>

        <div className="mt-6">
          <SignupForm productName={name} ctaLabel="Notify Me" />
          <p className="mt-2 text-xs text-on-surface-variant">
            No spam. Just an update when it&apos;s ready.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
