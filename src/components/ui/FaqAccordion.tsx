"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={item.question} delay={i * 0.04}>
            <div
              className={`overflow-hidden rounded-md3 ring-1 ring-outline-variant/40 transition-colors ${
                isOpen ? "bg-surface-container-lowest shadow-md3" : "bg-surface-container-low"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold tracking-tight text-on-surface">
                  {item.question}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-container-high">
                  <ChevronDown
                    className={`h-5 w-5 text-on-surface-variant transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {isOpen && (
                <p
                  id={`faq-answer-${i}`}
                  className="px-6 pb-5 text-sm leading-relaxed text-on-surface-variant"
                >
                  {item.answer}
                </p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
