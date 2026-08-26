"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUpStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const numeric = Number(value);
  const isNumeric = value.trim() !== "" && !Number.isNaN(numeric);
  const [display, setDisplay] = useState(isNumeric ? 0 : numeric);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const duration = 800;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, isNumeric, numeric]);

  return <span ref={ref}>{isNumeric ? display : value}</span>;
}
