import { useState } from 'react';
import { PackagePlus, Check, Truck, Sparkles } from 'lucide-react';
import {
  BOARD_GAMES,
  CURATED_TABLE_SETS,
  FREE_SHIPPING_THRESHOLD,
  type BoardGame,
} from '../data/catalog';
import { formatINR } from '../utils/format';
import { Reveal3D } from './Reveal3D';

interface GameNightBundlesProps {
  onAddBundle: (games: BoardGame[]) => void;
}

export function GameNightBundles({ onAddBundle }: GameNightBundlesProps) {
  const [addedSetId, setAddedSetId] = useState<string | null>(null);

  const handleAddSet = (setId: string, games: BoardGame[]) => {
    onAddBundle(games);
    setAddedSetId(setId);
    setTimeout(() => setAddedSetId(null), 1500);
  };

  return (
    <section id="table-sets" className="py-16 lg:py-24 bg-white border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="max-w-2xl space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#C84B31] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Table Pairings · Built for Indian Hosting</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318]">
              Ready-to-Host Game Night Sets
            </h2>
            <p className="text-sm sm:text-base text-[#525866]">
              Don&apos;t want to guess which games pair well? Our Bengaluru curators combined complementary real titles that keep every guest engaged — and unlock free shipping effortlessly.
            </p>
          </div>
        </Reveal3D>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CURATED_TABLE_SETS.map((set, idx) => {
            const setGames = set.slugs
              .map((s) => BOARD_GAMES.find((g) => g.slug === s))
              .filter((g): g is BoardGame => Boolean(g));
            const totalPrice = setGames.reduce((acc, g) => acc + g.price, 0);
            const totalCompare = setGames.reduce((acc, g) => acc + g.comparePrice, 0);
            const totalSavings = totalCompare - totalPrice;
            const unlocksFreeShip = totalPrice >= FREE_SHIPPING_THRESHOLD;
            const isAdded = addedSetId === set.id;

            return (
              <Reveal3D key={set.id} delayMs={idx * 80}>
                <div className="group flex flex-col justify-between h-full rounded-3xl bg-[#FAFAF9] border border-[#E4E2DC] hover:border-[#C5C1B7] p-6 transition-all hover:shadow-[0_20px_44px_-24px_rgba(17,19,24,0.14)]">
                  <div>
                    {/* Top Tag Row */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="font-mono-spec text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-white border border-[#E4E2DC] text-[#1E3A5F] font-semibold">
                        {set.occasion}
                      </span>
                      {unlocksFreeShip && (
                        <span className="inline-flex items-center gap-1 font-mono-spec text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#1E3A5F] text-white">
                          <Truck className="w-3 h-3" />
                          Free Shipping
                        </span>
                      )}
                    </div>

                    {/* 3D Fanned Real Box Art Stack */}
                    <div className="relative h-44 rounded-2xl bg-white border border-[#EAE8E2] flex items-center justify-center px-4 mb-5 overflow-hidden perspective-stage">
                      <div className="flex items-center justify-center -space-x-5">
                        {setGames.map((g, gIdx) => {
                          const angle =
                            setGames.length === 3
                              ? (gIdx - 1) * 9
                              : gIdx === 0
                              ? -6
                              : 6;
                          return (
                            <div
                              key={g.id}
                              style={{
                                transform: `rotate(${angle}deg)`,
                                zIndex: gIdx === 1 ? 20 : 10,
                              }}
                              className="w-28 h-32 rounded-xl bg-white border border-[#E4E2DC] p-2 shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0"
                            >
                              <img
                                src={g.images[0]}
                                alt={g.displayName}
                                loading="lazy"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Set Editorial Info */}
                    <div className="space-y-2">
                      <div className="font-mono-spec text-[11px] text-[#787F8E]">
                        {set.players} · {set.duration} · {setGames.length} Original Games
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-[#111318] leading-snug">
                        {set.title}
                      </h3>
                      <p className="text-xs text-[#525866] leading-relaxed">
                        {set.description}
                      </p>
                    </div>

                    {/* Included Titles Breakdown */}
                    <ul className="mt-4 pt-4 border-t border-[#EAE8E2] space-y-1.5">
                      {setGames.map((g) => (
                        <li
                          key={g.id}
                          className="flex items-center justify-between text-xs text-[#3B404C]"
                        >
                          <span className="truncate pr-2">• {g.displayName}</span>
                          <span className="font-mono-spec text-[#111318] shrink-0">
                            {formatINR(g.price)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Combined Price & 1-Click Add Set */}
                  <div className="mt-6 pt-4 border-t border-[#E4E2DC] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-mono-spec text-xl font-semibold text-[#111318]">
                          {formatINR(totalPrice)}
                        </span>
                        <span className="font-mono-spec text-xs text-[#8D93A0] line-through ml-2">
                          {formatINR(totalCompare)}
                        </span>
                      </div>
                      <span className="font-mono-spec text-[11px] font-semibold text-[#C84B31]">
                        Save {formatINR(totalSavings)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddSet(set.id, setGames)}
                      className={`w-full inline-flex items-center justify-center gap-2 h-11 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isAdded
                          ? 'bg-[#1E3A5F] text-white'
                          : 'bg-[#111318] hover:bg-[#C84B31] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Full Table Set Added!</span>
                        </>
                      ) : (
                        <>
                          <PackagePlus className="w-4 h-4" />
                          <span>Add All {setGames.length} Games to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Reveal3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
