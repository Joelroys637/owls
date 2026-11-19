import { X, Plus, Minus, Trash2, Truck, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  BOARD_GAMES,
  FREE_SHIPPING_THRESHOLD,
  type BoardGame,
} from '../data/catalog';
import { formatINR } from '../utils/format';

export interface CartItem {
  game: BoardGame;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (gameId: string, delta: number) => void;
  onRemove: (gameId: string) => void;
  onAddGame: (game: BoardGame) => void;
}

export function CartDrawer({
  open,
  items,
  onClose,
  onUpdateQty,
  onRemove,
  onAddGame,
}: CartDrawerProps) {
  if (!open) return null;

  const subtotal = items.reduce((s, item) => s + item.game.price * item.quantity, 0);
  const mrpTotal = items.reduce((s, item) => s + item.game.comparePrice * item.quantity, 0);
  const totalSavings = Math.max(0, mrpTotal - subtotal);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  // Recommend real low-price fillers not already in bag to help reach Free Shipping
  const inBagIds = new Set(items.map((i) => i.game.id));
  const quickAddSuggestions = BOARD_GAMES.filter(
    (g) => !inBagIds.has(g.id) && g.price <= 1200
  ).slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#111318]/55 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#FAFAF9] h-full flex flex-col shadow-2xl border-l border-[#E4E2DC]"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E4E2DC] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C84B31]" />
            <h2 className="font-display text-xl font-semibold text-[#111318]">
              Your Game Bag
            </h2>
            <span className="font-mono-spec text-xs px-2 py-0.5 rounded-full bg-[#F1F0EC] text-[#525866]">
              {items.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#F1F0EC] flex items-center justify-center text-[#525866] cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Free Shipping Progress Meter */}
        <div className="px-6 py-3.5 bg-white border-b border-[#EFECE6] space-y-2">
          <div className="flex items-center justify-between text-xs">
            {remaining === 0 && subtotal > 0 ? (
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E3A5F]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D4F]" />
                Free Pan-India Shipping Unlocked!
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[#3B404C]">
                <Truck className="w-4 h-4 text-[#C84B31]" />
                Add <strong className="font-mono-spec text-[#111318]">{formatINR(remaining)}</strong> for Free Shipping
              </span>
            )}
            <span className="font-mono-spec text-[11px] text-[#787F8E]">
              {progressPct}%
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#ECEAE4] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                remaining === 0 && subtotal > 0 ? 'bg-[#2E7D4F]' : 'bg-[#C84B31]'
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E4E2DC] mx-auto flex items-center justify-center text-[#787F8E]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-display text-xl text-[#111318]">Your table bag is empty</p>
              <p className="text-xs text-[#525866] max-w-xs mx-auto">
                Explore our Interactive Game Finder or add a curated table set to get started.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111318] text-white text-xs font-semibold cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>
          ) : (
            <>
              {items.map(({ game, quantity }) => (
                <div
                  key={game.id}
                  className="flex gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E4E2DC]"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#F6F5F1] border border-[#EFECE6] p-1.5 shrink-0">
                    <img
                      src={game.images[0]}
                      alt={game.displayName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#111318] leading-snug line-clamp-1">
                        {game.displayName}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onRemove(game.id)}
                        className="text-[#9CA3AF] hover:text-[#C84B31] cursor-pointer"
                        aria-label={`Remove ${game.displayName}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="font-mono-spec text-xs text-[#525866] mt-0.5">
                      {formatINR(game.price)} each
                    </div>
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="inline-flex items-center rounded-full border border-[#E4E2DC] bg-[#FAFAF9]">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(game.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#525866] hover:text-[#111318] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono-spec text-xs font-semibold w-6 text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(game.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#525866] hover:text-[#111318] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-mono-spec text-sm font-semibold text-[#111318]">
                        {formatINR(game.price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Smart Filler Suggestion to Unlock Free Shipping */}
              {remaining > 0 && quickAddSuggestions.length > 0 && (
                <div className="pt-3 border-t border-[#E4E2DC] space-y-2.5">
                  <p className="font-mono-spec text-[10px] uppercase tracking-wider text-[#787F8E] font-semibold">
                    Quick Fillers to Reach Free Shipping
                  </p>
                  {quickAddSuggestions.map((g) => (
                    <div
                      key={g.id}
                      className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white border border-dashed border-[#D4D1C9]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={g.images[0]}
                          alt={g.displayName}
                          className="w-10 h-10 rounded-lg object-contain bg-[#FAFAF9] p-1 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-[#111318] truncate">
                            {g.displayName}
                          </div>
                          <div className="font-mono-spec text-[11px] text-[#C84B31] font-medium">
                            {formatINR(g.price)}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onAddGame(g)}
                        className="px-3 py-1.5 rounded-full bg-[#111318] hover:bg-[#C84B31] text-white text-[11px] font-semibold shrink-0 cursor-pointer"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Summary Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E4E2DC] space-y-3.5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-[#525866]">
                <span>Subtotal</span>
                <span className="font-mono-spec font-semibold text-[#111318]">
                  {formatINR(subtotal)}
                </span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between text-xs text-[#C84B31] font-medium">
                  <span>MRP Savings</span>
                  <span className="font-mono-spec">- {formatINR(totalSavings)}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-[#525866]">
                <span>Pan-India Shipping</span>
                <span className="font-mono-spec font-semibold text-[#1E3A5F]">
                  {remaining === 0 ? 'FREE' : 'Calculated at checkout'}
                </span>
              </div>
            </div>

            <a
              href="https://www.owlsonboard.com/shop"
              target="_blank"
              rel="noreferrer"
              className="w-full h-12 rounded-full bg-[#C84B31] hover:bg-[#A93B24] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-[#C84B31]/20 transition-colors"
            >
              <span>Proceed to Owls On Board Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-center text-[#787F8E]">
              Demo cart preview · Secured by Razorpay · UPI & Cards
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
