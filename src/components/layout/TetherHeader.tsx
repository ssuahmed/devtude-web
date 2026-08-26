"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, BOOK_CALL, SITE } from "@/lib/content";
import BrandMark from "@/components/brand/BrandMark";

export default function TetherHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`t-header${solid ? " is-solid" : ""}`}>
        <div className="t-header__inner">
          <Link href="/tether" className="t-logo">
            <BrandMark className="h-7 w-auto text-[#5254fe]" />
            {SITE.name}
          </Link>

          <nav className="t-nav-desktop">
            {NAV_LINKS.map((link) => (
              <a key={link.href} className="t-btn-reveal" href={link.href}>
                <span data-text={link.label}>{link.label}</span>
              </a>
            ))}
            <a className="t-btn-fill t-btn-reveal" href={BOOK_CALL.href}>
              <span data-text={BOOK_CALL.label}>{BOOK_CALL.label}</span>
            </a>
          </nav>

          <button
            className="t-menu-toggle"
            type="button"
            aria-label="Navigation Menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className="t-offcanvas" hidden={!open}>
        <button
          className="t-offcanvas__close"
          type="button"
          aria-label="Close Menu"
          onClick={() => setOpen(false)}
        />
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={BOOK_CALL.href} onClick={() => setOpen(false)}>
              {BOOK_CALL.label}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
