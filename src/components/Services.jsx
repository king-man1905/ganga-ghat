import { useEffect, useRef, useState } from "react";
import {
  IconBowl,
  IconClose,
  IconCompass,
  IconFlame,
  IconLeaf,
  IconRoute,
  IconUsers,
  IconWhatsApp,
} from "./icons";
import PhotoFrame from "./PhotoFrame";
import { waLink } from "../lib/contact";

const SERVICES = [
  {
    id: "pind-daan",
    icon: IconFlame,
    title: "Pind Daan",
    desc: "The core ancestral offering ritual performed at Gaya Ji as per Vedic tradition.",
    details:
      "Pind Daan is the sacred rite of offering spherical barley and rice balls (pinds) accompanied by black sesame, kusha grass, and Vedic mantras. Performed at sacred locations across Gaya Ji, it honors departed ancestors, bringing peace and spiritual elevation to their souls.",
    highlights:
      "Arranged with experienced Gaya Pandits, fresh ritual samagri (pinds, flowers, til, barley, ghee), Sankalp, and authentic Vedic recitation.",
    image: "/images/hero-pind-daan-ritual-gaya.jpg",
    imageAlt: "Devotees and Pandit performing Pind Daan ritual with sacred pind offerings and diyas in Gaya Ji",
    imageCaption: "Photo: Authentic Pind Daan ritual with offerings and lit diyas, Gaya Ji",
  },
  {
    id: "tarpan",
    icon: IconLeaf,
    title: "Tarpan",
    desc: "Water offerings to ancestors, performed with the guidance of experienced Pandits.",
    details:
      "Tarpan is the sacred water offering poured through folded hands and kusha grass, infused with black sesame and sacred mantras. It is performed to appease and satisfy three generations of paternal and maternal ancestors.",
    highlights:
      "Conducted at the holy Falgu riverbank or temple ghats using pure brass kalash, sacred kusha grass rings (pavitri), and guided mantras.",
    image: "/images/pind-daan-ritual-items-closeup.jpg",
    imageAlt: "Sacred Tarpan ritual preparation with brass kalash, holy water vessels, flowers, and sesame offerings",
    imageCaption: "Photo: Tarpan and Pind Daan sacred samagri with brass kalash and holy water, Gaya Ji",
  },
  {
    id: "shraddha-karma",
    icon: IconUsers,
    title: "Shraddha Karma",
    desc: "Complete Shraddha rites conducted respectfully as per family tradition.",
    details:
      "Comprehensive Shraddha rites conducted according to family tradition (kul-parampara). From ritual purification to the final blessings under the immortal banyan tree (Akshayavat), the entire ceremony is guided with reverence.",
    highlights:
      "Step-by-step guidance covering Vishnupad darshan, sacred Falgu rituals, and traditional completion under the Akshayavat tree.",
    image: "/images/akshayavat-sacred-tree-gaya.jpg",
    imageAlt: "Devotees in traditional attire carrying holy kalash pots for Shraddha ceremony rites under the sacred Akshayavat tree in Gaya Ji",
    imageCaption: "Photo: Devotees completing Shraddha rites under the sacred Akshayavat tree, Gaya Ji",
  },
  {
    id: "brahmin-bhojan",
    icon: IconBowl,
    title: "Brahmin Bhojan",
    desc: "Satvik meals arranged for Brahmins as part of the ritual observance.",
    details:
      "Feeding pious Brahmins is an essential component of the Shraddha ritual in Gaya Ji. We arrange freshly prepared, traditional Satvik meals cooked with utmost hygiene and reverence.",
    highlights:
      "100% Satvik preparation strictly without onion or garlic, served on fresh banana leaves with respectful dakshina coordination.",
    image: "/images/satvik-bhojan-banana-leaf.jpg",
    imageAlt: "Traditional pure Satvik meal served on banana leaves in a religious pilgrim setting",
    imageCaption: "Photo: Authentic Satvik Brahmin Bhojan served on fresh banana leaves",
  },
  {
    id: "sankalp-aavahan",
    icon: IconCompass,
    title: "Sankalp & Pitru Aavahan",
    desc: "Ritual resolve and invocation of ancestors before the ceremony begins.",
    details:
      "The sacred ceremony begins with the Sankalp, where the Pandit helps you formally declare your Gotra, Pravara, and ancestral names, invoking the ancestors with reverence to receive the offerings.",
    highlights:
      "Personal genealogy and Gotra declaration, sacred thread (raksha sutra), and dedicated Pandit guidance before starting the rituals.",
    image: "/images/personal-pandit-guidance.jpg",
    imageAlt: "Personal Pandit seated with a family guiding them through Vedic Sankalp and ritual offerings with lit diyas and holy water kalash",
    imageCaption: "Photo: Pandit guiding a family during Vedic Sankalp and ritual invocation, Gaya Ji",
  },
  {
    id: "asthi-visarjan",
    icon: IconRoute,
    title: "Asthi Visarjan Assistance",
    desc: "Guided assistance for immersion of ashes as per tradition, where required.",
    details:
      "For families bringing mortal remains (Asthi) for final immersion, we offer compassionate and respectful assistance at the sacred Falgu river ghats in accordance with Vedic scriptures.",
    highlights:
      "Safe ghat assistance, boat coordination if needed, respectful Vedic mantras, and complete support for the visiting family.",
    image: "/images/phalgu-river-ghat-gaya.jpg",
    imageAlt: "The sacred Falgu River ghats with the historic Vishnupad Temple complex in Gaya Ji",
    imageCaption: "Photo: Falgu River ghats and Vishnupad Temple pilgrimage setting, Gaya Ji",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const modalContentRef = useRef(null);

  const openService = (service, event) => {
    triggerRef.current = event.currentTarget;
    setActiveService(service);
  };

  const closeService = () => {
    setActiveService(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  useEffect(() => {
    if (!activeService) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeService();
        return;
      }
      if (e.key === "Tab" && modalContentRef.current) {
        const focusable = modalContentRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  return (
    <section id="services" className="bg-ivory-dark/60 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="divider-motif mb-4 font-devanagari text-sm">सेवाएं</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">Our Services</h2>
          <p className="mt-3 font-body text-ink/70">
            Everything your family needs for the ritual, arranged with care. Tap any service to view authentic photos and ritual details.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const { id, icon: Icon, title, desc } = service;
            const isSelected = activeService?.id === id;
            return (
              <button
                key={id}
                type="button"
                onClick={(e) => openService(service, e)}
                aria-haspopup="dialog"
                aria-expanded={isSelected}
                aria-label={`${title} service: tap to view authentic photo and details`}
                className="group relative flex flex-col justify-between text-left rounded-xl border border-gold/25 bg-ivory p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-ivory">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-ivory-dark/60 px-2.5 py-1 font-body text-[11px] font-semibold text-maroon transition-colors group-hover:bg-maroon group-hover:text-ivory">
                      Photo & Details
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-maroon transition-colors group-hover:text-maroon-dark">
                    {title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{desc}</p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 border-t border-gold/20 pt-3.5 font-body text-xs font-semibold text-forest transition-colors group-hover:text-maroon">
                  <span>View ritual photo & details</span>
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 p-3 backdrop-blur-sm sm:p-5 md:p-6"
          onClick={closeService}
          role="presentation"
        >
          <div
            ref={modalContentRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-desc"
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-gold/40 bg-ivory shadow-2xl focus:outline-none md:max-w-xl"
          >
            {/* Top Close Button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeService}
              aria-label="Close details dialog"
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-maroon shadow-md backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 hover:bg-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon cursor-pointer"
            >
              <IconClose className="h-5 w-5" />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto">
              {/* Photo Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-ivory-dark">
                <PhotoFrame
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  caption={activeService.imageCaption}
                  eager
                  className="h-full w-full"
                />
              </div>

              {/* Text Details & Actions */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    {(() => {
                      const ActiveIcon = activeService.icon;
                      return <ActiveIcon className="h-5 w-5" />;
                    })()}
                  </div>
                  <div>
                    <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-gold">
                      Authentic Gaya Ji Service
                    </span>
                    <h3
                      id="service-modal-title"
                      className="font-display text-2xl font-bold text-maroon"
                    >
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p
                  id="service-modal-desc"
                  className="mt-4 font-body text-sm sm:text-base leading-relaxed text-ink/85"
                >
                  {activeService.details}
                </p>

                <div className="mt-4 rounded-lg border border-gold/30 bg-ivory-dark/60 p-3.5">
                  <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-maroon">
                    Ritual Highlights & Arrangements
                  </h4>
                  <p className="mt-1 font-body text-xs sm:text-sm leading-relaxed text-ink/75">
                    {activeService.highlights}
                  </p>
                </div>

                {/* Action Bar */}
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={waLink(
                      `Namaste, I would like to enquire about ${activeService.title} services in Gaya Ji for Pitru Paksha 2026.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${activeService.title} on WhatsApp`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-body text-sm font-semibold text-ivory shadow-md transition hover:bg-forest-dark active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <IconWhatsApp className="h-5 w-5" />
                    Enquire on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={closeService}
                    className="inline-flex items-center justify-center rounded-full border border-ink/25 px-5 py-3 font-body text-sm font-semibold text-ink/75 transition hover:bg-ivory-dark hover:text-ink active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon cursor-pointer"
                  >
                    Back to Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

