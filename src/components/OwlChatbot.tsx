import {
  ArrowDownRight,
  Bot,
  Eye,
  MessageCircle,
  MessageSquare,
  Plus,
  RotateCcw,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { BOARD_GAMES, BRAND_ASSETS, type BoardGame } from '../data/catalog';
import { formatINR, formatPlayers, formatPlaytime } from '../utils/format';

export interface ConciergeFilters {
  players: 'any' | '2p' | '3-4' | '5+';
  playtime: 'any' | 'quick' | 'medium' | 'epic';
  experience: 'any' | 'Light' | 'Gateway' | 'Medium' | 'Deep';
  budget: 'any' | 'under1500' | 'mid' | 'collector';
}

interface OwlChatbotProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyRecommendation: (payload: {
    filters: ConciergeFilters;
    summary: string;
    games: BoardGame[];
  }) => void;
  onQuickView: (game: BoardGame) => void;
  onAddToCart: (game: BoardGame) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; value: string }[];
  matchedGames?: BoardGame[];
  step?: 'players' | 'playtime' | 'experience' | 'budget' | 'done';
}

const DIE_ROTATIONS = [
  'rotateX(0deg) rotateY(0deg)',
  'rotateX(0deg) rotateY(-90deg)',
  'rotateX(0deg) rotateY(180deg)',
  'rotateX(0deg) rotateY(90deg)',
  'rotateX(-90deg) rotateY(0deg)',
  'rotateX(90deg) rotateY(0deg)',
];

function filterCatalog(f: ConciergeFilters): BoardGame[] {
  return BOARD_GAMES.filter((g) => {
    if (f.players === '2p' && !(g.minPlayers <= 2 && g.maxPlayers >= 2)) return false;
    if (f.players === '3-4' && !(g.minPlayers <= 4 && g.maxPlayers >= 3)) return false;
    if (f.players === '5+' && g.maxPlayers < 5) return false;

    if (f.playtime === 'quick' && g.maxPlaytime > 20) return false;
    if (f.playtime === 'medium' && (g.maxPlaytime < 20 || g.minPlaytime > 60)) return false;
    if (f.playtime === 'epic' && g.maxPlaytime < 60) return false;

    if (f.experience !== 'any' && g.experience !== f.experience) return false;

    if (f.budget === 'under1500' && g.price >= 1500) return false;
    if (f.budget === 'mid' && (g.price < 1500 || g.price > 4000)) return false;
    if (f.budget === 'collector' && g.price <= 4000) return false;

    return true;
  });
}

function buildWelcomeMessage(): ChatMessage {
  return {
    id: 'welcome',
    sender: 'bot',
    text: "Hi! I'm your Owl Concierge. Tell me who's playing tonight and I'll pin the best board games right onto the homepage for you.",
    step: 'players',
    options: [
      { label: '2 Players', value: '2p' },
      { label: '3–4 Friends', value: '3-4' },
      { label: '5+ Party Group', value: '5+' },
      { label: 'Any Group Size', value: 'any' },
    ],
  };
}

