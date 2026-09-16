import React, { useState } from 'react';
import { NEWS_BULLETINS } from '../data/nitwData';
import { NewsItem } from '../types';
import { Search, BellRing, ArrowUpRight, Calendar, AlertCircle } from 'lucide-react';

export const NewsBulletins: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const categories = ['All', 'Admissions', 'Research', 'Placements', 'Campus'];

  const filteredNews = NEWS_BULLETINS.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="news" className="relative py-24 bg-[#0a0600] text-[#f2e8d5] overflow-hidden border-t border-[#e8a020]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#e8a020]/20 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ९ · समाचारः</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-stone-400">
                Official Circulars &amp; Press
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              NEWS &amp; PUBLIC BULLETINS
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circulars, JoSAA, grants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#140d04] border border-white/10 text-xs font-mono-code text-stone-200 placeholder:text-stone-500 focus:border-[#e8a020] outline-none"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#e8a020] text-black font-bold'
                  : 'bg-white/5 border border-white/10 text-stone-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {filteredNews.length === 0 ? (
            <div className="py-12 text-center text-stone-400 font-mono-code text-xs">
              No bulletins match your search criteria.
            </div>
          ) : (
            filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedNews(item)}
                className="py-5 px-3 sm:px-4 hover:bg-white/[0.02] transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start md:items-center gap-4">
                  <div className="flex-shrink-0 text-left">
                    <span className="block font-mono-code text-xs font-bold text-[#e8a020]">
                      {item.date}
                    </span>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono-code uppercase tracking-wider border border-[#c8560a]/50 text-[#c8560a] bg-[#c8560a]/10">
                      {item.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {item.isUrgent && (
                        <span className="flex-shrink-0 text-[10px] font-mono-code bg-red-950/80 border border-red-500/50 text-red-300 px-1.5 py-0.5 rounded uppercase font-bold flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" />
                          URGENT
                        </span>
                      )}
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#f2e8d5] group-hover:text-[#e8a020] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-400 font-sans line-clamp-1">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <span className="text-xs font-mono-code text-stone-400 group-hover:text-white transition-colors">
                    Read circular
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#e8a020] group-hover:text-black flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bulletin Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl bg-[#140d04] border border-[#e8a020]/40 rounded-2xl p-6 sm:p-8 text-[#f2e8d5] shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-xs font-mono-code text-[#e8a020]">
                {selectedNews.category} · {selectedNews.date}
              </span>
              <button
                onClick={() => setSelectedNews(null)}
                className="text-stone-400 hover:text-white text-xs font-mono-code"
              >
                [CLOSE]
              </button>
            </div>

            <h3 className="font-cinzel text-xl font-bold text-white mb-4">
              {selectedNews.title}
            </h3>

            <p className="text-sm text-stone-300 font-sans leading-relaxed mb-6">
              {selectedNews.summary}
            </p>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-4 py-2 bg-[#e8a020] text-black font-mono-code text-xs font-bold uppercase rounded"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
