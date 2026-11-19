import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Gift, Sparkles } from 'lucide-react';
import { Reveal3D } from './Reveal3D';

export function ConversionCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="newsletter-cta" className="py-16 lg:py-24 bg-[#F1F0EC] border-b border-[#E4E2DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D>
          <div className="relative rounded-[2rem] bg-white border border-[#E4E2DC] p-7 sm:p-12 shadow-[0_24px_60px_-30px_rgba(17,19,24,0.12)] overflow-hidden">
            {/* Subtle corner architectural accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C84B31]/8 blur-3xl"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF0EC] text-[#C84B31] font-mono-spec text-[11px] font-semibold uppercase tracking-wider">
                  <Gift className="w-3.5 h-3.5" />
                  <span>First-Order Perk & Early Cargo Access</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#111318] leading-tight">
                  Get First Dibs Before Rare Imports Sell Out.
                </h2>

                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  Our imported batches arrive in small numbers (often 2–5 copies per title). Join the Owls Vault list for exclusive first-order savings, restock alerts, and Bengaluru game night invites.
                </p>
              </div>

              <div className="lg:col-span-5">
                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#F5F8F6] border border-[#CBE0D2] text-left space-y-2">
                    <div className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D4F]" />
                      <span>You&apos;re in the Owls Vault!</span>
                    </div>
                    <p className="text-xs text-[#525866] leading-relaxed">
                      Watch your inbox for your exclusive first-order welcome offer and next week&apos;s cargo drop list.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        aria-label="Email address"
                        className="flex-1 h-12 px-4 rounded-full bg-[#FAFAF9] border border-[#D4D1C9] text-sm text-[#111318] placeholder:text-[#8D93A0] focus:outline-none focus:border-[#C84B31] focus:bg-white transition-colors"
                      />
                      <button
                        type="submit"
                        className="h-12 px-6 rounded-full bg-[#C84B31] hover:bg-[#A93B24] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors shrink-0 cursor-pointer"
                      >
                        <span>Unlock Offer</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#787F8E] flex items-center gap-1.5 px-2">
                      <Sparkles className="w-3 h-3 text-[#B8862D]" />
                      <span>No spam. Only rare restocks & member-only drops.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}
