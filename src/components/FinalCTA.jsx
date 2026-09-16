import { WA_MESSAGES } from "../lib/contact";
import { WhatsAppButton, CallButton } from "./Buttons";
import PhotoFrame from "./PhotoFrame";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <PhotoFrame
        src="/images/vishnupad-temple-evening.jpg"
        alt="Vishnupad Temple spire overlooking the Phalgu River, Gaya Ji"
        caption="Photo: Vishnupad Temple and the Phalgu River, Gaya Ji"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-forest-dark/85" />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl">
          Honour Your Ancestors.
          <br />
          Keep Your Traditions Alive.
        </h2>
        <p className="mt-4 font-body text-ivory/85">
          Begin your sacred journey in Gaya Ji with respectful guidance and complete assistance.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <WhatsAppButton message={WA_MESSAGES.hero}>WhatsApp Us</WhatsAppButton>
          <CallButton tone="ivory" />
        </div>
      </div>
    </section>
  );
}
