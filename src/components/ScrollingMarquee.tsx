import { BRAND_ASSETS } from '../data/catalog';
import { Truck, ShieldCheck, Sparkles, PackageCheck, Flame } from 'lucide-react';

interface MarqueeItem {
  icon?: typeof Truck;
  text: string;
  highlight?: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  {
    icon: Truck,
    text: 'Free Pan-India Shipping on orders above',
    highlight: '₹5,000',
  },
  {
    icon: ShieldCheck,
    text: '100% Publisher-Sealed',
    highlight: 'Original Imported Stock',
  },
  {
    icon: PackageCheck,
    text: 'Fast 24–48 Hr Dispatch from our',
    highlight: 'Bengaluru Hub',
  },
  {
    icon: Sparkles,
    text: 'Curated Strategy, Gateway, Family &',
    highlight: 'Party Titles',
  },
  {
    icon: Flame,
    text: 'First-Order Welcome Perks &',
    highlight: 'VIP Access',
  },
];

interface ScrollingMarqueeProps {
  variant?: 'dark' | 'sand' | 'cinnabar';
  speed?: 'normal' | 'fast';
  direction?: 'left' | 'right';
  className?: string;
}

export function ScrollingMarquee({
  variant = 'dark',
  speed = 'normal',
  direction = 'left',
  className = '',
}: ScrollingMarqueeProps) {
  const bgStyles = {
    dark: 'bg-[#111318] text-[#FAFAF9] border-y border-white/10',
    sand: 'bg-[#F1F0EC] text-[#111318] border-y border-[#E4E2DC]',
    cinnabar: 'bg-[#C84B31] text-white border-y border-[#A93B24]',
  }[variant];

  const animClass =
    direction === 'right'
      ? 'animate-marquee-reverse'
      : speed === 'fast'
      ? 'animate-marquee-infinite-fast'
      : 'animate-marquee-infinite';

  // We repeat the item sequence to ensure seamless loop
  const sequence = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  const fadeStyles = {
    dark: 'from-[#111318]',
    sand: 'from-[#F1F0EC]',
    cinnabar: 'from-[#C84B31]',
  }[variant];

  return (
    <div
      className={`w-full overflow-hidden select-none py-3 relative pause-on-hover ${bgStyles} ${className}`}
      aria-label="Announcements & Brand Highlights"
    >
      {/* Subtle edge fades for smooth entrance/exit */}
      <div className={`absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none bg-gradient-to-r ${fadeStyles} to-transparent`} />
      <div className={`absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none bg-gradient-to-l ${fadeStyles} to-transparent`} />

      <div className={animClass}>
        {sequence.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 sm:px-8 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap"
            >
              {Icon && (
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2B59F] shrink-0" />
              )}
              <span>
                {item.text}{' '}
                {item.highlight && (
                  <strong className="font-semibold text-white tracking-normal">
                    {item.highlight}
                  </strong>
                )}
              </span>
              <span className="inline-flex items-center pl-4 opacity-50 shrink-0" aria-hidden="true">
                <img
                  src={BRAND_ASSETS.owlMark}
                  alt=""
                  className="w-4 h-2 object-contain brightness-0 invert"
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
