import React from 'react';
import { Sparkles, Shield, Landmark } from 'lucide-react';

export const HeritageBand: React.FC = () => {
  return (
    <div className="relative py-20 bg-gradient-to-r from-[#160b02] via-[#0a0600] to-[#160d03] text-[#f2e8d5] border-y border-[#e8a020]/25 overflow-hidden">
      {/* Decorative background radial glows */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#e8a020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#c8560a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Massive Pulsing Kakatiya Tara (10-point Star) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative group">
              {/* Outer halo */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#c8560a] to-[#e8a020] rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse" />
              
              {/* 10-Point Star */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-br from-[#c8560a] via-[#e8a020] to-[#8b3a0f] clip-tara shadow-2xl flex items-center justify-center animate-[spin_24s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
                <div className="w-28 h-28 bg-[#0a0600] clip-tara flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e8a020] to-[#c8560a] clip-tara" />
                </div>
              </div>
            </div>

            <p className="font-mono-code text-xs uppercase tracking-widest text-[#e8a020] mt-6 font-bold">
              Kakatiya Tara · క్రాకతీయ తార
            </p>
            <span className="text-[11px] font-mono-code text-stone-400">
              The Sovereign Emblem of Warangal
            </span>
          </div>

          {/* Right Column: Historical Narrative & Shloka */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8560a]/20 border border-[#c8560a]/50 text-xs font-mono-code text-[#e8a020]">
              <Landmark className="w-3.5 h-3.5" />
              TELANGANA’S LIVING ARCHITECTURAL HERITAGE
            </div>

            <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              ROOTED IN <span className="text-[#e8a020]">KAKATIYA</span> SOIL
            </h3>

            <p className="text-stone-300 text-base leading-relaxed font-sans">
              The Kakatiya dynasty (1083–1323 CE) created architectural and hydraulic wonders right here in Warangal. They engineered the famous <strong>Thousand Pillar Temple</strong> in Hanumakonda, the monolithic <strong>Warangal Fort with its four royal Toranas</strong> (which proudly form the central emblem of the Government of Telangana), and the earthquake-resilient <strong>Ramappa Temple</strong>.
            </p>

            <p className="text-stone-300 text-base leading-relaxed font-sans">
              NIT Warangal carries that spirit of master engineering forward: where the wisdom of ancient water reservoirs and stone joinery inspires modern smart grids, sustainable concrete, and nanoscale electronics.
            </p>

            {/* Sacred Shloka Card */}
            <div className="border-l-4 border-[#e8a020] bg-black/40 p-5 rounded-r-xl border border-white/5 space-y-1">
              <div className="font-dev text-xl sm:text-2xl font-bold text-[#e8a020] tracking-wide">
                सा विद्या या विमुक्तये
              </div>
              <p className="text-xs font-mono-code uppercase tracking-wider text-stone-300">
                “That alone is true knowledge which liberates the human intellect”
              </p>
              <p className="text-[11px] text-stone-500 font-dev pt-1">
                विष्णुपुराणम् १.१९.४१ · Vishnu Purana
              </p>
            </div>

            {/* Ornamental diamond divider */}
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2 h-2 rotate-45 bg-[#e8a020]" />
              <span className="w-3 h-3 rotate-45 bg-[#e8a020]" />
              <span className="w-2 h-2 rotate-45 bg-[#e8a020]" />
              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#e8a020]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
