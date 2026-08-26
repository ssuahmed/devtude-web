import { NAV_LINKS, BOOK_CALL, SITE } from "@/lib/content";

export default function TetherFooter() {
  return (
    <footer className="t-footer">
      <div className="t-footer-top">
        <h2>Software built for businesses like yours.</h2>
        <div className="t-footer-links">
          <div>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={BOOK_CALL.href}>{BOOK_CALL.label}</a>
          </div>
          <div>
            <a href="mailto:hello@devtude.com">hello@devtude.com</a>
          </div>
        </div>
      </div>
      <div className="t-footer-bottom">
        <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
