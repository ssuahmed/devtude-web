"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOK_CALL } from "@/lib/content";
import Button from "@/components/ui/Button";
import Logo from "@/components/brand/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-surface-container-lowest/75 px-3 py-2 shadow-md3 ring-1 ring-outline-variant/50 backdrop-blur-xl md:px-4">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden sm:block">
          <Button href={BOOK_CALL.href} variant="filled">
            {BOOK_CALL.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-on-surface lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-md3-lg bg-surface-container-lowest p-4 shadow-md3-lg ring-1 ring-outline-variant/50 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-3 text-base font-medium text-on-surface hover:bg-surface-container-high"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href={BOOK_CALL.href} variant="filled" className="mt-2 w-full">
              {BOOK_CALL.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
