import React, { useState, useEffect } from 'react';
import { Landmark, History, Building2, Users, Trophy, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export const AboutInstitute: React.FC = () => {
  const [activeEra, setActiveEra] = useState<number>(0);

  const eras = [
    {
      year: '1959',
      title: 'The Foundation Stone',
      subtitle: 'India’s First Regional Engineering College',
      desc: 'Pandit Jawaharlal Nehru personally laid the foundation stone on October 10, 1959. REC Warangal was designed as a model of national integration, admitting students from every state across the newly independent nation.',
      stat: 'First of 17 RECs in India',
    },
    {
      year: '2002',
      title: 'Elevation to NIT',
      subtitle: 'Transition to National Institute of Technology',
      desc: 'Recognizing academic stature, MHRD transformed REC Warangal into the National Institute of Technology with deemed university status, inaugurating high-impact graduate and doctoral research programs.',
      stat: 'Autonomous Curricular Freedom',
    },
    {
      year: '2007',
      title: 'Institute of National Importance',
      subtitle: 'Parliament Act of India',
      desc: 'Enacted under the National Institutes of Technology Act, 2007 by the Parliament of India, declaring NITW an Institute of National Importance alongside the Indian Institutes of Technology.',
      stat: 'Statutory National Standing',
    },
    {
      year: '2019-Present',
      title: 'Diamond Jubilee & Semiconductor Hub',
      subtitle: 'Next-Gen Quantum & 6G Research',
      desc: 'Celebrated 60 years of engineering leadership. Selected as a premier national node for MeitY’s India Semiconductor Mission, establishing pilot cleanrooms, 5G testbeds, and quantum materials laboratories.',
      stat: '₹120+ Cr Active Grants',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#f2e8d5] text-[#0a0600] overflow-hidden border-t-4 border-[#c8560a]">
      {/* Subtle Kakatiya decorative watermarks */}
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full border-[30px] border-[#c8560a]/5 pointer-events-none" />
      <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] bg-[#e8a020]/10 clip-tara pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#c8560a]/20 mb-12">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#c8560a]">अध्याय २ · इतिहासः</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#8b3a0f]">
                Scene 02 / The Genesis
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#0a0600] tracking-tight">
              THE INSTITUTE OF NATIONAL IMPORTANCE
            </h2>
          </div>
          <p className="font-mono-code text-xs uppercase tracking-wider text-stone-600">
            P.O. R.E.C. Warangal · Telangana · Since 1959
          </p>
        </div>

        {/* 4 Grand Stats Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-[#e8d9bc]/70 border border-[#c8560a]/20 rounded-xl p-6 hover:border-[#c8560a] hover:bg-[#e8d9bc] transition-all group shadow-sm">
            <div className="flex items-center justify-between text-[#8b3a0f] mb-2">
              <History className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono-code uppercase tracking-wider font-semibold">Legacy</span>
            </div>
            <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#0a0600]">
              65<span className="text-[#c8560a]">+</span>
            </div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-stone-700 mt-2 font-medium">
              Years of Excellence
            </p>
            <p className="text-xs text-stone-600 mt-1">First REC established in Independent India</p>
          </div>

          <div className="bg-[#e8d9bc]/70 border border-[#c8560a]/20 rounded-xl p-6 hover:border-[#c8560a] hover:bg-[#e8d9bc] transition-all group shadow-sm">
            <div className="flex items-center justify-between text-[#8b3a0f] mb-2">
              <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono-code uppercase tracking-wider font-semibold">Campus</span>
            </div>
            <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#0a0600]">
              256
            </div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-stone-700 mt-2 font-medium">
              Acres Self-Contained
            </p>
            <p className="text-xs text-stone-600 mt-1">Lush residential campus with 22 hostels</p>
          </div>

          <div className="bg-[#e8d9bc]/70 border border-[#c8560a]/20 rounded-xl p-6 hover:border-[#c8560a] hover:bg-[#e8d9bc] transition-all group shadow-sm">
            <div className="flex items-center justify-between text-[#8b3a0f] mb-2">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono-code uppercase tracking-wider font-semibold">Academics</span>
            </div>
            <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#0a0600]">
              14
            </div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-stone-700 mt-2 font-medium">
              Academic Departments
            </p>
            <p className="text-xs text-stone-600 mt-1">B.Tech, M.Tech, MCA, MBA & Ph.D</p>
          </div>

          <div className="bg-[#e8d9bc]/70 border border-[#c8560a]/20 rounded-xl p-6 hover:border-[#c8560a] hover:bg-[#e8d9bc] transition-all group shadow-sm">
            <div className="flex items-center justify-between text-[#8b3a0f] mb-2">
              <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono-code uppercase tracking-wider font-semibold">Placements</span>
            </div>
            <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#c8560a]">
              92<span className="text-xl sm:text-2xl font-mono-code">%+</span>
            </div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-stone-700 mt-2 font-medium">
              Overall Placement Rate
            </p>
            <p className="text-xs text-stone-600 mt-1">260+ premier global recruiters visit yearly</p>
          </div>
        </div>

        {/* Narrative & Kakatiya Architectural Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#0a0600]">
              Where Ancient Architectural Mastery Meets 21st-Century Engineering
            </h3>
            <p className="text-stone-800 text-base leading-relaxed">
              Warangal was the majestic capital of the Kakatiya Dynasty (1083–1323 CE) — the empire that constructed the <strong>Thousand Pillar Temple</strong> and the <strong>Ramappa Temple</strong> (Telangana’s first UNESCO World Heritage Site), famed for its floating terracotta bricks and earthquake-absorbing sandbox foundations.
            </p>
            <p className="text-stone-800 text-base leading-relaxed">
              In 1959, when the Government of India sought a cradle to train the builders of a modern, sovereign nation, this sacred land was chosen. From building the bridges of independent India to authoring modern chip architectures and autonomous space robotics, NIT Warangal remains the gold standard of technical education.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 bg-[#c8560a]/10 border border-[#c8560a]/30 rounded text-xs font-mono-code text-[#c8560a] font-semibold">
                Telangana State Emblem features Kakatiya Kala Thoranam
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#e8d9bc] border-2 border-[#c8560a]/30 rounded-2xl p-6 sm:p-8 relative shadow-md">
            <div className="flex items-center gap-3 mb-4 text-[#c8560a]">
              <Landmark className="w-6 h-6" />
              <span className="font-cinzel font-bold text-lg text-[#0a0600]">The REC Warangal Charter</span>
            </div>
            <blockquote className="italic text-stone-800 font-serif text-sm sm:text-base leading-relaxed border-l-2 border-[#c8560a] pl-4 mb-4">
              “Here in Warangal, we build not merely towers of concrete, but the intellect and character of young men and women who will forge India’s industrial self-reliance.”
            </blockquote>
            <p className="font-mono-code text-xs uppercase tracking-wider text-stone-700">
              — Pandit Jawaharlal Nehru, October 10, 1959
            </p>
          </div>
        </div>

        {/* Interactive Era Timeline */}
        <div className="bg-[#140d04] text-[#f2e8d5] rounded-2xl p-6 sm:p-8 border border-[#e8a020]/30 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="font-dev text-sm text-[#e8a020]">समयक्रम · The Historical Journey</span>
              <h4 className="font-cinzel text-xl sm:text-2xl font-bold">Milestones of NIT Warangal</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {eras.map((era, index) => (
                <button
                  key={era.year}
                  onClick={() => setActiveEra(index)}
                  className={`px-3 py-1.5 rounded text-xs font-mono-code transition-all cursor-pointer ${
                    activeEra === index
                      ? 'bg-[#e8a020] text-black font-bold shadow-[0_0_15px_rgba(232,160,32,0.4)]'
                      : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {era.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="inline-block px-2.5 py-1 rounded bg-[#c8560a]/20 border border-[#c8560a]/50 text-[#e8a020] text-xs font-mono-code">
                {eras[activeEra].subtitle}
              </div>
              <h5 className="font-cinzel text-2xl font-bold text-[#f2e8d5]">
                {eras[activeEra].title}
              </h5>
              <p className="text-stone-300 text-sm leading-relaxed">
                {eras[activeEra].desc}
              </p>
            </div>
            <div className="md:col-span-4 bg-white/[0.03] border border-[#e8a020]/20 rounded-xl p-5 text-center flex flex-col justify-center items-center">
              <Sparkles className="w-6 h-6 text-[#e8a020] mb-2" />
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-stone-400">
                Key Achievement
              </span>
              <span className="font-cinzel text-lg font-bold text-[#e8a020] mt-1">
                {eras[activeEra].stat}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
