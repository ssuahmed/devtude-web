"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function TetherFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="t-faq__list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`t-faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
            <button
              type="button"
              className="t-faq-item__summary"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="t-faq-item__icon" aria-hidden="true" />
            </button>
            {isOpen && <p>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
