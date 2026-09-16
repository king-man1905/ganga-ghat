import { WA_MESSAGES } from "../lib/contact";
import { WhatsAppButton, CallButton } from "./Buttons";
import PhotoFrame from "./PhotoFrame";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-forest-dark">
      <PhotoFrame
        src="/images/hero-pind-daan-ritual-gaya.jpg"
        alt="A family with a Pandit performing Pind Daan ritual with offerings and lit diyas in Gaya Ji"
        caption="Photo: Pind Daan ritual performed by a family with a Pandit, Gaya Ji"
        eager
        className="absolute inset-0 h-full w-full"
      />
      {/* readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/70 to-forest-dark/95" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 md:min-h-[85svh]">
        <p className="mb-4 font-body text-sm font-semibold tracking-[0.25em] text-saffron uppercase">
          Pitru Paksha 2026
        </p>

        <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
          Pind Daan in Gaya Ji
        </h1>

        <p className="mt-4 max-w-xl font-body text-lg text-ivory/90 sm:text-xl">
          Honour Your Ancestors. Preserve Your Traditions.
        </p>

        <p className="mt-3 font-devanagari text-lg text-gold sm:text-xl">
          श्रद्धा आपकी, सेवा हमारी — यथाशक्ति पिंडदान
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 font-body text-ivory/90">
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-1.5 text-sm">
            26 September – 10 October 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-1.5 text-sm">
            Gaya Ji, Bihar
          </span>
        </div>

        <div className="mt-9 flex flex-wrap gap-4">
          <WhatsAppButton message={WA_MESSAGES.hero}>Book on WhatsApp</WhatsAppButton>
          <CallButton tone="ivory" />
        </div>

        <div className="mt-8 inline-flex w-fit flex-col gap-0.5 rounded-lg border border-gold/40 bg-ivory/10 px-5 py-3 backdrop-blur-sm">
          <span className="font-body text-xs uppercase tracking-wide text-ivory/70">Advance Booking</span>
          <span className="font-display text-2xl font-semibold text-gold">₹2,100/-</span>
        </div>
      </div>
    </section>
  );
}
