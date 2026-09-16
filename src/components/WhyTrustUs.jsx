import PhotoFrame from "./PhotoFrame";
import { IconCheck } from "./icons";

const POINTS = [
  "Experienced & Verified Pandits",
  "Authentic Vedic Rituals",
  "Personal Guidance for Families",
  "Transparent Arrangements",
  "Safe & Secure Service",
  "Complete Assistance from Start to Finish",
  "Trusted by Many Devotees",
  "24×7 Support",
];

export default function WhyTrustUs() {
  return (
    <section id="why-us" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="divider-motif mb-4 justify-start font-devanagari text-sm">विश्वास</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">
            Why Families Trust Us
          </h2>
          <p className="mt-4 font-body text-ink/70">
            We understand this is a deeply personal moment for your family. Our approach is to guide you
            with patience and clarity, so every step feels respectful and well cared for.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                <span className="font-body text-sm text-ink/85">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <PhotoFrame
          src="/images/pandit-guiding-family-gaya.jpg"
          alt="A Pandit guiding pilgrims through ritual offerings during Pind Daan near the Phalgu riverbed in Gaya Ji"
          caption="Photo: Pandit guiding pilgrims through the ritual, Gaya Ji"
          className="aspect-4/3 w-full rounded-xl heritage-border"
        />
      </div>
    </section>
  );
}
