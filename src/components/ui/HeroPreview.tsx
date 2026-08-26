import { CalendarClock, MessageCircle, Wallet } from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="relative mx-auto mt-8 max-w-4xl sm:mt-10">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-md3-lg bg-surface-container-lowest p-3 shadow-md3-lg ring-1 ring-outline-variant/50 sm:p-4">
        <div className="rounded-md3 bg-surface-container-low p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gemini-coral/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gemini-violet/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gemini-teal/80" />
            </div>
            <p className="text-xs font-medium text-on-surface-variant">Today</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatTile label="Operations" value="On track" tone="primary" />
            <StatTile label="Open items" value="3" tone="secondary" />
            <StatTile label="Team" value="Covered" tone="tertiary" />
          </div>

          <div className="mt-4 rounded-md3 bg-surface-container-lowest p-4 ring-1 ring-outline-variant/40">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
              Attention
            </p>
            <ul className="mt-3 space-y-2.5">
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                A follow-up is waiting
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary-container text-on-tertiary-container">
                  <Wallet className="h-4 w-4" aria-hidden="true" />
                </span>
                An invoice still hasn&apos;t landed
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute -left-3 top-10 hidden items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 shadow-md3 ring-1 ring-outline-variant/50 sm:flex">
        <CalendarClock className="h-4 w-4 text-secondary" aria-hidden="true" />
        <span className="text-xs font-semibold text-on-surface">Something needs a look</span>
      </div>
      <div className="absolute -right-3 bottom-10 hidden items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 shadow-md3 ring-1 ring-outline-variant/50 sm:flex">
        <Wallet className="h-4 w-4 text-tertiary" aria-hidden="true" />
        <span className="text-xs font-semibold text-on-surface">Cash still outstanding</span>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "primary" | "secondary" | "tertiary";
}) {
  const tones = {
    primary: "bg-primary-container text-on-primary-container",
    secondary: "bg-secondary-container text-on-secondary-container",
    tertiary: "bg-tertiary-container text-on-tertiary-container",
  };

  return (
    <div className={`rounded-md3 p-4 ${tones[tone]}`}>
      <p className="text-xs font-medium opacity-80">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
