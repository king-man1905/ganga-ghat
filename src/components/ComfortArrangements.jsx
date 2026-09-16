import PhotoFrame from "./PhotoFrame";
import { IconBed, IconRoute, IconShield, IconUsers } from "./icons";

const ITEMS = [
  {
    icon: IconShield,
    title: "Safe & Secure Arrangements",
    file: "safe-secure-arrangements.jpg",
    desc: "Ritual arrangements handled with care for your family's safety and comfort.",
  },
  {
    icon: IconBed,
    title: "Comfortable Stay Assistance",
    file: "stay-assistance-gaya.jpg",
    desc: "Support in arranging comfortable accommodation during your visit.",
  },
  {
    icon: IconRoute,
    title: "Travel / Local Assistance",
    file: "local-travel-assistance-gaya.jpg",
    desc: "Guidance for local travel between the ghat, temple and your stay.",
  },
  {
    icon: IconUsers,
    title: "Personal Pandit Guidance",
    file: "personal-pandit-guidance.jpg",
    desc: "A dedicated Pandit to guide your family through each step of the ritual.",
  },
];

export default function ComfortArrangements() {
  return (
    <section className="bg-ivory-dark/60 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="divider-motif mb-4 font-devanagari text-sm">व्यवस्था</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">Your Comfort</h2>
          <p className="mt-3 font-body text-ink/70">Complete arrangements, so you can focus on the ritual.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, file, desc }) => (
            <div key={title} className="overflow-hidden rounded-xl border border-gold/25 bg-ivory">
              <PhotoFrame
                src={`/images/${file}`}
                alt={title}
                caption={`Photo: ${title}`}
                className="aspect-4/3 w-full"
              />
              <div className="p-5">
                <Icon className="h-5 w-5 text-forest" />
                <h3 className="mt-3 font-display text-lg font-semibold text-maroon">{title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
