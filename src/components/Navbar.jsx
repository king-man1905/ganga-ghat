import { useState } from "react";
import { WA_MESSAGES, waLink } from "../lib/contact";
import { IconClose, IconMenu } from "./icons";
import LogoMark from "./Logo";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gaya", label: "Gaya Ji" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8 text-maroon sm:h-9 sm:w-9" />
          <span className="font-display text-xl font-semibold tracking-wide text-maroon sm:text-2xl">
            Gaya Ji Pind Daan
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-ink/80 transition hover:text-maroon"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory transition hover:bg-maroon-dark"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-maroon md:hidden"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/30 bg-ivory px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-body text-base font-medium text-ink/85 hover:bg-ivory-dark"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
