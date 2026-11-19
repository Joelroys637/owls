import { ShieldCheck, Truck, PackageCheck, BadgeIndianRupee } from 'lucide-react';
import { Reveal3D } from './Reveal3D';

const PILLARS = [
  {
    icon: ShieldCheck,
    eyebrow: '01 / AUTHENTICITY',
    title: '100% Original Imported Stock',
    desc: 'Zero counterfeits or grey copies. Every box is publisher-sealed and sourced directly for Indian collectors.',
  },
  {
    icon: Truck,
    eyebrow: '02 / FULFILMENT',
    title: '24–48 Hr Pan-India Dispatch',
    desc: 'Corner-protected double-walled packaging shipped rapidly from our Bengaluru vault to every pin code.',
  },
  {
    icon: PackageCheck,
    eyebrow: '03 / SHIPPING',
    title: 'Free Shipping Over ₹5,000',
    desc: 'Live shipping meter in your bag so you always know when your table order qualifies for free delivery.',
  },
  {
    icon: BadgeIndianRupee,
    eyebrow: '04 / TRUST',
    title: 'Best Prices & UPI Security',
    desc: 'Transparent savings off MRP with Razorpay-verified UPI, cards, and netbanking checkout.',
  },
];

export function TrustArchitecture() {
  return (
    <section className="bg-white border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal3D key={pillar.title} delayMs={idx * 70}>
                <div className="group flex flex-col gap-3 p-5 rounded-2xl bg-[#FAFAF9] border border-[#EAE8E2] hover:border-[#D4D1C9] transition-all h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-spec text-[10px] tracking-[0.14em] text-[#787F8E] uppercase">
                      {pillar.eyebrow}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E4E2DC] flex items-center justify-center text-[#1E3A5F] group-hover:bg-[#C84B31] group-hover:text-white group-hover:border-[#C84B31] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-[15px] text-[#111318] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#525866] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