export function OwlChatbot({
  open,
  onOpenChange,
  onApplyRecommendation,
  onQuickView,
  onAddToCart,
}: OwlChatbotProps) {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [buildWelcomeMessage()]);
  const [draftFilters, setDraftFilters] = useState<ConciergeFilters>({
    players: 'any',
    playtime: 'any',
    experience: 'any',
    budget: 'any',
  });
  const [inputText, setInputText] = useState('');
  const [dieTransform, setDieTransform] = useState('rotateX(-22deg) rotateY(28deg)');
  const [rollCount, setRollCount] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 80);
    }
  }, [messages, open]);

  const scrollToHomepageResults = () => {
    onOpenChange(false);
    setTimeout(() => {
      document.getElementById('concierge-results')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 120);
  };

  const handleRestart = () => {
    setDraftFilters({
      players: 'any',
      playtime: 'any',
      experience: 'any',
      budget: 'any',
    });
    setMessages([buildWelcomeMessage()]);
  };

  const publishResults = (
    nextFilters: ConciergeFilters,
    summaryLabel: string,
    overrideGames?: BoardGame[]
  ) => {
    const games = overrideGames ?? filterCatalog(nextFilters);
    const finalGames = games.length > 0 ? games : BOARD_GAMES.slice(0, 4);
    const botReply =
      games.length > 0
        ? `I found ${games.length} great match${games.length === 1 ? '' : 'es'} for ${summaryLabel} — and pinned them live onto your homepage!`
        : `No exact filter match for ${summaryLabel}, so I picked our top ${finalGames.length} versatile favorites on the homepage for you!`;

    onApplyRecommendation({
      filters: nextFilters,
      summary: summaryLabel,
      games: finalGames,
    });

    setMessages((prev) => [
      ...prev,
      {
        id: `res-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        matchedGames: finalGames.slice(0, 3),
        step: 'done',
      },
    ]);
  };

  const handleOptionSelect = (
    step: ChatMessage['step'],
    option: { label: string; value: string }
  ) => {
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: option.label,
    };

    if (step === 'players') {
      const next = { ...draftFilters, players: option.value as ConciergeFilters['players'] };
      setDraftFilters(next);
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: `b-time-${Date.now()}`,
          sender: 'bot',
          text: 'Great! How much time do you have for a round?',
          step: 'playtime',
          options: [
            { label: 'Quick (Under 20m)', value: 'quick' },
            { label: 'Standard (20–60m)', value: 'medium' },
            { label: 'Long Night (60m+)', value: 'epic' },
            { label: 'Any Time', value: 'any' },
          ],
        },
      ]);
      return;
    }

    if (step === 'playtime') {
      const next = { ...draftFilters, playtime: option.value as ConciergeFilters['playtime'] };
      setDraftFilters(next);
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: `b-exp-${Date.now()}`,
          sender: 'bot',
          text: 'What kind of rules & vibe fits your table best?',
          step: 'experience',
          options: [
            { label: 'Super Easy / Party', value: 'Light' },
            { label: 'Easy Family Fun', value: 'Gateway' },
            { label: 'Thoughtful Strategy', value: 'Medium' },
            { label: 'Heavy Strategy', value: 'Deep' },
            { label: 'Any Difficulty', value: 'any' },
          ],
        },
      ]);
      return;
    }

    if (step === 'experience') {
      const next = {
        ...draftFilters,
        experience: option.value as ConciergeFilters['experience'],
      };
      setDraftFilters(next);
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: `b-budget-${Date.now()}`,
          sender: 'bot',
          text: 'Almost done — what budget are you looking at?',
          step: 'budget',
          options: [
            { label: 'Under ₹1,500', value: 'under1500' },
            { label: '₹1,500 – ₹4,000', value: 'mid' },
            { label: '₹4,000+ Collector', value: 'collector' },
            { label: 'Any Budget', value: 'any' },
          ],
        },
      ]);
      return;
    }

    if (step === 'budget') {
      const next = { ...draftFilters, budget: option.value as ConciergeFilters['budget'] };
      setDraftFilters(next);
      setMessages((prev) => [...prev, userMsg]);

      const parts: string[] = [];
      if (next.players !== 'any')
        parts.push(
          next.players === '2p' ? '2 Players' : next.players === '3-4' ? '3–4 Players' : '5+ Party'
        );
      if (next.playtime !== 'any')
        parts.push(
          next.playtime === 'quick'
            ? 'Under 20m'
            : next.playtime === 'medium'
              ? '20–60m'
              : '60m+'
        );
      if (next.experience !== 'any') parts.push(next.experience);
      if (next.budget !== 'any')
        parts.push(
          next.budget === 'under1500'
            ? 'Under ₹1,500'
            : next.budget === 'mid'
              ? '₹1.5K–₹4K'
              : '₹4,000+'
        );

      const summaryLabel = parts.length > 0 ? parts.join(' · ') : 'All Tables';
      setTimeout(() => publishResults(next, summaryLabel), 220);
    }
  };

  const handleRollDie = () => {
    const nextRoll = rollCount + 1;
    setRollCount(nextRoll);
    const faceIdx = Math.floor(Math.random() * 6);
    const spinX = 360 * ((nextRoll % 3) + 1);
    const spinY = 360 * (((nextRoll + 1) % 3) + 1);
    setDieTransform(`rotateX(${spinX}deg) rotateY(${spinY}deg) ${DIE_ROTATIONS[faceIdx]}`);

    const picked = BOARD_GAMES[Math.floor(Math.random() * BOARD_GAMES.length)];
    const userMsg: ChatMessage = {
      id: `u-die-${Date.now()}`,
      sender: 'user',
      text: 'Roll the 3D die — surprise me!',
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      publishResults(
        { players: 'any', playtime: 'any', experience: 'any', budget: 'any' },
        `3D Die Surprise Pick: ${picked.displayName}`,
        [picked, ...BOARD_GAMES.filter((g) => g.id !== picked.id && g.experience === picked.experience).slice(0, 3)]
      );
    }, 360);
  };

  const handleFreeTextSubmit = (e: FormEvent) => {
    e.preventDefault();
    const raw = inputText.trim();
    if (!raw) return;
    setInputText('');

    const q = raw.toLowerCase();
    const userMsg: ChatMessage = {
      id: `u-txt-${Date.now()}`,
      sender: 'user',
      text: raw,
    };
    setMessages((prev) => [...prev, userMsg]);

    // Smart local natural-language parser for Indian board game shoppers
    const parsed: ConciergeFilters = {
      players: 'any',
      playtime: 'any',
      experience: 'any',
      budget: 'any',
    };

    if (/\b(2|two|couple|date|duel)\b/.test(q)) parsed.players = '2p';
    else if (/\b(5|6|7|8|9|10|party|group|diwali|friends|big)\b/.test(q)) parsed.players = '5+';
    else if (/\b(3|4|family|kids)\b/.test(q)) parsed.players = '3-4';

    if (/\b(quick|fast|short|10|15|20)\b/.test(q)) parsed.playtime = 'quick';
    else if (/\b(long|epic|hour|hours|120|90)\b/.test(q)) parsed.playtime = 'epic';

    if (/\b(easy|light|party|beginner|kids|fun)\b/.test(q)) parsed.experience = 'Light';
    else if (/\b(family|gateway)\b/.test(q)) parsed.experience = 'Gateway';
    else if (/\b(deep|heavy|hard|mars|complex)\b/.test(q)) parsed.experience = 'Deep';
    else if (/\b(strategy|medium|wingspan|engine)\b/.test(q)) parsed.experience = 'Medium';

    if (/\b(cheap|budget|gift|1000|1500|under 1|under 2)\b/.test(q)) parsed.budget = 'under1500';
    else if (/\b(premium|collector|5000|4000)\b/.test(q)) parsed.budget = 'collector';

    // Also match direct title/keyword hits
    const keywordMatches = BOARD_GAMES.filter(
      (g) =>
        g.displayName.toLowerCase().includes(q) ||
        g.tagline.toLowerCase().includes(q) ||
        g.categories.some((c) => c.toLowerCase().includes(q))
    );

    const hasParsedFilter =
      parsed.players !== 'any' ||
      parsed.playtime !== 'any' ||
      parsed.experience !== 'any' ||
      parsed.budget !== 'any';

    const matches =
      keywordMatches.length > 0
        ? keywordMatches
        : hasParsedFilter
          ? filterCatalog(parsed)
          : BOARD_GAMES.filter((g) => g.collection === 'bestseller');

    setTimeout(() => {
      publishResults(parsed, `“${raw}”`, matches);
    }, 240);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Floating Launcher Button (Always in Viewport Bottom-Right Corner) */}
      {!open && (
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            left: 'auto',
            top: 'auto',
            zIndex: 99999,
          }}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#111318] hover:bg-[#C84B31] shadow-[0_12px_36px_rgba(0,0,0,0.38)] border border-white/20 transition-all hover:scale-105 hover:-translate-y-0.5 cursor-pointer p-1.5"
          aria-label="Open Owl Concierge Chatbot"
          title="Owl Game Concierge Chatbot"
        >
          {/* Circular Badge with Authentic Owls Image Logo */}
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white p-1.5 shadow-sm overflow-hidden">
            <img
              src={BRAND_ASSETS.owlMark}
              alt="Owl Game Concierge"
              className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
              width="44"
              height="44"
              loading="eager"
            />
          </span>

          {/* Mini Chatbot Speech Bubble Badge */}
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C84B31] text-white shadow-md border-2 border-[#111318]">
            <MessageSquare className="w-2.5 h-2.5" />
          </span>

          {/* Active Online Indicator with Pulse */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#22C55E] ring-2 ring-[#111318]" />
          </span>
        </button>
      )}

      {/* Interactive Chatbot Panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            left: 'auto',
            top: 'auto',
            zIndex: 99999,
          }}
          className="w-[calc(100vw-2rem)] sm:w-[400px] max-h-[82vh] flex flex-col rounded-3xl bg-white border border-[#E4E2DC] shadow-[0_28px_70px_-18px_rgba(17,19,24,0.34)] overflow-hidden"
          role="dialog"
          aria-label="Owl Game Concierge Chatbot"
        >
          {/* Chat Header */}
          <div className="px-5 py-4 bg-[#111318] text-white flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-white/10">
                <img
                  src={BRAND_ASSETS.owlMark}
                  alt="Owl Game Concierge"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-display text-sm font-bold leading-tight">
                  Owl Game Concierge
                </h2>
                <p className="text-[11px] text-[#B4B9C4]">
                  Answers appear live on the homepage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleRestart}
                className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Start over"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3D Die Quick Surprise Bar inside Chat */}
          <div className="px-4 py-2.5 bg-[#FAF9F6] border-b border-[#EAE8E2] flex items-center justify-between gap-2">
            <span className="text-[11px] text-[#525866] font-medium">
              Want an instant random pick?
            </span>
            <button
              type="button"
              onClick={handleRollDie}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-[#111318] text-[#111318] hover:text-white border border-[#E4E2DC] text-[11px] font-semibold transition-colors cursor-pointer"
            >
              <div className="scale-[0.58] -my-2 -mx-1.5 die-scene shrink-0" aria-hidden="true">
                <div className="die-cube" style={{ transform: dieTransform }}>
                  <div className="die-face die-face-1">
                    <span className="col-start-2 row-start-2 die-pip die-pip-red" />
                  </div>
                  <div className="die-face die-face-2">
                    <span className="col-start-1 row-start-1 die-pip" />
                    <span className="col-start-3 row-start-3 die-pip" />
                  </div>
                  <div className="die-face die-face-3">
                    <span className="col-start-1 row-start-1 die-pip" />
                    <span className="col-start-2 row-start-2 die-pip" />
                    <span className="col-start-3 row-start-3 die-pip" />
                  </div>
                  <div className="die-face die-face-4">
                    <span className="col-start-1 row-start-1 die-pip" />
                    <span className="col-start-3 row-start-1 die-pip" />
                    <span className="col-start-1 row-start-3 die-pip" />
                    <span className="col-start-3 row-start-3 die-pip" />
                  </div>
                  <div className="die-face die-face-5">
                    <span className="col-start-1 row-start-1 die-pip" />
                    <span className="col-start-3 row-start-1 die-pip" />
                    <span className="col-start-2 row-start-2 die-pip die-pip-red" />
                    <span className="col-start-1 row-start-3 die-pip" />
                    <span className="col-start-3 row-start-3 die-pip" />
                  </div>
                  <div className="die-face die-face-6">
                    <span className="col-start-1 row-start-1 die-pip" />
                    <span className="col-start-3 row-start-1 die-pip" />
                    <span className="col-start-1 row-start-2 die-pip" />
                    <span className="col-start-3 row-start-2 die-pip" />
                    <span className="col-start-1 row-start-3 die-pip" />
                    <span className="col-start-3 row-start-3 die-pip" />
                  </div>
                </div>
              </div>
              <span>Roll 3D Die</span>
            </button>
          </div>

          {/* Chat Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAF9]">
            {messages.map((msg, idx) => {
              const isLatest = idx === messages.length - 1;
              return (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start items-start gap-2.5'
                    }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-white border border-[#E4E2DC] p-0.5 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs overflow-hidden">
                      <img
                        src={BRAND_ASSETS.owlMark}
                        alt="Owl"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'
                      } gap-2 max-w-[88%]`}
                  >
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${msg.sender === 'user'
                        ? 'bg-[#111318] text-white rounded-br-md'
                        : 'bg-white border border-[#E4E2DC] text-[#111318] rounded-bl-md shadow-2xs'
                        }`}
                    >
                      {msg.text}
                    </div>

                    {/* Guided Clickable Chips */}
                    {msg.options && isLatest && (
                      <div className="flex flex-wrap gap-1.5 max-w-[94%]">
                        {msg.options.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => handleOptionSelect(msg.step, opt)}
                            className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#C84B31] text-[#111318] hover:text-white border border-[#D8D4CA] hover:border-[#C84B31] text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Inline Compact Game Previews + Jump to Homepage Results */}
                    {msg.matchedGames && msg.matchedGames.length > 0 && (
                      <div className="w-full space-y-2 pt-1">
                        {msg.matchedGames.map((g) => (
                          <div
                            key={g.id}
                            className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#E4E2DC]"
                          >
                            <img
                              src={g.images[0]}
                              alt={g.displayName}
                              className="w-12 h-12 rounded-xl object-contain bg-[#F6F5F1] p-1 shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-[#111318] truncate">
                                {g.displayName}
                              </div>
                              <div className="text-[11px] text-[#525866] font-mono-spec">
                                {formatPlayers(g.minPlayers, g.maxPlayers)} ·{' '}
                                {formatPlaytime(g.minPlaytime, g.maxPlaytime)} ·{' '}
                                <strong className="text-[#C84B31]">{formatINR(g.price)}</strong>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => onQuickView(g)}
                                className="w-7 h-7 rounded-full border border-[#E4E2DC] hover:border-[#111318] text-[#525866] hover:text-[#111318] flex items-center justify-center cursor-pointer"
                                aria-label={`Inspect ${g.displayName}`}
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => onAddToCart(g)}
                                className="w-7 h-7 rounded-full bg-[#111318] hover:bg-[#C84B31] text-white flex items-center justify-center cursor-pointer"
                                aria-label={`Add ${g.displayName} to bag`}
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={scrollToHomepageResults}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#C84B31] hover:bg-[#A93B24] text-white text-xs font-semibold transition-colors cursor-pointer"
                          >
                            <span>View Results on Homepage</span>
                            <ArrowDownRight className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={handleRestart}
                            className="py-2.5 px-3 rounded-xl bg-white border border-[#E4E2DC] hover:border-[#111318] text-xs font-semibold text-[#111318] cursor-pointer"
                          >
                            Ask Again
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={endRef} />
          </div>

          {/* Free-Text Input Footer */}
          <form
            onSubmit={handleFreeTextSubmit}
            className="p-3 bg-white border-t border-[#E4E2DC] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder='Try "party game for 6" or "gift under 1500"...'
              className="flex-1 h-10 px-3.5 rounded-full bg-[#FAFAF9] border border-[#E4E2DC] text-xs text-[#111318] placeholder:text-[#8D93A0] focus:outline-none focus:border-[#C84B31]"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#111318] hover:bg-[#C84B31] text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>,
    document.body
  );
}
