import { CALL_NUMBERS, telLink, WA_MESSAGES, waLink } from "../lib/contact";
import { IconPhone, IconWhatsApp } from "./icons";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-gold/30 bg-ivory p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={waLink(WA_MESSAGES.floating)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-forest py-3 font-body font-semibold text-ivory active:scale-[0.98]"
      >
        <IconWhatsApp className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href={telLink(CALL_NUMBERS[0])}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-maroon py-3 font-body font-semibold text-maroon active:scale-[0.98]"
      >
        <IconPhone className="h-5 w-5" />
        Call
      </a>
    </div>
  );
}
