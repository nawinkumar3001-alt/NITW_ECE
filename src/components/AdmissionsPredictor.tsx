import React, { useState } from 'react';
import { CUTOFF_DATA } from '../data/nitwData';
import { Calculator, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

interface AdmissionsPredictorProps {
  onOpenEnquiry: (program?: string) => void;
}

export const AdmissionsPredictor: React.FC<AdmissionsPredictorProps> = ({ onOpenEnquiry }) => {
  const [quota, setQuota] = useState<'HS' | 'OS'>('OS');
  const [userRank, setUserRank] = useState<number>(4500);
  const [category, setCategory] = useState<string>('OPEN');

  // Category multiplier estimate for demonstration
  const getMultiplier = (cat: string) => {
    switch (cat) {
      case 'OBC-NCL':
        return 1.45;
      case 'EWS':
        return 1.35;
      case 'SC':
        return 3.2;
      case 'ST':
        return 4.5;
      default:
        return 1.0;
    }
  };

  const multiplier = getMultiplier(category);

  return (
    <section id="predictor" className="relative py-24 bg-[#140d04] text-[#f2e8d5] overflow-hidden border-t border-[#e8a020]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#e8a020]/20 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ६ · प्रवेश परीक्षा</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#c8560a]">
                JoSAA / CSAB 2025 Predictor
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              ADMISSIONS &amp; CUTOFF PREDICTOR
            </h2>
            <p className="text-stone-300 text-sm mt-1 max-w-2xl font-sans">
              Enter your estimated JEE Main All India Rank (AIR) to explore opening and closing ranks for NIT Warangal across B.Tech branches.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry()}
            className="px-4 py-2.5 rounded bg-gradient-to-r from-[#c8560a] to-[#e8a020] text-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Admissions Helpdesk</span>
          </button>
        </div>

        {/* 2-Column Tool Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Controls Form Box */}
          <div className="lg:col-span-5 bg-black/60 border border-[#e8a020]/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono-code text-[#e8a020] pb-3 border-b border-white/10">
              <Calculator className="w-4 h-4" />
              <span>CANDIDATE PROFILE &amp; MERIT RANK</span>
            </div>

            {/* Quota Selector: Home State vs Other State */}
            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-stone-400 mb-2">
                Domicile Quota (50% Telangana / 50% All India)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQuota('HS')}
                  className={`py-2 px-3 rounded text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                    quota === 'HS'
                      ? 'bg-[#e8a020] text-black font-bold shadow-md'
                      : 'bg-white/5 text-stone-400 border border-white/10 hover:text-white'
                  }`}
                >
                  Home State (Telangana)
                </button>
                <button
                  type="button"
                  onClick={() => setQuota('OS')}
                  className={`py-2 px-3 rounded text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                    quota === 'OS'
                      ? 'bg-[#e8a020] text-black font-bold shadow-md'
                      : 'bg-white/5 text-stone-400 border border-white/10 hover:text-white'
                  }`}
                >
                  Other State (All India)
                </button>
              </div>
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-stone-400 mb-2">
                Reservation Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#140d04] border border-white/20 rounded px-3 py-2.5 text-sm font-mono-code text-stone-200 focus:border-[#e8a020] outline-none"
              >
                <option value="OPEN">OPEN / General (Unreserved)</option>
                <option value="OBC-NCL">OBC-NCL (Non-Creamy Layer)</option>
                <option value="EWS">GEN-EWS (Economically Weaker)</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
              </select>
            </div>

            {/* JEE Main AIR Input & Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono-code text-stone-400 mb-2">
                <span className="uppercase">Your JEE Main Rank (AIR):</span>
                <span className="text-[#e8a020] font-bold text-sm">{userRank.toLocaleString()}</span>
              </div>
              <input
                type="number"
                min="100"
                max="80000"
                step="100"
                value={userRank}
                onChange={(e) => setUserRank(Math.max(1, parseInt(e.target.value || '1', 10)))}
                className="w-full bg-[#140d04] border border-white/20 rounded px-3 py-2 text-sm font-mono-code text-white mb-2 focus:border-[#e8a020] outline-none"
              />
              <input
                type="range"
                min="500"
                max="50000"
                step="250"
                value={userRank}
                onChange={(e) => setUserRank(parseInt(e.target.value, 10))}
                className="w-full accent-[#e8a020] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono-code text-stone-500 mt-1">
                <span>Top 500 (CSE/ECE)</span>
                <span>25,000 (Core/Sciences)</span>
                <span>50,000+</span>
              </div>
            </div>

            {/* Admissions Roadmap Steps */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[11px] font-mono-code uppercase tracking-wider text-stone-400 block">
                Official 4-Step JoSAA Allotment Roadmap
              </span>
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex gap-2">
                  <b className="text-[#e8a020] font-mono-code">01.</b>
                  <span>Appear for JEE Main (Paper 1 - B.E./B.Tech)</span>
                </div>
                <div className="flex gap-2">
                  <b className="text-[#e8a020] font-mono-code">02.</b>
                  <span>Register on JoSAA Portal (Institute code: 219)</span>
                </div>
                <div className="flex gap-2">
                  <b className="text-[#e8a020] font-mono-code">03.</b>
                  <span>Lock NITW choice preferences before Round 1</span>
                </div>
                <div className="flex gap-2">
                  <b className="text-[#e8a020] font-mono-code">04.</b>
                  <span>Seat Acceptance Fee &amp; Document Verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Table & Insights */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    NIT Warangal Branch Cutoff Match
                  </h3>
                  <p className="text-xs font-mono-code text-stone-400">
                    Based on recent JoSAA 6-Round Opening/Closing Closing data for {category} ({quota} Quota)
                  </p>
                </div>
              </div>

              {/* Branch Results List */}
              <div className="space-y-3">
                {CUTOFF_DATA.map((item) => {
                  const closingRaw = quota === 'HS' ? item.homeStateClosing : item.otherStateClosing;
                  const openingRaw = quota === 'HS' ? item.homeStateOpening : item.otherStateOpening;
                  
                  const adjustedClosing = Math.round(closingRaw * multiplier);
                  const adjustedOpening = Math.round(openingRaw * multiplier);

                  let status: 'high' | 'medium' | 'reach' = 'reach';
                  if (userRank <= adjustedClosing) {
                    status = 'high';
                  } else if (userRank <= adjustedClosing * 1.15) {
                    status = 'medium';
                  }

                  return (
                    <div
                      key={item.branchCode}
                      className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        status === 'high'
                          ? 'bg-[#e8a020]/10 border-[#e8a020]/50 shadow-[0_0_15px_rgba(232,160,32,0.1)]'
                          : status === 'medium'
                          ? 'bg-[#c8560a]/10 border-[#c8560a]/40'
                          : 'bg-white/[0.02] border-white/5 opacity-70'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-sm font-bold text-[#e8a020]">
                            {item.branchCode}
                          </span>
                          <span className="text-xs text-stone-300 font-sans">
                            {item.branchName}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono-code text-stone-400">
                          Est. Range: ~{adjustedOpening.toLocaleString()} - {adjustedClosing.toLocaleString()}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2.5 py-1 rounded text-[10px] font-mono-code uppercase font-bold tracking-wider ${
                            status === 'high'
                              ? 'bg-[#e8a020] text-black'
                              : status === 'medium'
                              ? 'bg-[#c8560a] text-white'
                              : 'bg-white/10 text-stone-400'
                          }`}
                        >
                          {status === 'high' ? 'High Chance' : status === 'medium' ? 'Competitive / CSAB' : 'Ambitious'}
                        </span>

                        <button
                          onClick={() => onOpenEnquiry(`B.Tech — ${item.branchCode}`)}
                          title={`Inquire about ${item.branchCode}`}
                          className="p-1.5 rounded bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white transition-colors cursor-pointer"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono-code text-stone-500">
                * Note: Cutoffs fluctuate based on JEE difficulty, CSAB special rounds, and student seat acceptance. Refer to official JoSAA bulletin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
