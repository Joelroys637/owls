import { useState, useRef, type MouseEvent } from 'react';
import {
  Users,
  Clock,
  Heart,
  Eye,
  Plus,
  Check,
  ArrowLeftRight,
  Layers,
} from 'lucide-react';
import type { BoardGame } from '../data/catalog';
import {
  formatINR,
  formatPlayers,
  formatPlaytime,
  getDiscountPercent,
} from '../utils/format';

interface ProductCard3DProps {
  game: BoardGame;
  rankNumber?: number;
  isWishlisted: boolean;
  isCompared: boolean;
  onToggleWishlist: (id: string) => void;
  onToggleCompare: (game: BoardGame) => void;
  onQuickView: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

export function ProductCard3D({
  game,
  rankNumber,
  isWishlisted,
  isCompared,
  onToggleWishlist,
  onToggleCompare,
  onQuickView,
  onAddToCart,
}: ProductCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const discountPct = getDiscountPercent(game.price, game.comparePrice);
  const savings = game.comparePrice - game.price;
  const hasSecondaryPhoto = game.images.length > 1;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 8 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  const handleAdd = () => {
    onAddToCart(game);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
        transition: hovered
          ? 'transform 0.14s ease-out, box-shadow 0.25s ease'
          : 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease',
      }}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#E4E2DC] hover:border-[#C5C1B7] shadow-[0_2px_10px_rgba(17,19,24,0.03)] hover:shadow-[0_22px_40px_-20px_rgba(17,19,24,0.16)] overflow-hidden h-full will-change-transform"
    >
      {/* Image Studio Plinth */}
      <div className="relative aspect-[4/3.6] bg-[#F6F5F1] overflow-hidden p-5 flex items-center justify-center border-b border-[#EFECE6]">
        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
          {rankNumber !== undefined ? (
            <span className="font-mono-spec text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#111318] text-white">
              #{rankNumber} Bestseller
            </span>
          ) : (
            <span
              className={`font-mono-spec text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                game.collection === 'bestseller'
                  ? 'bg-[#1E3A5F] text-white'
                  : 'bg-white/95 text-[#111318] border border-[#E4E2DC]'
              }`}
            >
              {game.collection === 'bestseller' ? 'Bestseller' : 'New Drop'}
            </span>
          )}

          {game.stock <= 2 && (
            <span className="font-mono-spec text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FDF0EC] text-[#C84B31] border border-[#F3CFC4]">
              Only {game.stock} left
            </span>
          )}
        </div>

        {/* Top Right Utility Actions */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => onToggleWishlist(game.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
              isWishlisted
                ? 'bg-[#C84B31] border-[#C84B31] text-white'
                : 'bg-white/90 border-[#E4E2DC] text-[#525866] hover:text-[#C84B31] hover:border-[#C84B31]'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
            title="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => onQuickView(game)}
            className="w-8 h-8 rounded-full bg-white/90 border border-[#E4E2DC] text-[#525866] hover:text-[#111318] hover:border-[#111318] flex items-center justify-center transition-all cursor-pointer"
            aria-label={`Quick view ${game.displayName}`}
            title="Inspect full gallery"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Unmodified Primary Product Box Photo + Real Secondary Peek on Hover */}
        <button
          type="button"
          onClick={() => onQuickView(game)}
          className="relative w-full h-full flex items-center justify-center cursor-pointer focus:outline-none"
          aria-label={`View details for ${game.displayName}`}
        >
          <img
            src={game.images[0]}
            alt={game.displayName}
            loading="lazy"
            className={`max-h-full max-w-full object-contain transition-all duration-500 ${
              hasSecondaryPhoto && hovered
                ? 'opacity-0 scale-95'
                : 'opacity-100 group-hover:scale-[1.04]'
            }`}
          />
          {hasSecondaryPhoto && (
            <img
              src={game.images[1]}
              alt={`${game.displayName} tabletop view`}
              loading="lazy"
              className={`absolute inset-0 m-auto max-h-full max-w-full object-contain transition-all duration-500 ${
                hovered ? 'opacity-100 scale-[1.03]' : 'opacity-0 scale-95'
              }`}
            />
          )}
        </button>

        {/* Bottom-left photo count + experience tag */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 border border-[#E4E2DC] font-mono-spec text-[10px] text-[#525866]">
            <Layers className="w-3 h-3 text-[#1E3A5F]" />
            {game.images.length} photos
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/90 border border-[#E4E2DC] font-mono-spec text-[10px] font-medium text-[#111318]">
            {game.experience}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3.5">
        <div className="space-y-2">
          {/* Technical Tabletop Metadata Row */}
          <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1 font-mono-spec text-[11px] text-[#525866]">
            <span className="inline-flex items-center gap-1">
              <Users className="w-3 h-3 text-[#1E3A5F]" />
              {formatPlayers(game.minPlayers, game.maxPlayers)}
            </span>
            <span className="text-[#D4D1C9]">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C84B31]" />
              {formatPlaytime(game.minPlaytime, game.maxPlaytime)}
            </span>
            <span className="text-[#D4D1C9]">·</span>
            <span>Age {game.minAge}+</span>
          </div>

          {/* Title & Tagline */}
          <div>
            <button
              type="button"
              onClick={() => onQuickView(game)}
              className="text-left font-display text-[17px] font-semibold text-[#111318] group-hover:text-[#C84B31] transition-colors leading-snug line-clamp-1 cursor-pointer"
            >
              {game.displayName}
            </button>
            <p className="text-xs text-[#525866] line-clamp-2 mt-1 leading-relaxed">
              {game.tagline}
            </p>
          </div>
        </div>

        {/* Pricing + Actions */}
        <div className="pt-3 border-t border-[#F1F0EC] space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="font-mono-spec text-base font-semibold text-[#111318]">
                {formatINR(game.price)}
              </span>
              {savings > 0 && (
                <span className="font-mono-spec text-xs text-[#8D93A0] line-through">
                  {formatINR(game.comparePrice)}
                </span>
              )}
            </div>
            {discountPct > 0 && (
              <span className="font-mono-spec text-[10px] font-semibold text-[#C84B31] bg-[#FDF0EC] px-2 py-0.5 rounded-full">
                -{discountPct}%
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                justAdded
                  ? 'bg-[#1E3A5F] text-white'
                  : 'bg-[#111318] hover:bg-[#C84B31] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>In Bag</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onToggleCompare(game)}
              className={`h-9 px-2.5 rounded-xl border text-xs font-medium inline-flex items-center gap-1 transition-all cursor-pointer ${
                isCompared
                  ? 'bg-[#1E3A5F] border-[#1E3A5F] text-white'
                  : 'bg-white border-[#E4E2DC] text-[#525866] hover:border-[#111318] hover:text-[#111318]'
              }`}
              title={isCompared ? 'Remove from comparison' : 'Add to side-by-side compare'}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{isCompared ? 'Added' : 'Compare'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
