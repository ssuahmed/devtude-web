"use client";

import { useEffect, useRef } from "react";

export default function SplitHeading({
  text,
  as: Tag = "h1",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frame = requestAnimationFrame(() => el.classList.add("is-in"));
    return () => cancelAnimationFrame(frame);
  }, []);

  const words = text.split(/\s+/);

  return (
    <Tag ref={ref} className={`t-split ${className}`}>
      {words.map((word, i) => (
        <span className="t-word" key={i}>
          <span style={{ transitionDelay: `${i * 70}ms` }}>{word}</span>
        </span>
      ))}
    </Tag>
  );
}
