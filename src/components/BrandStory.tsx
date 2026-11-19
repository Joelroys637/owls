import { MessageCircle, ArrowUpRight, MapPin, Users, Sparkles } from 'lucide-react';
import { BRAND_ASSETS, STORE_LINKS } from '../data/catalog';
import { Reveal3D } from './Reveal3D';

const STATS = [
  { value: '1,000+', label: 'Indian Households Playing' },
  { value: '500+', label: 'WhatsApp Club Members' },
  { value: '24–48h', label: 'Dispatch from Bengaluru' },
  { value: '100%', label: 'Genuine Publisher Stock' },
];

export function BrandStory() {
  return (
    <section id="our-story" className="py-16 lg:py-24 bg-[#111318] text-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Real Editorial Community Photograph */}
          <Reveal3D className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={BRAND_ASSETS.storyPhoto}
                alt="People playing board games around a table — Owls On Board India"
                loading="lazy"
                className="w-full h-[360px] sm:h-[460px] object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#111318]/80 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111318]/85 backdrop-blur-md border border-white/15 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#E5987F]" />
                  <span>Curated in Bengaluru · Shipped Across India</span>
                </div>
              </div>
            </div>
          </Reveal3D>

          {/* Right: Manifesto & Community Hub */}
          <Reveal3D delayMs={120} className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#E5987F] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Play Deliberately · Our Philosophy</span>
            </div>

            <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-medium leading-[1.26] tracking-[-0.025em] text-white">
              “A truly great game commands your attention, pulling you out of the digital ether and into the tactile present.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#B4B9C4] leading-relaxed">
              Founded in Bengaluru in 2025, Owls On Board exists to make authentic international and independent tabletop games accessible across India — without inflated grey-market markups or damaged boxes. Join our thriving WhatsApp club for weekly game nights, early cargo drop access, and honest recommendations from real players.
            </p>

            {/* Architectural Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-white/10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-mono-spec text-xl sm:text-2xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#9BA1AE] mt-0.5 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Community Action Links */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={STORE_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C84B31] hover:bg-[#DF5B3F] text-white text-sm font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Community</span>
              </a>
              <a
                href={STORE_LINKS.ourStory}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-white/20 hover:border-white text-white text-sm font-medium transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Read Our Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}
