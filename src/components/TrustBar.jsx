import { IconClock, IconLeaf, IconShield, IconUsers } from "./icons";

const POINTS = [
  { icon: IconUsers, label: "Experienced & Verified Pandits" },
  { icon: IconShield, label: "Authentic Vedic Rituals" },
  { icon: IconShield, label: "Safe & Secure Arrangements" },
  { icon: IconLeaf, label: "Pure Satvik Food" },
  { icon: IconClock, label: "24×7 Support" },
];

export default function TrustBar() {
  return (
    <section aria-label="Why families choose us" className="border-b border-gold/25 bg-ivory-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:grid-cols-3 sm:px-6 md:flex md:flex-wrap md:justify-between md:gap-6">
        {POINTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-maroon">
            <Icon className="w-5 h-5 shrink-0 text-forest" />
            <span className="font-body text-sm font-medium text-ink/85">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
