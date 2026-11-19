import { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  ArrowLeftRight,
  ArrowUpRight,
  Truck,
} from 'lucide-react';
import {
  BOARD_GAMES,
  BRAND_ASSETS,
  FREE_SHIPPING_THRESHOLD,
  type BoardGame,
} from '../data/catalog';
import { formatINR, formatPlayers, formatPlaytime } from '../utils/format';

interface HeaderProps {
  cartCount: number;
  cartSubtotal: number;
  wishlistCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenChat: () => void;
  onSelectGame: (game: BoardGame) => void;
}

const NAV_LINKS = [
  { label: 'Categories', href: '#categories' },
  { label: 'New Drops', href: '#new-arrivals' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Compare', href: '#compare' },
  { label: 'Table Sets', href: '#table-sets' },
  { label: 'Our Story', href: '#our-story' },
];

export function Header({
  cartCount,
  cartSubtotal,
  wishlistCount,
  compareCount,
  onOpenCart,
  onOpenChat,
  onSelectGame,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = window.scrollY;
          const total = document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress(total > 0 ? Math.min(1, Math.max(0, top / total)) : 0);
          setIsScrolled(top > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 60);
    }
  }, [searchOpen]);

  const filteredGames = query.trim()
    ? BOARD_GAMES.filter((g) => {
        const q = query.toLowerCase();
        return (
          g.displayName.toLowerCase().includes(q) ||
          g.name.toLowerCase().includes(q) ||
          g.tagline.toLowerCase().includes(q) ||
          g.experience.toLowerCase().includes(q) ||
          g.categories.some((c) => c.toLowerCase().includes(q))
        );
      })
    : BOARD_GAMES.slice(0, 5);

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Full-Width Crisp Architectural Utility Bar */}
      <div className="w-full bg-[#111318] text-[#FAFAF9] text-xs">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <Truck className="w-3.5 h-3.5 text-[#E5987F] shrink-0" />
            {cartSubtotal > 0 && remainingForFreeShipping === 0 ? (
              <span className="font-medium tracking-wide truncate">
                Free Pan-India Shipping unlocked on your bag!
              </span>
            ) : cartSubtotal > 0 ? (
              <span className="truncate">
                Add <strong className="font-mono-spec text-[#F2B59F]">{formatINR(remainingForFreeShipping)}</strong> more to unlock{' '}
                <strong className="font-semibold">Free Pan-India Shipping</strong>
              </span>
            ) : (
              <span className="truncate">
                Free shipping on orders above <span className="font-mono-spec">₹5,000</span> · Dispatched in 24–48 hrs from Bengaluru
              </span>
            )}
          </div>
          <div className="hidden md:flex items-center gap-5 text-[#B4B9C4] shrink-0 whitespace-nowrap">
            <span>100% Original Imported Editions</span>
            <span className="text-[#3C424F]">|</span>
            <a
              href="#newsletter-cta"
              className="text-[#FAFAF9] hover:text-[#E5987F] transition-colors inline-flex items-center gap-1"
            >
              First-Order Offer <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Full-Width Single-Line Main Navigation Bar */}
      <div
        className={`w-full bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E4E2DC] relative transition-shadow duration-300 ${
          isScrolled ? 'shadow-[0_8px_30px_rgba(17,19,24,0.08)]' : ''
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 h-16 lg:h-[70px] flex items-center justify-between gap-4">
          {/* Mobile Menu Trigger + Original Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 -ml-2 rounded-lg text-[#111318] hover:bg-[#F1F0EC] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a
              href="#top"
              className="flex items-center shrink-0 focus:outline-none group"
              aria-label="Owls On Board Home"
            >
              <img
                src={BRAND_ASSETS.logoWordmark}
                alt="Owls On Board"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>

          {/* Desktop Single-Line Navigation (Zero Wrapping) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 min-w-0"
            aria-label="Primary Navigation"
          >
            <button
              type="button"
              onClick={onOpenChat}
              className="px-3 xl:px-3.5 py-2 rounded-full text-[13px] xl:text-sm font-semibold text-[#C84B31] hover:bg-[#FDF0EC] transition-colors cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center gap-2"
            >
              <img
                src={BRAND_ASSETS.owlMark}
                alt=""
                className="w-5 h-2.5 object-contain"
              />
              <span>Owl Concierge</span>
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 xl:px-3.5 py-2 rounded-full text-[13px] xl:text-sm font-medium text-[#3B404C] hover:text-[#111318] hover:bg-[#F1F0EC] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <span>{link.label}</span>
                {link.href === '#compare' && compareCount > 0 && (
                  <span className="font-mono-spec text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#1E3A5F] text-white leading-none">
                    {compareCount}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action Controls (Single-Line, Never Wraps) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="inline-flex items-center justify-center gap-2 h-10 px-3 xl:px-4 rounded-full border border-[#E4E2DC] bg-white text-[#525866] hover:text-[#111318] hover:border-[#C5C1B7] transition-all text-sm whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Search board games"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="hidden xl:inline text-xs text-[#6B7280] whitespace-nowrap">
                Search games…
              </span>
            </button>

            <a
              href="#compare"
              className="hidden sm:inline-flex relative items-center justify-center w-10 h-10 rounded-full border border-transparent hover:border-[#E4E2DC] hover:bg-white text-[#3B404C] hover:text-[#111318] transition-all shrink-0"
              aria-label="Compare board games"
              title="Compare Games"
            >
              <ArrowLeftRight className="w-4 h-4" />
              {compareCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#1E3A5F] text-white font-mono-spec text-[10px] font-semibold flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </a>

            <a
              href="#new-arrivals"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-transparent hover:border-[#E4E2DC] hover:bg-white text-[#3B404C] hover:text-[#111318] transition-all shrink-0"
              aria-label="Saved games"
              title="Saved Wishlist"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-[#C84B31] text-[#C84B31]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#C84B31] text-white font-mono-spec text-[10px] font-semibold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#111318] hover:bg-[#C84B31] text-white text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
              aria-label="Open shopping bag"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Bag</span>
              <span className="font-mono-spec text-xs px-1.5 py-0.5 rounded-full bg-white/15 leading-none">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Hardware-Accelerated Smooth Scroll Reading Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#C84B31] via-[#E5987F] to-[#C84B31] origin-left shadow-[0_0_8px_rgba(200,75,49,0.6)]"
            style={{
              transform: `scaleX(${scrollProgress})`,
              transition: 'transform 80ms cubic-bezier(0.1, 0.9, 0.2, 1)',
            }}
          />
        </div>
      </div>

      {/* Interactive Live Search Dropdown */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-full bg-white border-b border-[#E4E2DC] shadow-2xl shadow-black/8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E4E2DC]">
              <Search className="w-5 h-5 text-[#C84B31]" />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Wingspan, party games, 2-player, strategy, Exploding Kittens…"
                className="w-full text-base text-[#111318] placeholder:text-[#9CA3AF] focus:outline-none bg-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-xs text-[#525866] hover:text-[#111318] px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#F1F0EC] text-[#525866]"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4">
              <p className="text-[11px] font-mono-spec uppercase tracking-wider text-[#525866] mb-3">
                {query.trim()
                  ? `${filteredGames.length} matching board game${filteredGames.length === 1 ? '' : 's'}`
                  : 'Popular Searches & Flagship Titles'}
              </p>

              {filteredGames.length === 0 ? (
                <p className="text-sm text-[#525866] py-6 text-center">
                  No games matched “{query}”. Try searching “Strategy”, “Party”, or “Wingspan”.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto">
                  {filteredGames.map((game) => (
                    <button
                      key={game.id}
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery('');
                        onSelectGame(game);
                      }}
                      className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#F1F0EC] text-left transition-colors group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#FAFAF9] border border-[#E4E2DC] p-1 shrink-0 overflow-hidden">
                        <img
                          src={game.images[0]}
                          alt={game.displayName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-[#111318] truncate group-hover:text-[#C84B31] transition-colors">
                          {game.displayName}
                        </div>
                        <div className="text-xs text-[#525866] font-mono-spec flex items-center gap-2 mt-0.5">
                          <span>{formatPlayers(game.minPlayers, game.maxPlayers)}</span>
                          <span>·</span>
                          <span>{formatPlaytime(game.minPlaytime, game.maxPlaytime)}</span>
                          <span>·</span>
                          <span className="text-[#111318] font-semibold">{formatINR(game.price)}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF9] border-b border-[#E4E2DC] shadow-xl">
          <nav className="px-4 py-4 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#C84B31] hover:bg-[#FDF0EC] text-left cursor-pointer inline-flex items-center gap-2.5"
            >
              <img
                src={BRAND_ASSETS.owlMark}
                alt=""
                className="w-5 h-2.5 object-contain"
              />
              <span>Owl Game Concierge (Chat)</span>
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#111318] hover:bg-[#F1F0EC] flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.href === '#compare' && compareCount > 0 && (
                  <span className="font-mono-spec text-xs px-2 py-0.5 rounded-full bg-[#1E3A5F] text-white">
                    {compareCount} selected
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
