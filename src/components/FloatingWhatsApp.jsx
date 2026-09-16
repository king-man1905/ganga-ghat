import { WA_MESSAGES, waLink } from "../lib/contact";
import { IconWhatsApp } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(WA_MESSAGES.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-xl transition hover:bg-forest-dark hover:scale-105 md:flex"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
