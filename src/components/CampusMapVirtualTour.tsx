import React, { useState } from 'react';
import { CAMPUS_LANDMARKS } from '../data/nitwData';
import { CampusLandmark } from '../types';
import { MapPin, Navigation, Eye, CheckCircle, Sparkles, Building, Compass } from 'lucide-react';

export const CampusMapVirtualTour: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState<CampusLandmark>(CAMPUS_LANDMARKS[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Academic', 'Hostel', 'Innovation', 'Sports', 'Culture'];

  const filteredLandmarks = CAMPUS_LANDMARKS.filter((l) => {
    if (categoryFilter === 'All') return true;
    return l.category === categoryFilter;
  });

  return (
    <section id="campus" className="relative py-24 bg-[#0a0600] text-[#f2e8d5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#e8a020]/20 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ५ · परिसर जीवनम्</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-stone-400">
                Scene 05 / 256-Acre Stage
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              CAMPUS LIFE &amp; VIRTUAL EXPLORER
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-2xl font-sans">
              A vibrant residential community of 7,000+ scholars nestled inside 256 acres of green canopies, world-class laboratories, student startups, and Olympic-grade sports arenas.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#c8560a] text-white font-bold'
                    : 'bg-white/5 text-stone-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Campus Tour Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Schematic Map */}
          <div className="lg:col-span-7 bg-[#140d04] border border-[#e8a020]/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#e8a020]" />
                <span className="font-mono-code text-xs font-bold uppercase text-[#f2e8d5]">
                  256-Acre Interactive Schematic Map
                </span>
              </div>
              <span className="text-[10px] font-mono-code text-stone-400">
                CLICK A PIN TO EXPLORE
              </span>
            </div>

            {/* Stylized Topographic Map Canvas */}
            <div className="relative w-full h-[380px] sm:h-[420px] bg-[#0d0903] rounded-xl border border-white/10 overflow-hidden shadow-inner flex items-center justify-center">
              {/* Map grid lines & roads */}
              <div className="absolute inset-0 bg-[radial-gradient(#e8a020_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
              
              {/* Main Ring Road representation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <ellipse cx="50" cy="50" rx="42" ry="38" fill="none" stroke="rgba(232, 160, 32, 0.2)" strokeWidth="1.2" strokeDasharray="2 2" />
                <path d="M 50,8 L 50,92 M 8,50 L 92,50" stroke="rgba(200, 86, 10, 0.15)" strokeWidth="0.8" />
                <rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="rgba(232, 160, 32, 0.1)" strokeWidth="0.5" />
              </svg>

              {/* Watermark Logo in center */}
              <div className="w-32 h-32 bg-[#e8a020]/5 clip-tara pointer-events-none" />

              {/* Interactive Pins */}
              {CAMPUS_LANDMARKS.map((landmark) => {
                const isSelected = selectedLandmark.id === landmark.id;
                const isVisible = categoryFilter === 'All' || landmark.category === categoryFilter;

                if (!isVisible) return null;

                return (
                  <button
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark)}
                    style={{ left: `${landmark.coordinates.x}%`, top: `${landmark.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border shadow-lg ${
                        isSelected
                          ? 'bg-[#e8a020] border-white text-black shadow-[0_0_20px_rgba(232,160,32,0.8)]'
                          : 'bg-[#140d04] border-[#e8a020]/60 text-[#e8a020] hover:bg-[#c8560a]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                        </span>
                      )}
                    </div>
                    {/* Tooltip Label */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-mono-code whitespace-nowrap shadow-md pointer-events-none ${
                        isSelected
                          ? 'bg-[#e8a020] text-black font-bold'
                          : 'bg-black/90 text-stone-300 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity'
                      }`}
                    >
                      {landmark.name.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Landmark Quick Select Carousel */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {filteredLandmarks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLandmark(l)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono-code whitespace-nowrap transition-all cursor-pointer ${
                    selectedLandmark.id === l.id
                      ? 'bg-[#e8a020]/20 border-[#e8a020] text-[#e8a020] font-bold'
                      : 'bg-white/5 border-white/10 text-stone-400 hover:text-white'
                  }`}
                >
                  {l.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Landmark Spotlight Card */}
          <div className="lg:col-span-5 bg-[#140d04] border border-[#e8a020]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Image Preview with overlay */}
            <div className="relative h-60 w-full overflow-hidden group">
              <img
                src={selectedLandmark.image}
                alt={selectedLandmark.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d04] via-[#140d04]/40 to-transparent" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-[#e8a020]/40 text-xs font-mono-code text-[#e8a020]">
                {selectedLandmark.category}
              </div>

              {selectedLandmark.teluguName && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-xs font-sans text-stone-300">
                  {selectedLandmark.teluguName}
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4">
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#e8a020]">
                  NITW Historic Location
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedLandmark.name}
                </h3>
              </div>

              <p className="text-sm text-stone-300 font-sans leading-relaxed">
                {selectedLandmark.description}
              </p>

              {/* Feature bullets */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono-code uppercase tracking-wider text-stone-400">
                  Key Highlights &amp; Facilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedLandmark.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-stone-300 bg-white/[0.02] p-2 rounded border border-white/5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#e8a020] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-stone-400">
              <span>WARANGAL, TELANGANA</span>
              <span className="text-[#e8a020]">256-ACRE GREEN RESIDENTIAL CAMPUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
