import React from 'react';
import { Play, ArrowRight, Award, ShieldCheck, MapPin, Cpu, Compass } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

interface HeroProps {
  onOpenEnquiry: (program?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="top" className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-center pt-24 pb-12 overflow-hidden">
      {/* 3D WebGL & Particle background */}
      <HeroCanvas />

      {/* Decorative large Kakatiya Tara silhouette in background */}
      <div className="absolute right-[-10%] top-[30%] -translate-y-1/2 w-[600px] h-[600px] md:w-[750px] md:h-[750px] bg-gradient-to-br from-[#e8a020]/10 via-[#c8560a]/5 to-transparent clip-tara pointer-events-none opacity-40 blur-2xl animate-pulse [animation-duration:8s]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end">
        {/* Sanskrit & Scene Marker Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#e8a020]/40 bg-[#140d04]/80 backdrop-blur-md w-fit mb-6 shadow-[0_0_20px_rgba(232,160,32,0.15)]">
          <span className="font-dev text-sm text-[#e8a020] font-semibold">अध्याय १ · शुभारम्भः</span>
          <span className="w-1 h-1 rounded-full bg-[#e8a020]/60" />
          <span className="font-mono-code text-[11px] text-[#f2e8d5]/80 uppercase tracking-widest">
            First REC of India · Since 1959
          </span>
        </div>

        {/* Hero Main Headline */}
        <div className="space-y-2 mb-6">
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#f2e8d5] leading-[0.95]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f2e8d5] via-[#e8a020] to-[#f2e8d5]">
              WARANGAL
            </span>
            <span className="block">
              <span className="text-transparent [-webkit-text-stroke:1.5px_#f2e8d5] opacity-90">CALLS</span>{' '}
              THE{' '}
              <span className="text-[#e8a020] text-glow inline-block hover:scale-105 transition-transform duration-300">
                BOLD
              </span>
            </span>
          </h1>
        </div>

        {/* Description & Sanskrit Motto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-2 pb-6 border-b border-[#e8a020]/20">
          <div className="lg:col-span-8 space-y-3">
            <p className="text-base sm:text-lg text-stone-300 font-sans max-w-3xl leading-relaxed">
              Every engineer’s legacy has a first chapter. Ours was inaugurated on October 10, 1959 by Pandit Jawaharlal Nehru — India’s premier Regional Engineering College, now an Institute of National Importance rooted in the timeless Kakatiya stone of Telangana.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm">
              <span className="font-dev text-[#e8a020] font-bold text-base tracking-wide">
                योगः कर्मसु कौशलम्
              </span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-400 italic">
                “Excellence in action is true wisdom” (Bhagavad Gita 2.50)
              </span>
              <span className="text-stone-500">·</span>
              <span className="font-dev text-stone-300">सा विद्या या विमुक्तये</span>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#departments"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-gradient-to-r from-[#c8560a] to-[#e8a020] text-black font-mono-code text-xs font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(200,86,10,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Programs</span>
            </a>
            <a
              href="#ece"
              className="inline-flex items-center gap-2 px-4 py-3 rounded border border-[#e8a020]/40 bg-[#140d04]/60 backdrop-blur-md text-[#e8a020] font-mono-code text-xs tracking-wider uppercase hover:bg-[#e8a020]/15 hover:border-[#e8a020] active:scale-95 transition-all cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-[#e8a020]" />
              <span>ECE Center</span>
            </a>
          </div>
        </div>

        {/* Highlight Quick Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6">
          <div className="bg-[#140d04]/70 border border-[#e8a020]/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-[#e8a020]/50 transition-colors">
            <div className="flex items-center justify-between text-stone-400 mb-1">
              <span className="text-[10px] font-mono-code uppercase tracking-wider">NIRF Ranking</span>
              <Award className="w-4 h-4 text-[#e8a020]" />
            </div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#f2e8d5]">
              Top 10 <span className="text-xs text-[#e8a020] font-mono-code font-normal">in NITs</span>
            </div>
          </div>

          <div className="bg-[#140d04]/70 border border-[#e8a020]/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-[#e8a020]/50 transition-colors">
            <div className="flex items-center justify-between text-stone-400 mb-1">
              <span className="text-[10px] font-mono-code uppercase tracking-wider">Campus Area</span>
              <MapPin className="w-4 h-4 text-[#c8560a]" />
            </div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#f2e8d5]">
              256 <span className="text-xs text-stone-400 font-mono-code font-normal">Acres Green</span>
            </div>
          </div>

          <div className="bg-[#140d04]/70 border border-[#e8a020]/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-[#e8a020]/50 transition-colors">
            <div className="flex items-center justify-between text-stone-400 mb-1">
              <span className="text-[10px] font-mono-code uppercase tracking-wider">Highest Package</span>
              <span className="text-[#e8a020] text-xs font-mono-code">2024-25</span>
            </div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#e8a020]">
              ₹88 <span className="text-xs text-stone-300 font-mono-code font-normal">LPA CTC</span>
            </div>
          </div>

          <div className="bg-[#140d04]/70 border border-[#e8a020]/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-[#e8a020]/50 transition-colors">
            <div className="flex items-center justify-between text-stone-400 mb-1">
              <span className="text-[10px] font-mono-code uppercase tracking-wider">Legacy</span>
              <ShieldCheck className="w-4 h-4 text-[#e8a020]" />
            </div>
            <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#f2e8d5]">
              65+ <span className="text-xs text-stone-400 font-mono-code font-normal">Years of Glory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
