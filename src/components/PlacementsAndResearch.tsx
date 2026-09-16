import React, { useState } from 'react';
import { Briefcase, TrendingUp, Award, Building, Globe, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const PlacementsAndResearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'placements' | 'research'>('placements');

  const placementTrends = [
    { branch: 'Computer Science (CSE)', avg: '₹22.5 LPA', highest: '₹88.0 LPA', rate: '99.2%' },
    { branch: 'Electronics & Comm (ECE)', avg: '₹17.8 LPA', highest: '₹88.0 LPA', rate: '98.1%' },
    { branch: 'Electrical & Electronics (EEE)', avg: '₹14.2 LPA', highest: '₹54.0 LPA', rate: '94.5%' },
    { branch: 'Mechanical Engineering', avg: '₹12.6 LPA', highest: '₹42.0 LPA', rate: '91.8%' },
    { branch: 'Chemical Engineering', avg: '₹11.9 LPA', highest: '₹38.0 LPA', rate: '90.4%' },
    { branch: 'Metallurgical & Materials', avg: '₹11.4 LPA', highest: '₹36.0 LPA', rate: '89.2%' },
    { branch: 'Civil Engineering', avg: '₹10.8 LPA', highest: '₹34.0 LPA', rate: '88.5%' },
    { branch: 'Biotechnology', avg: '₹10.5 LPA', highest: '₹28.0 LPA', rate: '87.0%' },
  ];

  const marqueeRecruiters = [
    'Qualcomm', 'Nvidia', 'Microsoft', 'Google', 'Apple', 'Texas Instruments',
    'Amazon', 'Uber', 'Goldman Sachs', 'Oracle', 'Intel', 'Samsung R&D',
    'ISRO', 'DRDO', 'Tata Motors', 'L&T', 'Shell', 'ExxonMobil', 'Atlassian'
  ];

  const researchCenters = [
    {
      title: 'MeitY Semiconductor Fabrication Cleanroom',
      sponsor: 'Ministry of Electronics & IT',
      fund: '₹48 Crore',
      description: 'Pilot testbed for 28nm/65nm semiconductor design and packaging with cleanroom fabrication suites.',
    },
    {
      title: 'Center of Excellence in Industry 4.0 & Smart Factory',
      sponsor: 'Siemens India Ltd',
      fund: '₹165 Crore (Joint Ecosystem)',
      description: 'Industrial robotics, CNC precision machining, digital twins, and automation testbeds.',
    },
    {
      title: 'Space Technology Cell & Atmospheric Radar',
      sponsor: 'ISRO / Department of Space',
      fund: '₹18.5 Crore',
      description: 'Advanced radar telemetry, satellite communication links, and ionospheric studies.',
    },
    {
      title: 'Center for Advanced Materials & Rare Earths',
      sponsor: 'DST / SERB',
      fund: '₹22 Crore',
      description: 'Developing high-entropy alloys, solid-state battery electrolytes, and aerospace titanium composites.',
    },
  ];

  return (
    <section id="placements" className="relative py-24 bg-[#0a0600] text-[#f2e8d5] overflow-hidden border-t border-[#e8a020]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#e8a020]/20 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ७ · नियोजनम्</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-stone-400">
                Industry &amp; Research Excellence
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              PLACEMENTS &amp; R&amp;D ECOSYSTEM
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-2xl font-sans">
              Consistently counted among the highest campus recruitment records nationally, combined with deep tech incubation and national defense research.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-[#140d04] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('placements')}
              className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'placements'
                  ? 'bg-[#e8a020] text-black font-bold shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Placements 2024-25
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'research'
                  ? 'bg-[#e8a020] text-black font-bold shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Sponsored Research
            </button>
          </div>
        </div>

        {/* 4 Grand Placement Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-[#140d04] border border-[#e8a020]/30 rounded-xl p-5 shadow-lg">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-stone-400">Highest Offer</span>
            <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#e8a020] mt-1">₹88 LPA</div>
            <span className="text-xs font-mono-code text-stone-300">Qualcomm &amp; Uber</span>
          </div>

          <div className="bg-[#140d04] border border-[#e8a020]/30 rounded-xl p-5 shadow-lg">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-stone-400">Institute Average</span>
            <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white mt-1">₹17.4 LPA</div>
            <span className="text-xs font-mono-code text-stone-300">Across All B.Tech Branches</span>
          </div>

          <div className="bg-[#140d04] border border-[#e8a020]/30 rounded-xl p-5 shadow-lg">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-stone-400">Total Offers</span>
            <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#e8a020] mt-1">1,450+</div>
            <span className="text-xs font-mono-code text-stone-300">UG + PG Recruited</span>
          </div>

          <div className="bg-[#140d04] border border-[#e8a020]/30 rounded-xl p-5 shadow-lg">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-stone-400">Visiting Firms</span>
            <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white mt-1">260+</div>
            <span className="text-xs font-mono-code text-stone-300">Global Tech &amp; Core Leaders</span>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'placements' ? (
          <div className="space-y-8">
            {/* Branch-wise placement table */}
            <div className="bg-[#140d04] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">Branch-wise Placement Performance (Phase-1)</h3>
                  <p className="text-xs font-mono-code text-stone-400">Verified figures from the Center for Career Planning &amp; Development (CCPD)</p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono-code text-[#e8a020] bg-[#e8a020]/10 px-3 py-1 rounded border border-[#e8a020]/30">
                  92%+ OVERALL PLACEMENT
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono-code">
                  <thead className="bg-black/60 text-stone-400 uppercase tracking-wider border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Engineering Branch</th>
                      <th className="py-3.5 px-4">Average CTC</th>
                      <th className="py-3.5 px-4">Highest CTC</th>
                      <th className="py-3.5 px-4 text-right">Placement Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {placementTrends.map((t, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-sans font-medium text-stone-200">{t.branch}</td>
                        <td className="py-3.5 px-4 font-bold text-[#e8a020]">{t.avg}</td>
                        <td className="py-3.5 px-4 text-white font-bold">{t.highest}</td>
                        <td className="py-3.5 px-4 text-right font-bold text-stone-300">
                          <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                            {t.rate}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recruiter Logos Banner */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-6">
              <span className="block text-xs font-mono-code uppercase tracking-wider text-stone-400 mb-4 text-center">
                Prominent Global Recruiters at NIT Warangal
              </span>
              <div className="flex flex-wrap justify-center gap-2.5">
                {marqueeRecruiters.map((r, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-code text-stone-300 hover:border-[#e8a020] hover:text-[#e8a020] transition-colors cursor-default"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Research Ecosystem Tab */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCenters.map((rc, i) => (
              <div key={i} className="bg-[#140d04] border border-[#e8a020]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider px-2.5 py-1 rounded bg-[#c8560a]/20 border border-[#c8560a]/50 text-[#e8a020]">
                      {rc.sponsor}
                    </span>
                    <span className="font-cinzel font-bold text-base text-emerald-400">{rc.fund}</span>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white mb-2">{rc.title}</h3>
                  <p className="text-sm text-stone-300 font-sans leading-relaxed">{rc.description}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono-code text-[#e8a020]">
                  <Sparkles className="w-4 h-4" />
                  <span>Actively publishing in IEEE, Nature &amp; Elsevier journals</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
