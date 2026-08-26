import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/content";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/40 bg-surface-container-low">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-variant">
              {SITE.blurb}
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              Site
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Book a Call
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              Contact
            </p>
            <a
              href="mailto:hello@devtude.com"
              className="text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              hello@devtude.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-outline-variant/40 pt-6">
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
