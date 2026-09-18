import { CALL_NUMBERS, telLink, WA_MESSAGES, waLink } from "../lib/contact";
import { IconInstagram, IconMapPin, IconPhone, IconWhatsApp } from "./icons";
import LogoMark from "./Logo";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gaya", label: "Gaya Ji" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-ivory-dark px-4 pt-14 pb-28 sm:px-6 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark className="h-7 w-7 text-maroon" />
            <h3 className="font-display text-xl font-semibold text-maroon">
              Pind Daan & Shraddha Services
            </h3>
          </div>
          <p className="mt-1 font-body text-sm text-ink/70">Gaya Ji, Bihar</p>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-ink/60">Address</h4>
          <p className="mt-3 flex items-start gap-2 font-body text-sm leading-relaxed text-ink/80">
            <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
            Pindvechi, Chandchora,
            <br />
            Near Vishnupad Temple
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-ink/60">Contact</h4>
          <a
            href={waLink(WA_MESSAGES.floating)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 font-body text-sm text-ink/80 hover:text-maroon"
          >
            <IconWhatsApp className="h-4 w-4 shrink-0 text-forest" />
            WhatsApp: {CALL_NUMBERS[1]}
          </a>
          <a
            href="https://www.instagram.com/gaya_jii_pind_daan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram – Gaya Ji Pind Daan"
            className="mt-2 flex items-center gap-2 font-body text-sm text-ink/80 hover:text-maroon"
          >
            <IconInstagram className="h-4 w-4 shrink-0 text-forest" />
            Instagram: @gaya_jii_pind_daan
          </a>
          {CALL_NUMBERS.map((n) => (
            <a
              key={n}
              href={telLink(n)}
              className="mt-2 flex items-center gap-2 font-body text-sm text-ink/80 hover:text-maroon"
            >
              <IconPhone className="h-4 w-4 shrink-0 text-forest" />
              Call: {n}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-ink/60">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-body text-sm text-ink/80 hover:text-maroon">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-gold/25 pt-6">
        <p className="font-body text-xs leading-relaxed text-ink/55">
          Information and arrangements are subject to the family's requirements and applicable local
          arrangements.
        </p>
        <p className="mt-2 font-body text-xs text-ink/45">
          © {new Date().getFullYear()} Pind Daan & Shraddha Services, Gaya Ji.
        </p>
      </div>
    </footer>
  );
}
