import React from 'react';
import { Sparkles, Radio } from 'lucide-react';

export const Ticker: React.FC = () => {
  const announcements = [
    'Admissions Open: B.Tech 2025-26 via JEE Main & JoSAA / CSAB Counselling',
    'NIT Warangal ranked consistently amongst Top 10 National Institutes of Technology',
    'MeitY sanctions ₹48 Cr for Advanced Semiconductor & VLSI Fabrication Testbed',
    'Technozion 2025: South India’s largest Technical Festival welcomes 8,500+ delegates',
    'Placement Phase 1: 42 students achieve ₹50+ LPA offers from Qualcomm, Nvidia & Microsoft',
    'ISRO & DRDO funded space & defense research cells inaugurated at ECE & MECH departments',
    'योगः कर्मसु कौशलम् · Warangal, Telangana 506004 · Est. 1959',
  ];

  return (
    <div className="relative z-20 bg-[#140d04] border-y border-[#e8a020]/25 overflow-hidden py-2.5">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Left Live Indicator Badge */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-[#c8560a]/20 border border-[#c8560a]/60 px-2.5 py-1 rounded text-[10px] font-mono-code font-bold uppercase text-[#e8a020] mr-4 shadow-[0_0_10px_rgba(200,86,10,0.3)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8a020] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8a020]" />
          </span>
          <Radio className="w-3 h-3 text-[#e8a020]" />
          <span>BULLETIN</span>
        </div>

        {/* Marquee Track */}
        <div className="overflow-hidden whitespace-nowrap flex-1 relative flex">
          <div className="inline-flex gap-8 animate-[marquee_38s_linear_infinite] will-change-transform">
            {[...announcements, ...announcements].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-3 text-xs font-mono-code text-stone-300 uppercase tracking-wider"
              >
                <span>{item}</span>
                <span className="text-[#e8a020]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
