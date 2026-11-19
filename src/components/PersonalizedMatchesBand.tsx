import { Sparkles, X } from 'lucide-react';
import { BRAND_ASSETS, type BoardGame } from '../data/catalog';
import { ProductCard3D } from './ProductCard3D';

interface PersonalizedMatchesBandProps {
  summary: string;
  games: BoardGame[];
  wishlistIds: string[];
  compareIds: string[];
  onOpenChat: () => void;
  onClear: () => void;
  onToggleWishlist: (id: string) => void;
  onToggleCompare: (game: BoardGame) => void;
  onQuickView: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

export function PersonalizedMatchesBand({
  summary,
  games,
  wishlistIds,
  compareIds,
  onOpenChat,
  onClear,
  onToggleWishlist,
  onToggleCompare,
  onQuickView,
  onAddToCart,
}: PersonalizedMatchesBandProps) {
  if (games.length === 0) return null;

  return (
    <section
      id="concierge-results"
      className="py-14 lg:py-18 bg-[#FDF8F5] border-b border-[#EBDAD1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#C84B31] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Picked For You by Owl Concierge</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111318]">
              Top Matches: {summary}
            </h2>
            <p className="text-xs sm:text-sm text-[#525866]">
              Showing {games.length} curated board {games.length === 1 ? 'game' : 'games'} matching your chat selection.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111318] hover:bg-[#C84B31] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <img
                src={BRAND_ASSETS.owlMark}
                alt=""
                className="w-5 h-2.5 object-contain brightness-0 invert"
              />
              <span>Refine in Chat</span>
            </button>
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white border border-[#E4E2DC] hover:border-[#111318] text-xs font-semibold text-[#525866] hover:text-[#111318] transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {games.slice(0, 8).map((game) => (
            <ProductCard3D
              key={game.id}
              game={game}
              isWishlisted={wishlistIds.includes(game.id)}
              isCompared={compareIds.includes(game.id)}
              onToggleWishlist={onToggleWishlist}
              onToggleCompare={onToggleCompare}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
