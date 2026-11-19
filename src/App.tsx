import { useState, useCallback } from 'react';
import { BOARD_GAMES, type BoardGame } from './data/catalog';
import { Header } from './components/Header';
import { Hero3DStage, type HeroQuickFilter } from './components/Hero3DStage';
import { TrustArchitecture } from './components/TrustArchitecture';
import { PersonalizedMatchesBand } from './components/PersonalizedMatchesBand';
import { CategoryBento } from './components/CategoryBento';
import { EditorsSpotlight } from './components/EditorsSpotlight';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { BestSellersSection } from './components/BestSellersSection';
import { CompareSection } from './components/CompareSection';
import { GameNightBundles } from './components/GameNightBundles';
import { BrandStory } from './components/BrandStory';
import { ConversionCTA } from './components/ConversionCTA';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer, type CartItem } from './components/CartDrawer';
import { OwlChatbot } from './components/OwlChatbot';

const INITIAL_COMPARE_SLUGS = ['wingspan-en', 'terraforming-mars-en', 'creature-comforts'];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>(() =>
    INITIAL_COMPARE_SLUGS.map(
      (slug) => BOARD_GAMES.find((g) => g.slug === slug)?.id
    ).filter((id): id is string => Boolean(id))
  );
  const [quickViewGame, setQuickViewGame] = useState<BoardGame | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Live personalized homepage recommendations pushed from the Owl Concierge Chatbot or Category Bento
  const [chatMatches, setChatMatches] = useState<{
    summary: string;
    games: BoardGame[];
  } | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 2400);
  }, []);

  const handleAddToCart = useCallback(
    (game: BoardGame) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.game.id === game.id);
        if (existing) {
          return prev.map((i) =>
            i.game.id === game.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { game, quantity: 1 }];
      });
      showToast(`Added ${game.displayName} to your bag`);
    },
    [showToast]
  );

  const handleAddBundle = useCallback((games: BoardGame[]) => {
    setCart((prev) => {
      const next = [...prev];
      games.forEach((game) => {
        const idx = next.findIndex((i) => i.game.id === game.id);
        if (idx >= 0) {
          next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        } else {
          next.push({ game, quantity: 1 });
        }
      });
      return next;
    });
    setCartOpen(true);
  }, []);

  const handleUpdateQty = useCallback((gameId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.game.id === gameId ? { ...i, quantity: i.quantity + delta } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const handleRemoveCart = useCallback((gameId: string) => {
    setCart((prev) => prev.filter((i) => i.game.id !== gameId));
  }, []);

  const handleToggleWishlist = useCallback(
    (id: string) => {
      setWishlistIds((prev) => {
        const exists = prev.includes(id);
        const game = BOARD_GAMES.find((g) => g.id === id);
        if (game) {
          showToast(
            exists
              ? `Removed ${game.displayName} from wishlist`
              : `Saved ${game.displayName} to wishlist`
          );
        }
        return exists ? prev.filter((x) => x !== id) : [...prev, id];
      });
    },
    [showToast]
  );

  const handleToggleCompare = useCallback(
    (game: BoardGame) => {
      setCompareIds((prev) => {
        if (prev.includes(game.id)) {
          showToast(`Removed ${game.displayName} from Compare`);
          return prev.filter((id) => id !== game.id);
        }
        const next = prev.length >= 3 ? [...prev.slice(1), game.id] : [...prev, game.id];
        showToast(`Added ${game.displayName} to Compare Workbench`);
        return next;
      });
    },
    [showToast]
  );

  const handleCategorySelect = useCallback((preset: HeroQuickFilter) => {
    let summary = 'Curated Selection';
    let games: BoardGame[] = [];
    if (preset === '2p') {
      summary = 'Gateway & 2-Player Friendly Games';
      games = BOARD_GAMES.filter((g) => g.minPlayers <= 2 && g.maxPlayers >= 2);
    } else if (preset === 'family') {
      summary = 'Family Table Games (Ages 6+)';
      games = BOARD_GAMES.filter((g) =>
        g.categories.some((c) => c.toLowerCase() === 'family')
      );
    } else if (preset === 'party') {
      summary = 'Party & Gathering Games (5+ Players)';
      games = BOARD_GAMES.filter((g) => g.maxPlayers >= 6);
    } else if (preset === 'strategy') {
      summary = 'Deep & Modern Strategy Games';
      games = BOARD_GAMES.filter((g) =>
        g.categories.some((c) => c.toLowerCase() === 'strategy')
      );
    }
    setChatMatches({ summary, games });
    setTimeout(() => {
      document.getElementById('concierge-results')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 80);
  }, []);

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartSubtotal = cart.reduce((sum, i) => sum + i.game.price * i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#111318]">
      <Header
        cartCount={cartCount}
        cartSubtotal={cartSubtotal}
        wishlistCount={wishlistIds.length}
        compareCount={compareIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenChat={() => setChatOpen(true)}
        onSelectGame={(game) => setQuickViewGame(game)}
      />

      <main className="flex-1 pt-[100px] lg:pt-[106px]">
        {/* 1. Full-Bleed Cinematic 3D Video Hero */}
        <Hero3DStage onOpenChat={() => setChatOpen(true)} />

        {/* 2. Architectural Value Proposition Strip */}
        <TrustArchitecture />

        {/* 3. Live Chatbot & Concierge Results Shelf (Appears dynamically when user picks via Chatbot or Category) */}
        {chatMatches && (
          <PersonalizedMatchesBand
            summary={chatMatches.summary}
            games={chatMatches.games}
            wishlistIds={wishlistIds}
            compareIds={compareIds}
            onOpenChat={() => setChatOpen(true)}
            onClear={() => setChatMatches(null)}
            onToggleWishlist={handleToggleWishlist}
            onToggleCompare={handleToggleCompare}
            onQuickView={setQuickViewGame}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* 4. Asymmetric Editorial Category Discovery Bento */}
        <CategoryBento onSelectCategory={handleCategorySelect} />

        {/* 5. Curator's Multi-Angle Box & Component Spotlight */}
        <EditorsSpotlight
          compareIds={compareIds}
          onToggleCompare={handleToggleCompare}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Fresh Drops — New Arrivals (All 8 Authentic Titles) */}
        <NewArrivalsSection
          wishlistIds={wishlistIds}
          compareIds={compareIds}
          onToggleWishlist={handleToggleWishlist}
          onToggleCompare={handleToggleCompare}
          onQuickView={setQuickViewGame}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Ranked Bestsellers — Most Played Across 1,000+ Indian Tables */}
        <BestSellersSection
          wishlistIds={wishlistIds}
          compareIds={compareIds}
          onToggleWishlist={handleToggleWishlist}
          onToggleCompare={handleToggleCompare}
          onQuickView={setQuickViewGame}
          onAddToCart={handleAddToCart}
        />

        {/* 8. NEW FEATURE #2: Side-by-Side Game Comparison Workbench */}
        <CompareSection
          compareIds={compareIds}
          onSetCompareIds={setCompareIds}
          onAddToCart={handleAddToCart}
          onQuickView={setQuickViewGame}
        />

        {/* 9. NEW FEATURE #3: Curated Indian Game Night Table Sets */}
        <GameNightBundles onAddBundle={handleAddBundle} />

        {/* 10. Bengaluru Brand Story & WhatsApp Tabletop Community */}
        <BrandStory />

        {/* 11. Conversion-Focused First-Order Offer & Early Drop Access */}
        <ConversionCTA />
      </main>

      <Footer />

      {/* NEW FEATURE #1: Interactive Owl Concierge Chatbot (Feeds live picks onto homepage!) */}
      <OwlChatbot
        open={chatOpen}
        onOpenChange={setChatOpen}
        onApplyRecommendation={({ summary, games }) => {
          setChatMatches({ summary, games });
          showToast(`Pinned ${games.length} Owl Concierge matches on homepage!`);
        }}
        onQuickView={setQuickViewGame}
        onAddToCart={handleAddToCart}
      />

      {/* NEW FEATURE #4: Real Multi-Photo Box & Component Inspector */}
      <QuickViewModal
        game={quickViewGame}
        isWishlisted={quickViewGame ? wishlistIds.includes(quickViewGame.id) : false}
        isCompared={quickViewGame ? compareIds.includes(quickViewGame.id) : false}
        onClose={() => setQuickViewGame(null)}
        onToggleWishlist={handleToggleWishlist}
        onToggleCompare={handleToggleCompare}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-Over Game Bag with Live Free-Shipping Progress Bar */}
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveCart}
        onAddGame={handleAddToCart}
      />

      {/* Subtle Floating Toast Feedback */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-24 right-5 z-50 px-4 py-3 rounded-2xl bg-[#111318] text-white text-xs font-medium shadow-xl border border-white/10 flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
