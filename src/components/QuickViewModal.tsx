import { useState, useEffect } from 'react';
import {
  X,
  Users,
  Clock,
  Heart,
  ArrowLeftRight,
  Plus,
  Check,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import type { BoardGame } from '../data/catalog';
import { formatINR, formatPlayers, formatPlaytime } from '../utils/format';

interface QuickViewModalProps {
  game: BoardGame | null;
  isWishlisted: boolean;
  isCompared: boolean;
  onClose: () => void;
  onToggleWishlist: (id: string) => void;
  onToggleCompare: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

export function QuickViewModal({
  game,
  isWishlisted,
  isCompared,
  onClose,
  onToggleWishlist,
  onToggleCompare,
  onAddToCart,
}: QuickViewModalProps) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    setPhotoIdx(0);
    setJustAdded(false);
  }, [game?.id]);

  useEffect(() => {
    if (!game) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [game, onClose]);

  if (!game) return null;

  const weightPct = Math.min(100, Math.round((game.complexity / 5) * 100));
  const savings = game.comparePrice - game.price;

  const handleAdd = () => {
    onAddToCart(game);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111318]/65 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={game.displayName}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#E4E2DC] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 border border-[#E4E2DC] text-[#111318] hover:bg-[#111318] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close inspector"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Multi-Angle Real Image Gallery */}
          <div className="md:col-span-6 p-6 bg-[#FAF9F6] border-b md:border-b-0 md:border-r border-[#EAE8E2] flex flex-col justify-between gap-4">
            <div className="aspect-square w-full rounded-2xl bg-white border border-[#EAE8E2] p-5 flex items-center justify-center overflow-hidden">
              <img
                src={game.images[photoIdx] || game.images[0]}
                alt={`${game.displayName} photo ${photoIdx + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {game.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {game.images.map((url, idx) => (
                  <button
                    key={url}
                    type="button"
                    onClick={() => setPhotoIdx(idx)}
                    className={`w-16 h-16 shrink-0 rounded-xl bg-white p-1.5 border transition-all cursor-pointer ${
                      idx === photoIdx
                        ? 'border-[#C84B31] ring-2 ring-[#C84B31]/20'
                        : 'border-[#E4E2DC] opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={url}
                      alt={`${game.displayName} thumb ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Real Product Specs & Story */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-5">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 pr-8">
                <span className="font-mono-spec text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F1F0EC] text-[#1E3A5F] font-semibold">
                  {game.collection === 'bestseller' ? 'Bestseller' : 'New Arrival'}
                </span>
                <span className="font-mono-spec text-[10px] px-2.5 py-1 rounded-full bg-[#FDF0EC] text-[#C84B31] font-semibold">
                  {game.stock} in stock · Ships in 24–48h
                </span>
              </div>

              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111318] leading-tight">
                  {game.displayName}
                </h2>
                <p className="text-xs text-[#525866] mt-1">
                  Best for: <strong className="text-[#111318]">{game.bestFor}</strong>
                </p>
              </div>

              {/* Spec Chips */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-[#EAE8E2]">
                  <div className="flex items-center gap-1 font-mono-spec text-[10px] text-[#787F8E]">
                    <Users className="w-3 h-3 text-[#1E3A5F]" />
                    PLAYERS
                  </div>
                  <div className="font-mono-spec text-xs font-semibold text-[#111318] mt-0.5">
                    {formatPlayers(game.minPlayers, game.maxPlayers)}
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-[#EAE8E2]">
                  <div className="flex items-center gap-1 font-mono-spec text-[10px] text-[#787F8E]">
                    <Clock className="w-3 h-3 text-[#C84B31]" />
                    TIME
                  </div>
                  <div className="font-mono-spec text-xs font-semibold text-[#111318] mt-0.5">
                    {formatPlaytime(game.minPlaytime, game.maxPlaytime)}
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-[#EAE8E2]">
                  <div className="font-mono-spec text-[10px] text-[#787F8E]">AGE</div>
                  <div className="font-mono-spec text-xs font-semibold text-[#111318] mt-0.5">
                    {game.minAge}+ yrs
                  </div>
                </div>
              </div>

              {/* Weight Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#525866]">Complexity</span>
                  <span className="font-mono-spec font-semibold text-[#111318]">
                    {game.complexity} / 5 ({game.experience})
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#ECEAE4] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1E3A5F]"
                    style={{ width: `${weightPct}%` }}
                  />
                </div>
              </div>

              {/* Authentic Product Description */}
              <div className="text-xs sm:text-sm text-[#3B404C] leading-relaxed max-h-40 overflow-y-auto pr-1 whitespace-pre-line">
                {game.description}
              </div>
            </div>

            {/* Footer Price & Actions */}
            <div className="pt-4 border-t border-[#EAE8E2] space-y-3.5">
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono-spec text-2xl font-semibold text-[#111318]">
                    {formatINR(game.price)}
                  </span>
                  {savings > 0 && (
                    <span className="font-mono-spec text-sm text-[#8D93A0] line-through">
                      {formatINR(game.comparePrice)}
                    </span>
                  )}
                </div>
                {savings > 0 && (
                  <span className="font-mono-spec text-xs font-semibold text-[#C84B31]">
                    Save {formatINR(savings)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 h-11 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    justAdded
                      ? 'bg-[#1E3A5F] text-white'
                      : 'bg-[#C84B31] hover:bg-[#A93B24] text-white'
                  }`}
                >
                  {justAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{justAdded ? 'Added to Bag' : 'Add to Bag'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleCompare(game)}
                  className={`h-11 px-3.5 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isCompared
                      ? 'bg-[#111318] border-[#111318] text-white'
                      : 'border-[#D4D1C9] text-[#111318] hover:border-[#111318]'
                  }`}
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(game.id)}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#FDF0EC] border-[#C84B31] text-[#C84B31]'
                      : 'border-[#D4D1C9] text-[#525866] hover:border-[#C84B31]'
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#525866] pt-1">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1E3A5F]" />
                  Original Imported Edition
                </span>
                <div className="flex items-center gap-3">
                  {game.bggLink && (
                    <a
                      href={game.bggLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#111318]"
                    >
                      BGG <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={game.storeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#111318] hover:text-[#C84B31]"
                  >
                    Live Store Page <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
