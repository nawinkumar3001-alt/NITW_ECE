import React, { useState } from 'react';
import { Flame, Music, Code, Wrench, Camera, Palette, Trophy, Users, Sparkles } from 'lucide-react';

export const CampusCulture: React.FC = () => {
  const [activeFestival, setActiveFestival] = useState<'technozion' | 'springspree'>('technozion');

  const clubs = [
    { name: 'Innovation Garage (IG)', domain: 'Technical & Startups', desc: '24/7 student-run makerspace with CNCs, 3D printers, and seed investment network.', icon: Wrench },
    { name: 'WSDC (Web Development)', domain: 'Computing', desc: 'Builds NITW central portals, student mobile apps, and digital campus infrastructure.', icon: Code },
    { name: 'SAE Collegiate Club', domain: 'Automotive', desc: 'Designs and races custom Formula-style internal combustion and electric vehicles.', icon: Trophy },
    { name: 'Music Club (Chords)', domain: 'Cultural', desc: 'Telangana & national battle of bands champions; produces original fusion albums.', icon: Music },
    { name: 'Photography Club', domain: 'Media', desc: 'Captures the 256-acre campus flora, avian sanctuary, and grand fest pro-nights.', icon: Camera },
    { name: 'Quiz Club (QC)', domain: 'Literary', desc: 'Ranked among top collegiate quiz circuits across South India with national trophies.', icon: Sparkles },
  ];

  return (
    <section id="culture" className="relative py-24 bg-[#140d04] text-[#f2e8d5] overflow-hidden border-t border-[#e8a020]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#e8a020]/20 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ८ · उत्सवः</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#c8560a]">
                Student Life &amp; Festivals
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              CULTURE, FESTIVALS &amp; CLUBS
            </h2>
            <p className="text-stone-300 text-sm mt-1 max-w-2xl font-sans">
              Beyond equations and silicon: where the stage comes alive through national festivals and student-led societies.
            </p>
          </div>

          <div className="flex bg-black/60 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveFestival('technozion')}
              className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFestival === 'technozion'
                  ? 'bg-[#c8560a] text-white font-bold shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Technozion</span>
            </button>
            <button
              onClick={() => setActiveFestival('springspree')}
              className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFestival === 'springspree'
                  ? 'bg-[#e8a020] text-black font-bold shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span>Spring Spree</span>
            </button>
          </div>
        </div>

        {/* Festival Showcase Banner */}
        <div className="bg-black/50 border border-[#e8a020]/30 rounded-2xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              {activeFestival === 'technozion' ? (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8560a]/20 border border-[#c8560a]/50 text-xs font-mono-code text-[#e8a020]">
                    SOUTH INDIA’S 2ND LARGEST TECHNICAL FESTIVAL
                  </div>
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
                    TECHNOZION 2025
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                    With an annual footprint of 8,500+ participants from 120+ collegiate institutions, Technozion features Robowars in an armored arena, autonomous drone navigation, 36-hour national hackathons, and keynotes by distinguished scientists from ISRO, BARC, and global AI laboratories.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono-code text-stone-300">
                    <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">₹15+ Lakhs Prize Pool</span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">50+ Competitions</span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">Hands-on Workshops</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8a020]/20 border border-[#e8a020]/50 text-xs font-mono-code text-[#e8a020]">
                    ONE OF INDIA’S OLDEST CULTURAL FESTIVALS
                  </div>
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
                    SPRING SPREE 2025
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                    Inaugurated over four decades ago, Spring Spree transforms the Warangal campus into an explosion of music, classical art, battle of the bands, choreography battles, and high-energy pro-nights featuring India’s premier vocalists and indie musicians.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono-code text-stone-300">
                    <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">Star Pro-Nights</span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">All-India Band Battles</span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">Dramatics &amp; Choreonite</span>
                  </div>
                </>
              )}
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-[#1c1206] to-[#0a0600] border border-[#e8a020]/30 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#e8a020]/20 border border-[#e8a020] flex items-center justify-center mx-auto text-[#e8a020]">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-white">40+ Student Clubs</h4>
              <p className="text-xs text-stone-400 font-sans">
                Active clubs across tech, arts, gaming, aero, and social outreach under the Dean of Student Affairs.
              </p>
            </div>
          </div>
        </div>

        {/* Student Clubs Grid */}
        <div>
          <h3 className="font-cinzel text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#e8a020]" />
            Active Student Societies &amp; Centers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => {
              const Icon = club.icon;
              return (
                <div
                  key={i}
                  className="bg-black/40 border border-white/10 rounded-xl p-5 hover:border-[#e8a020]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#e8a020]/10 border border-[#e8a020]/30 flex items-center justify-center text-[#e8a020] group-hover:bg-[#e8a020] group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-[#e8a020] transition-colors">
                        {club.name}
                      </h4>
                      <span className="text-[10px] font-mono-code text-[#c8560a]">
                        {club.domain}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    {club.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
