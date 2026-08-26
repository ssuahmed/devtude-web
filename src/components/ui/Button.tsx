import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "tonal" | "outlined" | "text";
  className?: string;
  showArrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "filled",
  className = "",
  showArrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.98]";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    filled:
      "bg-primary text-on-primary shadow-md3 hover:shadow-md3-lg hover:brightness-110",
    tonal:
      "bg-primary-container text-on-primary-container hover:brightness-95",
    outlined:
      "bg-surface-container-lowest/70 text-on-surface ring-1 ring-outline-variant hover:bg-surface-container-low",
    text: "text-primary hover:bg-primary-container/50",
  };

  const classNameFull = `${base} ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classNameFull}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameFull}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
