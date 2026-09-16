import { IconBowl, IconCompass, IconFlame, IconLeaf, IconRoute, IconUsers } from "./icons";
import PhotoFrame from "./PhotoFrame";

const SERVICES = [
  {
    icon: IconFlame,
    title: "Pind Daan",
    desc: "The core ancestral offering ritual performed at Gaya Ji as per Vedic tradition.",
  },
  {
    icon: IconLeaf,
    title: "Tarpan",
    desc: "Water offerings to ancestors, performed with the guidance of experienced Pandits.",
  },
  {
    icon: IconUsers,
    title: "Shraddha Karma",
    desc: "Complete Shraddha rites conducted respectfully as per family tradition.",
  },
  {
    icon: IconBowl,
    title: "Brahmin Bhojan",
    desc: "Satvik meals arranged for Brahmins as part of the ritual observance.",
  },
  {
    icon: IconCompass,
    title: "Sankalp & Pitru Aavahan",
    desc: "Ritual resolve and invocation of ancestors before the ceremony begins.",
  },
  {
    icon: IconRoute,
    title: "Asthi Visarjan Assistance",
    desc: "Guided assistance for immersion of ashes as per tradition, where required.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory-dark/60 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="divider-motif mb-4 font-devanagari text-sm">सेवाएं</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">Our Services</h2>
          <p className="mt-3 font-body text-ink/70">
            Everything your family needs for the ritual, arranged with care.
          </p>
        </div>

        <PhotoFrame
          src="/images/pind-daan-ritual-items-closeup.jpg"
          alt="Close-up of Pind Daan ritual offerings: rice pinds, flowers, kumkum and brass vessels"
          caption="Photo: Pind Daan ritual offerings, Gaya Ji"
          className="mx-auto mt-10 aspect-4/3 w-full max-w-xl rounded-xl heritage-border sm:aspect-16/9 sm:max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-gold/25 bg-ivory p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-ivory">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-maroon">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
