import { CALL_NUMBERS, telLink, waLink } from "../lib/contact";
import { IconPhone, IconWhatsApp } from "./icons";

const WHATSAPP_TONES = {
  forest: "bg-forest text-ivory shadow-lg shadow-forest/20 hover:bg-forest-dark",
  gold: "bg-gold text-maroon-dark shadow-lg shadow-black/10 hover:bg-saffron-dark hover:text-ivory",
};

export function WhatsAppButton({ message, children = "Book on WhatsApp", tone = "forest" }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body font-semibold transition active:scale-[0.98] ${WHATSAPP_TONES[tone]}`}
    >
      <IconWhatsApp className="w-5 h-5" />
      {children}
    </a>
  );
}

const CALL_TONES = {
  maroon: "border-maroon text-maroon hover:bg-maroon hover:text-ivory",
  ivory: "border-ivory/70 text-ivory hover:bg-ivory hover:text-maroon",
};

export function CallButton({ tone = "maroon", children = "Call Now" }) {
  return (
    <a
      href={telLink(CALL_NUMBERS[0])}
      aria-label={`Call us at ${CALL_NUMBERS[0]}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 font-body font-semibold transition active:scale-[0.98] ${CALL_TONES[tone]}`}
    >
      <IconPhone className="w-5 h-5" />
      {children}
    </a>
  );
}
