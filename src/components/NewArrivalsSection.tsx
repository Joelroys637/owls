import { useState } from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';
import { BOARD_GAMES, STORE_LINKS, type BoardGame } from '../data/catalog';
import { ProductCard3D } from './ProductCard3D';
import { Reveal3D } from './Reveal3D';

interface NewArrivalsSectionProps {
  wishlistIds: string[];
  compareIds: string[];
  onToggleWishlist: (id: string) => void;
  onToggleCompare: (game: BoardGame) => void;
  onQuickView: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

type ArrivalFilter = 'all' | 'under1200' | 'party' | 'quick';

export function NewArrivalsSection({
  wishlistIds,
  compareIds,
  onToggleWishlist,
  onToggleCompare,
  onQuickView,
  onAddToCart,
}: NewArrivalsSectionProps) {
  const [filter, setFilter] = useState<ArrivalFilter>('all');

  const newArrivals = BOARD_GAMES.filter((g) => g.collection === 'new-arrival');
  const visible = newArrivals.filter((g) => {
    if (filter === 'under1200') return g.price <= 1200;
    if (filter === 'party') return g.maxPlayers >= 6;
    if (filter === 'quick') return g.maxPlaytime <= 15;
    return true;
  });

  return (
    <section id="new-arrivals" className="py-16 lg:py-24 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#E4E2DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#C84B31] font-semibold">
                <Flame className="w-3.5 h-3.5" />
                <span>Fresh Drops · Limited Cargo Batch</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318]">
                Just Landed in the Vault
              </h2>
              <p className="text-sm text-[#525866]">
                Hover any box to preview real tabletop contents, or click the eye icon to inspect every photo.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all' as const, label: `All Drops (${newArrivals.length})` },
                { id: 'under1200' as const, label: 'Under ₹1,200' },
                { id: 'party' as const, label: 'Big Groups (6+P)' },
                { id: 'quick' as const, label: '10–15 Min Fillers' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filter === tab.id
                      ? 'bg-[#111318] text-white'
                      : 'bg-white border border-[#E4E2DC] text-[#525866] hover:border-[#111318] hover:text-[#111318]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <a
                href={STORE_LINKS.newArrivals}
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex items-center gap-1 text-xs font-semibold text-[#C84B31] hover:text-[#A93B24] px-2 py-2"
              >
                <span>View All</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Reveal3D>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((game, idx) => (
            <Reveal3D key={game.id} delayMs={(idx % 4) * 60}>
              <ProductCard3D
                game={game}
                isWishlisted={wishlistIds.includes(game.id)}
                isCompared={compareIds.includes(game.id)}
                onToggleWishlist={onToggleWishlist}
                onToggleCompare={onToggleCompare}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
