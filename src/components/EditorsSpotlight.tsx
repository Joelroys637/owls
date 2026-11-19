import { useState } from 'react';
import {
  Users,
  Clock,
  Award,
  ExternalLink,
  Plus,
  Check,
  ArrowLeftRight,
} from 'lucide-react';
import { BOARD_GAMES, type BoardGame } from '../data/catalog';
import { formatINR, formatPlayers, formatPlaytime } from '../utils/format';
import { Reveal3D } from './Reveal3D';

interface EditorsSpotlightProps {
  compareIds: string[];
  onToggleCompare: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

const SPOTLIGHT_SLUGS = ['wingspan-en', 'terraforming-mars-en', 'creature-comforts'];

export function EditorsSpotlight({
  compareIds,
  onToggleCompare,
  onAddToCart,
}: EditorsSpotlightProps) {
  const games = SPOTLIGHT_SLUGS.map((s) =>
    BOARD_GAMES.find((g) => g.slug === s)
  ).filter((g): g is BoardGame => Boolean(g));

  const [selectedGameIdx, setSelectedGameIdx] = useState(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const game = games[selectedGameIdx] || BOARD_GAMES[0];
  const photos = game.images.slice(0, 5);
  const activePhoto = photos[activePhotoIdx] || game.images[0];
  const isCompared = compareIds.includes(game.id);
  const weightPercent = Math.min(100, Math.round((game.complexity / 5) * 100));

  const handleSwitchGame = (idx: number) => {
    setSelectedGameIdx(idx);
    setActivePhotoIdx(0);
  };

  const handleAdd = () => {
    onAddToCart(game);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F1F0EC] border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#B8862D] font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Curator&apos;s Spotlight · Inside The Box</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318]">
                Inspect the Craft Before It Reaches Your Table
              </h2>
            </div>

            {/* Switchable Spotlight Tabs */}
            <div className="inline-flex p-1 rounded-2xl bg-white border border-[#E4E2DC] self-start">
              {games.map((g, idx) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => handleSwitchGame(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    idx === selectedGameIdx
                      ? 'bg-[#111318] text-white shadow-xs'
                      : 'text-[#525866] hover:text-[#111318]'
                  }`}
                >
                  {g.displayName}
                </button>
              ))}
            </div>
          </div>
        </Reveal3D>

        {/* Main Editorial Spotlight Panel */}
        <div className="rounded-3xl bg-white border border-[#E4E2DC] overflow-hidden shadow-[0_20px_50px_-28px_rgba(17,19,24,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Real Multi-Angle Tabletop Photography Stage */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FAF9F6] border-b lg:border-b-0 lg:border-r border-[#EAE8E2] flex flex-col justify-between gap-5">
              <div className="relative aspect-[16/11] w-full rounded-2xl bg-white border border-[#EAE8E2] p-5 flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto}
                  alt={`${game.displayName} view ${activePhotoIdx + 1}`}
                  className="max-h-full max-w-full object-contain transition-all duration-500"
                />
                <span className="absolute bottom-3 right-3 font-mono-spec text-[10px] px-2.5 py-1 rounded-full bg-[#111318]/85 text-white">
                  Photo {activePhotoIdx + 1} / {photos.length} · Real Box & Components
                </span>
              </div>

              {/* Real Multi-Photo Strip */}
              <div className="grid grid-cols-5 gap-2.5">
                {photos.map((imgUrl, idx) => (
                  <button
                    key={imgUrl}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`aspect-square rounded-xl bg-white p-1.5 border transition-all cursor-pointer overflow-hidden ${
                      idx === activePhotoIdx
                        ? 'border-[#C84B31] ring-2 ring-[#C84B31]/20'
                        : 'border-[#E4E2DC] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${game.displayName} thumbnail ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Deep Spec & Story Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-spec text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1F0EC] text-[#1E3A5F] font-semibold">
                    Original Imported English Edition
                  </span>
                  <span className="font-mono-spec text-xs text-[#C84B31] font-medium">
                    {game.stock} in Bengaluru vault
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-semibold text-[#111318]">
                    {game.displayName}
                  </h3>
                  <p className="text-sm text-[#525866] mt-2 leading-relaxed line-clamp-4">
                    {game.description}
                  </p>
                </div>

                {/* Tactile Spec Grid */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#EAE8E2]">
                    <div className="flex items-center gap-1.5 text-[#1E3A5F] mb-1">
                      <Users className="w-3.5 h-3.5" />
                      <span className="font-mono-spec text-[10px] uppercase text-[#787F8E]">
                        Players
                      </span>
                    </div>
                    <div className="font-mono-spec text-sm font-semibold text-[#111318]">
                      {formatPlayers(game.minPlayers, game.maxPlayers)}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#EAE8E2]">
                    <div className="flex items-center gap-1.5 text-[#C84B31] mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-mono-spec text-[10px] uppercase text-[#787F8E]">
                        Time
                      </span>
                    </div>
                    <div className="font-mono-spec text-sm font-semibold text-[#111318]">
                      {formatPlaytime(game.minPlaytime, game.maxPlaytime)}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#EAE8E2]">
                    <div className="font-mono-spec text-[10px] uppercase text-[#787F8E] mb-1">
                      Min Age
                    </div>
                    <div className="font-mono-spec text-sm font-semibold text-[#111318]">
                      {game.minAge}+ yrs
                    </div>
                  </div>
                </div>

                {/* Complexity Weight Gauge */}
                <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-[#EAE8E2] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#111318]">
                      Strategy Complexity (BGG Weight)
                    </span>
                    <span className="font-mono-spec font-semibold text-[#1E3A5F]">
                      {game.complexity} / 5.0 · {game.experience}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#E4E2DC] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#1E3A5F] transition-all duration-500"
                      style={{ width: `${weightPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-[#525866]">
                    Ideal for: <strong className="text-[#111318]">{game.bestFor}</strong>
                  </p>
                </div>
              </div>

              {/* Price + Actions */}
              <div className="pt-5 border-t border-[#EAE8E2] space-y-4">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono-spec text-2xl font-semibold text-[#111318]">
                      {formatINR(game.price)}
                    </span>
                    <span className="font-mono-spec text-sm text-[#8D93A0] line-through">
                      {formatINR(game.comparePrice)}
                    </span>
                  </div>
                  <span className="font-mono-spec text-xs font-semibold text-[#C84B31] bg-[#FDF0EC] px-2.5 py-1 rounded-full">
                    Save {formatINR(game.comparePrice - game.price)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      justAdded
                        ? 'bg-[#1E3A5F] text-white'
                        : 'bg-[#C84B31] hover:bg-[#A93B24] text-white shadow-md shadow-[#C84B31]/20'
                    }`}
                  >
                    {justAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    <span>{justAdded ? 'Added to Bag' : 'Add to Bag'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleCompare(game)}
                    className={`h-11 px-4 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isCompared
                        ? 'bg-[#111318] border-[#111318] text-white'
                        : 'bg-white border-[#D4D1C9] text-[#111318] hover:border-[#111318]'
                    }`}
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                    <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                  </button>

                  {game.bggLink && (
                    <a
                      href={game.bggLink}
                      target="_blank"
                      rel="noreferrer"
                      className="h-11 px-3.5 rounded-full border border-[#E4E2DC] text-[#525866] hover:text-[#111318] hover:border-[#111318] inline-flex items-center gap-1 text-xs font-medium transition-colors"
                      title="View on BoardGameGeek"
                    >
                      <span>BGG</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
