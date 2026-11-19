import { Mail, MessageCircle, Instagram, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS, STORE_LINKS } from '../data/catalog';

export function Footer() {
  return (
    <footer className="bg-[#FAFAF9] text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#E4E2DC]">
          {/* Brand Column with Unmodified Original Logo */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="inline-block" aria-label="Owls On Board">
              <img
                src={BRAND_ASSETS.logoWordmark}
                alt="Owls On Board"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-[#525866] leading-relaxed max-w-xs">
              Play Deliberately. Elevating the tabletop experience across India with original imported and independent board games, curated from Bengaluru since 2025.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={STORE_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#E4E2DC] hover:border-[#111318] text-xs font-medium text-[#111318] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C84B31]" />
                WhatsApp Club
              </a>
              <a
                href={STORE_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#E4E2DC] hover:border-[#111318] text-xs font-medium text-[#111318] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#1E3A5F]" />
                Instagram
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2 space-y-3 min-w-0">
            <h3 className="font-mono-spec text-[11px] uppercase tracking-[0.14em] text-[#787F8E] font-semibold">
              Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-[#3B404C]">
              <li>
                <a href={STORE_LINKS.shop} target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  All Games
                </a>
              </li>
              <li>
                <a href={STORE_LINKS.strategy} target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Deep Strategy
                </a>
              </li>
              <li>
                <a href={STORE_LINKS.gateway} target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Gateway Games
                </a>
              </li>
              <li>
                <a href={STORE_LINKS.family} target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Family Table
                </a>
              </li>
              <li>
                <a href={STORE_LINKS.party} target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Party Games
                </a>
              </li>
              <li>
                <a href={STORE_LINKS.newArrivals} target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3 space-y-3 min-w-0">
            <h3 className="font-mono-spec text-[11px] uppercase tracking-[0.14em] text-[#787F8E] font-semibold">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm text-[#3B404C]">
              <li>
                <a href="https://www.owlsonboard.com/contact" target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.owlsonboard.com/shipping-policy" target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="https://www.owlsonboard.com/returns" target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="https://www.owlsonboard.com/faqs" target="_blank" rel="noreferrer" className="hover:text-[#C84B31] transition-colors">
                  FAQs
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={STORE_LINKS.email}
                  className="inline-flex items-center gap-2 text-[13px] text-[#111318] font-medium hover:text-[#C84B31] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-[#C84B31]" />
                  <span>support@owlsonboard.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Payments & Trust */}
          <div className="lg:col-span-3 space-y-3 min-w-0">
            <h3 className="font-mono-spec text-[11px] uppercase tracking-[0.14em] text-[#787F8E] font-semibold">
              Dispatch & Payments
            </h3>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E4E2DC] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111318]">
                <ShieldCheck className="w-4 h-4 text-[#1E3A5F] shrink-0" />
                <span>Razorpay Verified Checkout</span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono-spec text-[10px] text-[#525866]">
                {['UPI', 'Razorpay', 'Visa / MasterCard', 'RuPay', 'NetBanking'].map((m) => (
                  <span
                    key={m}
                    className="px-2 py-1 rounded-md bg-[#FAFAF9] border border-[#EAE8E2]"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-[#787F8E] leading-relaxed">
                Free Pan-India shipping on orders above ₹5,000. Dispatched within 24–48 business hours from Bengaluru.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#787F8E] lg:pr-52">
          <div>
            © 2026 Owls On Board · Serving all of India, based in Bengaluru since 2025.
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.owlsonboard.com/privacy" target="_blank" rel="noreferrer" className="hover:text-[#111318]">
              Privacy Policy
            </a>
            <a href="https://www.owlsonboard.com/terms" target="_blank" rel="noreferrer" className="hover:text-[#111318]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
