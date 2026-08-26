import Link from "next/link";
import { SITE } from "@/lib/content";
import BrandMark from "@/components/brand/BrandMark";

export default function Logo({
  inverse = false,
  href = "/",
}: {
  inverse?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none ${
        inverse ? "text-inverse-on-surface" : "text-on-surface"
      }`}
    >
      <BrandMark className="h-8 w-auto text-[#5254fe]" />
      <span className="text-[15px] font-semibold tracking-tight">{SITE.name}</span>
    </Link>
  );
}
