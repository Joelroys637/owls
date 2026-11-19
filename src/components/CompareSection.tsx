import { ArrowLeftRight, X, Plus, ExternalLink, Sparkles } from 'lucide-react';
import { BOARD_GAMES, type BoardGame } from '../data/catalog';
import { formatINR, formatPlayers, formatPlaytime } from '../utils/format';
import { Reveal3D } from './Reveal3D';

interface CompareSectionProps {
  compareIds: string[];
  onSetCompareIds: (ids: string[]) => void;
  onAddToCart: (game: BoardGame) => void;
  onQuickView: (game: BoardGame) => void;
}

const COMPARE_PRESETS = [
  {
    label: 'Strategy Giants',
    slugs: ['wingspan-en', 'terraforming-mars-en', 'creature-comforts'],
  },
  {
    label: 'Party Showdown',
    slugs: ['exploding-kittens-party-pack', 'camel-up', 'gimme-that'],
  },
  {
    label: 'Quick 15-Min Games',
    slugs: ['battle-sheep', 'got-five', 'who-did-it'],
  },
];

export function CompareSection({
  compareIds,
  onSetCompareIds,
  onAddToCart,
  onQuickView,
}: CompareSectionProps) {
  const comparedGames = compareIds
    .map((id) => BOARD_GAMES.find((g) => g.id === id))
    .filter((g): g is BoardGame => Boolean(g));

  const availableToAdd = BOARD_GAMES.filter((g) => !compareIds.includes(g.id));

  const applyPreset = (slugs: string[]) => {
    const ids = slugs
      .map((s) => BOARD_GAMES.find((g) => g.slug === s)?.id)
      .filter((id): id is string => Boolean(id));
    onSetCompareIds(ids);
  };

  const removeGame = (id: string) => {
    onSetCompareIds(compareIds.filter((c) => c !== id));
  };

  const addGameById = (id: string) => {
    if (!id || compareIds.includes(id)) return;
    onSetCompareIds([...compareIds.slice(0, 2), id]);
  };

  return (
    <section id="compare" className="py-16 lg:py-24 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#E4E2DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] uppercase tracking-[0.16em] text-[#1E3A5F] font-semibold">
                <ArrowLeftRight className="w-3.5 h-3.5 text-[#C84B31]" />
                <span>Side-by-Side Comparison Workbench</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318]">
                Compare Before You Commit
              </h2>
              <p className="text-sm text-[#525866]">
                Weigh player count, playtime, complexity, and savings side by side. Click “Compare” on any card above or pick a curated matchup below.
              </p>
            </div>

            {/* 1-Click Preset Matchups */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-spec text-[10px] uppercase tracking-wider text-[#787F8E] mr-1">
                Presets:
              </span>
              {COMPARE_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => applyPreset(preset.slugs)}
                  className="px-3.5 py-2 rounded-full bg-white border border-[#E4E2DC] hover:border-[#111318] text-xs font-semibold text-[#111318] transition-colors cursor-pointer"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal3D>

        <div className="rounded-3xl bg-white border border-[#E4E2DC] shadow-[0_14px_40px_-24px_rgba(17,19,24,0.1)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EAE8E2] bg-[#FAF9F6]">
                  <th className="w-44 p-5 align-bottom">
                    <div className="font-mono-spec text-[11px] uppercase tracking-wider text-[#787F8E] font-semibold">
                      Table Specs
                    </div>
                    {comparedGames.length < 3 && (
                      <div className="mt-3">
                        <select
                          aria-label="Add game to comparison"
                          defaultValue=""
                          onChange={(e) => {
                            addGameById(e.target.value);
                            e.target.value = '';
                          }}
                          className="w-full text-xs rounded-lg border border-[#D4D1C9] bg-white px-2.5 py-2 text-[#111318] focus:outline-none focus:border-[#C84B31]"
                        >
                          <option value="" disabled>
                            + Add a game…
                          </option>
                          {availableToAdd.map((g) => (
                            <option key={g.id} value={g.id}>
                              {g.displayName} ({formatINR(g.price)})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </th>

                  {comparedGames.map((game) => (
                    <th key={game.id} className="p-5 align-top border-l border-[#EFECE6] w-1/3">
                      <div className="relative flex flex-col gap-3">
                        <button
                          type="button"
                          onClick={() => removeGame(game.id)}
                          className="absolute top-0 right-0 w-7 h-7 rounded-full bg-[#F1F0EC] hover:bg-[#111318] text-[#525866] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          aria-label={`Remove ${game.displayName} from comparison`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onQuickView(game)}
                          className="w-24 h-24 rounded-2xl bg-[#F6F5F1] border border-[#E4E2DC] p-2 flex items-center justify-center cursor-pointer hover:border-[#C84B31] transition-colors"
                        >
                          <img
                            src={game.images[0]}
                            alt={game.displayName}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                          />
                        </button>

                        <div>
                          <div className="font-display text-lg font-semibold text-[#111318] pr-7">
                            {game.displayName}
                          </div>
                          <div className="font-mono-spec text-xs text-[#C84B31] font-semibold mt-0.5">
                            {formatINR(game.price)}{' '}
                            <span className="text-[#8D93A0] line-through font-normal ml-1">
                              {formatINR(game.comparePrice)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[#EFECE6] text-sm">
                <tr>
                  <td className="p-4 px-5 font-mono-spec text-xs uppercase tracking-wider text-[#525866] bg-[#FAF9F6]/60">
                    Players
                  </td>
                  {comparedGames.map((g) => (
                    <td key={g.id} className="p-4 px-5 border-l border-[#EFECE6] font-mono-spec font-semibold text-[#111318]">
                      {formatPlayers(g.minPlayers, g.maxPlayers)}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 px-5 font-mono-spec text-xs uppercase tracking-wider text-[#525866] bg-[#FAF9F6]/60">
                    Playtime
                  </td>
                  {comparedGames.map((g) => (
                    <td key={g.id} className="p-4 px-5 border-l border-[#EFECE6] font-mono-spec text-[#111318]">
                      {formatPlaytime(g.minPlaytime, g.maxPlaytime)}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 px-5 font-mono-spec text-xs uppercase tracking-wider text-[#525866] bg-[#FAF9F6]/60">
                    Complexity
                  </td>
                  {comparedGames.map((g) => {
                    const pct = Math.min(100, Math.round((g.complexity / 5) * 100));
                    return (
                      <td key={g.id} className="p-4 px-5 border-l border-[#EFECE6]">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-[#111318]">{g.experience}</span>
                          <span className="font-mono-spec text-[#525866]">{g.complexity}/5</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-[#ECEAE4] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#1E3A5F]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr>
                  <td className="p-4 px-5 font-mono-spec text-xs uppercase tracking-wider text-[#525866] bg-[#FAF9F6]/60">
                    Recommended Age
                  </td>
                  {comparedGames.map((g) => (
                    <td key={g.id} className="p-4 px-5 border-l border-[#EFECE6] font-mono-spec text-[#111318]">
                      Ages {g.minAge}+
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 px-5 font-mono-spec text-xs uppercase tracking-wider text-[#525866] bg-[#FAF9F6]/60">
                    Best Occasion
                  </td>
                  {comparedGames.map((g) => (
                    <td key={g.id} className="p-4 px-5 border-l border-[#EFECE6] text-xs text-[#3B404C]">
                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#B8862D] shrink-0" />
                        {g.bestFor}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 px-5 font-mono-spec text-xs uppercase tracking-wider text-[#525866] bg-[#FAF9F6]/60">
                    Savings & Action
                  </td>
                  {comparedGames.map((g) => (
                    <td key={g.id} className="p-4 px-5 border-l border-[#EFECE6]">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onAddToCart(g)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111318] hover:bg-[#C84B31] text-white text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add to Bag
                        </button>
                        {g.bggLink && (
                          <a
                            href={g.bggLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-[#E4E2DC] text-[11px] font-medium text-[#525866] hover:text-[#111318]"
                          >
                            BGG <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
