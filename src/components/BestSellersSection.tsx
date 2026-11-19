import { Trophy, ArrowUpRight } from 'lucide-react';
import { BOARD_GAMES, STORE_LINKS, type BoardGame } from '../data/catalog';
import { ProductCard3D } from './ProductCard3D';
import { Reveal3D } from './Reveal3D';

interface BestSellersSectionProps {
  wishlistIds: string[];
  compareIds: string[];
  onToggleWishlist: (id: string) => void;
  onToggleCompare: (game: BoardGame) => void;
  onQuickView: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

export function BestSellersSection({
  wishlistIds,
  compareIds,
  onToggleWishlist,
  onToggleCompare,
  onQuickView,
  onAddToCart,
}: BestSellersSectionProps) {
  const bestSellers = BOARD_GAMES.filter((g) => g.collection === 'bestseller');

  return (
    <section id="best-sellers" className="py-16 lg:py-24 bg-white/80 backdrop-blur-md border-b border-[#E4E2DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#1E3A5F] font-semibold">
                <Trophy className="w-3.5 h-3.5 text-[#B8862D]" />
                <span>Hall of Fame · Ranked by Indian Tables</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318]">
                Our Most-Loved Bestsellers
              </h2>
              <p className="text-sm text-[#525866]">
                Picked by 1,000+ households across Bengaluru, Mumbai, Delhi NCR, and Hyderabad — every title here qualifies for instant or near-instant free shipping.
              </p>
            </div>

            <a
              href={STORE_LINKS.shop}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111318] hover:text-[#C84B31] transition-colors shrink-0"
            >
              <span>Shop All Bestsellers</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal3D>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {bestSellers.map((game, idx) => (
            <Reveal3D key={game.id} delayMs={idx * 65}>
              <ProductCard3D
                game={game}
                rankNumber={idx + 1}
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
