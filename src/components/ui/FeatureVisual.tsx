import {
  BellRing,
  CalendarClock,
  LayoutGrid,
  MessageCircle,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";

export type FeatureScene = "ops" | "insight" | "custom";

export default function FeatureVisual({
  scene,
  tone = "primary",
}: {
  scene: FeatureScene;
  tone?: "primary" | "secondary" | "tertiary";
}) {
  if (scene === "insight") return <InsightScene />;
  if (scene === "custom") return <CustomScene tone={tone} />;
  return <OpsScene />;
}

function OpsScene() {
  return (
    <div className="relative h-full min-h-72 w-full md:min-h-[22rem]">
      <div className="absolute left-[8%] top-[14%] w-[46%] rotate-[-6deg] rounded-md3 bg-surface-container-lowest p-4 shadow-md3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
          This week
        </p>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {[40, 62, 48, 78, 55, 90, 70].map((h, i) => (
            <span
              key={i}
              className={`w-full rounded-t-md ${i === 5 ? "bg-primary" : "bg-primary-container"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-[8%] top-[10%] w-[38%] rotate-[7deg] rounded-md3 bg-primary p-4 text-on-primary shadow-md3">
        <p className="text-[11px] font-medium opacity-80">Today</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight">On track</p>
      </div>

      <div className="absolute bottom-[28%] left-[12%] flex items-center gap-2 rounded-full bg-surface-container-lowest px-3 py-2 shadow-md3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold text-on-surface">Follow-up due</span>
      </div>

      <div className="absolute bottom-[10%] right-[10%] w-[48%] rotate-[-3deg] rounded-md3 bg-surface-container-lowest p-3 shadow-md3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-tertiary-container text-on-tertiary-container">
            <Users className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold text-on-surface">Team</p>
            <p className="text-[11px] text-on-surface-variant">Covered today</p>
          </div>
        </div>
      </div>

      <span className="absolute right-[18%] top-[42%] flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-md3">
        <LayoutGrid className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </div>
  );
}

function InsightScene() {
  return (
    <div className="relative h-full min-h-72 w-full md:min-h-[22rem]">
      <div className="absolute left-[10%] top-[12%] w-[52%] rotate-[-5deg] rounded-md3 bg-surface-container-lowest p-4 shadow-md3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
          Attention
        </p>
        <svg viewBox="0 0 160 56" className="mt-3 h-14 w-full" aria-hidden="true">
          <path
            d="M4 40 C24 40 28 18 48 22 C68 26 72 8 92 14 C112 20 120 36 156 12"
            fill="none"
            stroke="currentColor"
            className="text-secondary"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute right-[8%] top-[16%] flex rotate-[8deg] items-center gap-2 rounded-full bg-surface-container-lowest px-3 py-2 shadow-md3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-on-secondary">
          <BellRing className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold text-on-surface">3 to review</span>
      </div>

      <div className="absolute bottom-[22%] left-[8%] w-[54%] rotate-[3deg] rounded-md3 bg-surface-container-lowest p-3 shadow-md3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container">
            <CalendarClock className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="text-xs font-medium text-on-surface">A slow week is starting</p>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[10%] w-[44%] rotate-[-6deg] rounded-md3 bg-surface-container-lowest p-3 shadow-md3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-tertiary-container text-on-tertiary-container">
            <Wallet className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="text-xs font-medium text-on-surface">Invoice waiting</p>
        </div>
      </div>
    </div>
  );
}

function CustomScene({ tone }: { tone: "primary" | "secondary" | "tertiary" }) {
  const frame = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary text-on-secondary",
    tertiary: "bg-tertiary text-on-tertiary",
  }[tone];

  return (
    <div className="relative h-full min-h-72 w-full md:min-h-[22rem]">
      <div className="absolute left-[12%] top-[12%] w-[58%] rotate-[-7deg] rounded-md3 bg-surface-container-lowest p-3 shadow-md3">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-gemini-coral/80" />
          <span className="h-2 w-2 rounded-full bg-gemini-violet/80" />
          <span className="h-2 w-2 rounded-full bg-gemini-teal/80" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="h-10 rounded-2xl bg-primary-container" />
          <span className="h-10 rounded-2xl bg-secondary-container" />
          <span className="h-10 rounded-2xl bg-tertiary-container" />
        </div>
        <div className="mt-2 h-8 rounded-2xl bg-surface-container-high" />
      </div>

      <div className={`absolute right-[10%] top-[18%] w-[28%] rotate-[9deg] rounded-[1.6rem] p-2 shadow-md3 ${frame}`}>
        <div className="rounded-[1.2rem] bg-surface-container-lowest p-2">
          <span className="mx-auto mb-2 block h-1.5 w-8 rounded-full bg-outline-variant" />
          <span className="block h-16 rounded-xl bg-tertiary-container" />
          <span className="mt-2 block h-3 rounded-full bg-surface-container-high" />
        </div>
      </div>

      <div className="absolute bottom-[12%] left-[16%] flex rotate-[-4deg] items-center gap-2 rounded-full bg-surface-container-lowest px-3 py-2 shadow-md3">
        <Smartphone className="h-3.5 w-3.5 text-tertiary" aria-hidden="true" />
        <span className="text-xs font-semibold text-on-surface">Built for this team</span>
      </div>
    </div>
  );
}
