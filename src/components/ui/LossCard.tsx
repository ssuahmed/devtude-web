import { PackageX, MessageCircleX, Users, Clock, TrendingDown, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  "Dead stock": PackageX,
  "Missed follow ups": MessageCircleX,
  "Over or understaffing": Users,
  "Bad staffing calls": Users,
  "Late payments": Clock,
  "Slow decisions": TrendingDown,
};

const TONES = [
  "bg-primary-container text-on-primary-container",
  "bg-secondary-container text-on-secondary-container",
  "bg-tertiary-container text-on-tertiary-container",
  "bg-primary-container text-on-primary-container",
  "bg-secondary-container text-on-secondary-container",
];

type LossCardProps = {
  title: string;
  body: string;
  index: number;
};

export default function LossCard({ title, body, index }: LossCardProps) {
  const Icon = ICONS[title] ?? PackageX;
  const tone = TONES[index % TONES.length];

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <div className="flex h-full flex-col gap-4 rounded-md3 bg-surface-container-lowest p-6 shadow-md3 ring-1 ring-outline-variant/40">
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold tracking-tight text-on-surface">{title}</h3>
        <p className="text-sm leading-relaxed text-on-surface-variant">{body}</p>
      </div>
    </Reveal>
  );
}
