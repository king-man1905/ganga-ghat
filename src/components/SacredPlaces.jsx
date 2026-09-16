import PhotoFrame from "./PhotoFrame";
import { IconMapPin } from "./icons";

const PLACES = [
  {
    name: "Vishnupad Temple",
    file: "vishnupad-temple-spire-gaya.jpg",
    desc: "The revered temple built around the sacred footprint, central to Gaya Ji's pilgrimage tradition.",
  },
  {
    name: "Phalgu River",
    file: "phalgu-river-ghat-gaya.jpg",
    desc: "The sacred riverbank where Pind Daan and Tarpan rituals are traditionally performed.",
  },
  {
    name: "Akshayavat",
    file: "akshayavat-sacred-tree-gaya.jpg",
    desc: "The 'imperishable banyan tree', an ancient site associated with the completion of Shraddha rites.",
  },
  {
    name: "Pindvechi",
    file: "pindvechi-street-gaya.jpg",
    desc: "A traditional locality near Vishnupad Temple associated with Pind Daan arrangements.",
  },
  {
    name: "Chandchora",
    file: "chandchora-street-gaya.jpg",
    desc: "A nearby area to Vishnupad Temple, part of the local ritual neighbourhood.",
  },
];

export default function SacredPlaces() {
  return (
    <section id="gaya" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="divider-motif mb-4 font-devanagari text-sm">गया जी</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">
            Sacred Places in Gaya
          </h2>
        </div>

        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
          {PLACES.map((p) => (
            <div key={p.name} className="w-64 shrink-0 snap-start sm:w-auto">
              <PhotoFrame
                src={`/images/${p.file}`}
                alt={`${p.name}, Gaya Ji`}
                caption={`Photo: ${p.name}, Gaya Ji`}
                className="aspect-3/4 w-full rounded-xl"
              />
              <h3 className="mt-3 font-display text-lg font-semibold text-maroon">{p.name}</h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-2.5 rounded-lg border border-gold/30 bg-ivory-dark/60 px-5 py-4">
          <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
          <p className="font-body text-sm leading-relaxed text-ink/80">
            Pindvechi, Chandchora,<br />
            Near Vishnupad Temple,<br />
            Gaya Ji, Bihar
          </p>
        </div>
      </div>
    </section>
  );
}
