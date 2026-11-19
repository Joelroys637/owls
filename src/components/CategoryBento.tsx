import { ArrowUpRight } from 'lucide-react';
import { BRAND_ASSETS, STORE_LINKS } from '../data/catalog';
import { Reveal3D } from './Reveal3D';
import type { HeroQuickFilter } from './Hero3DStage';

interface CategoryBentoProps {
  onSelectCategory: (preset: HeroQuickFilter) => void;
}

const CATEGORIES = [
  {
    id: 'strategy' as const,
    index: '01',
    title: 'Deep Strategy',
    subtitle: 'Engine building, resource mastery & long-arc decisions',
    meta: '1–5 Players · 45–120 min · Wt 2.4–3.3',
    image: BRAND_ASSETS.categories.strategy,
    href: STORE_LINKS.strategy,
    span: 'lg:col-span-7',
  },
  {
    id: 'party' as const,
    index: '02',
    title: 'Party & Gatherings',
    subtitle: 'Instant laughter for Diwali nights, house parties & big groups',
    meta: '3–10 Players · 10–30 min · Wt 1.0–1.5',
    image: BRAND_ASSETS.categories.party,
    href: STORE_LINKS.party,
    span: 'lg:col-span-5',
  },
  {
    id: 'family' as const,
    index: '03',
    title: 'Family Tables',
    subtitle: 'Warm, tactile storytelling designed for ages 6 to 70 together',
    meta: '2–6 Players · 15–45 min · All Ages',
    image: BRAND_ASSETS.categories.family,
    href: STORE_LINKS.family,
    span: 'lg:col-span-5',
  },
  {
    id: '2p' as const,
    index: '04',
    title: 'Gateway & Easy to Learn',
    subtitle: 'Teach in three minutes — your doorway into modern tabletop',
    meta: '2–4 Players · 15–45 min · Beginner-Friendly',
    image: BRAND_ASSETS.categories.gateway,
    href: STORE_LINKS.gateway,
    span: 'lg:col-span-7',
  },
];

export function CategoryBento({ onSelectCategory }: CategoryBentoProps) {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-white border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <p className="font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#1E3A5F] font-semibold">
                Curated Disciplines
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318]">
                Explore by Play Style
              </h2>
            </div>
            <a
              href={STORE_LINKS.shop}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111318] hover:text-[#C84B31] transition-colors"
            >
              Browse Complete Catalog
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal3D>

        {/* Asymmetric 12-Column Editorial Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {CATEGORIES.map((cat, idx) => (
            <Reveal3D key={cat.index} delayMs={idx * 75} className={cat.span}>
              <div
                onClick={() => onSelectCategory(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.id);
                  }
                }}
                className="group relative h-[280px] sm:h-[320px] rounded-3xl overflow-hidden border border-[#E4E2DC] cursor-pointer bg-[#111318]"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-95"
                />
                {/* Crisp Dark Architectural Readability Scrim — Bottom Only */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#111318]/92 via-[#111318]/35 to-transparent"
                />

                {/* Top Index Pill */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-mono-spec text-[11px] font-semibold px-3 py-1 rounded-full bg-white/92 text-[#111318] backdrop-blur-sm">
                    {cat.index} / {cat.title.split(' ')[0].toUpperCase()}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/92 text-[#111318] group-hover:bg-[#C84B31] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Editorial Content */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                  <div className="font-mono-spec text-[11px] text-[#E5DFD5]">
                    {cat.meta}
                  </div>
                  <h3 className="font-display text-2xl sm:text-[26px] font-semibold leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8D6D0] max-w-md line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
