import { WA_MESSAGES } from "../lib/contact";
import { WhatsAppButton, CallButton } from "./Buttons";

export default function Booking() {
  return (
    <section id="contact" className="relative overflow-hidden bg-maroon px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-30" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-body text-sm font-semibold tracking-[0.25em] text-gold uppercase">
          Pitru Paksha 2026
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-4xl">
          26 September – 10 October
        </h2>
        <p className="mt-2 font-body text-ivory/85">Gaya Ji, Bihar</p>

        <div className="mx-auto mt-8 inline-flex flex-col items-center gap-1 rounded-xl border border-gold/50 bg-ivory/10 px-8 py-5 backdrop-blur-sm">
          <span className="font-body text-xs uppercase tracking-wide text-ivory/70">Advance Booking</span>
          <span className="font-display text-3xl font-semibold text-gold">₹2,100/-</span>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <WhatsAppButton message={WA_MESSAGES.booking} tone="gold">
            Book on WhatsApp
          </WhatsAppButton>
          <CallButton tone="ivory" />
        </div>

        <p className="mt-6 font-body text-sm text-ivory/70">
          Contact us to confirm your ritual requirements and arrangements.
        </p>
      </div>
    </section>
  );
}
