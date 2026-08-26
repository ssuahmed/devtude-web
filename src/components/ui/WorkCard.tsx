import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { WorkItem } from "@/lib/content";

const TONES = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

export default function WorkCard({
  item,
  featured = false,
}: {
  item: WorkItem;
  featured?: boolean;
}) {
  return (
    <Reveal className={featured ? "md:col-span-2" : ""}>
      <Link
        href={`/work/${item.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-md3-lg bg-surface-container-lowest shadow-md3 ring-1 ring-outline-variant/40 transition-shadow hover:shadow-md3-lg"
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/8] min-h-56" : "aspect-[16/10]"
          } ${item.image ? "bg-surface-container" : TONES[item.tone]}`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes={featured ? "(min-width: 768px) 72rem, 100vw" : "(min-width: 768px) 36rem, 100vw"}
            />
          ) : (
              <div className="flex h-full flex-col justify-end p-6 md:p-8">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs opacity-70">{item.client}</p>
              </div>
          )}
        </div>

        <div className={`flex flex-1 flex-col p-6 md:p-8 ${featured ? "md:p-10" : ""}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
            {item.client}
            {item.year ? ` · ${item.year}` : ""}
          </p>
          <h2 className={`mt-2 font-medium tracking-tight text-on-surface ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.summary}</p>

          {item.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-surface-container-low px-3 py-1 text-xs font-medium text-on-surface-variant"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
