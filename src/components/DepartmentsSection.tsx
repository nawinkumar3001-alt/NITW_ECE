import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/nitwData';
import { Department } from '../types';
import { ArrowRight, Sparkles, Building2, Users, Briefcase, GraduationCap, X, CheckCircle2 } from 'lucide-react';

interface DepartmentsSectionProps {
  onSelectDepartmentForEnquiry: (deptCode: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ onSelectDepartmentForEnquiry }) => {
  const [filter, setFilter] = useState<'all' | 'circuit' | 'core' | 'sciences'>('all');
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const filteredDepts = DEPARTMENTS.filter((dept) => {
    if (filter === 'all') return true;
    return dept.category === filter;
  });

  return (
    <section id="departments" className="relative py-24 bg-[#0a0600] text-[#f2e8d5] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[800px] h-[350px] bg-[#e8a020]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e8a020]/20 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ३ · शाखाः</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-stone-400">
                Scene 03 / Departments
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              CHOOSE YOUR ENGINEERING PATH
            </h2>
            <p className="text-sm text-stone-400 max-w-2xl font-sans">
              From semiconductor physics to artificial intelligence and sustainable megastructures, explore the academic departments shaping the technology leaders of tomorrow.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Branches' },
              { id: 'circuit', label: 'Circuit & Computing' },
              { id: 'core', label: 'Core Engineering' },
              { id: 'sciences', label: 'Applied Sciences' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as typeof filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-[#e8a020] text-black font-bold shadow-[0_0_15px_rgba(232,160,32,0.4)]'
                    : 'bg-white/5 border border-white/10 text-stone-400 hover:text-white hover:border-[#e8a020]/40'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDepts.map((dept) => {
            const isFeatured = dept.code === 'ECE';

            return (
              <div
                key={dept.code}
                onClick={() => setSelectedDept(dept)}
                className={`relative group bg-[#140d04]/80 border rounded-xl p-6 flex flex-col justify-between min-h-[260px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'border-[#e8a020]/60 shadow-[0_0_25px_rgba(232,160,32,0.15)] bg-gradient-to-b from-[#e8a020]/10 to-[#140d04]'
                    : 'border-white/10 hover:border-[#e8a020]/40 hover:bg-[#1c1206]'
                }`}
              >
                {/* Sanskrit watermark symbol in top corner */}
                <span className="absolute top-2 right-4 font-dev text-5xl text-[#e8a020]/10 select-none pointer-events-none group-hover:text-[#e8a020]/25 transition-colors duration-300">
                  {dept.skt.split(' ')[0]}
                </span>

                {/* Top dynamic glowing bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e8a020] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-code text-sm font-bold tracking-widest text-[#e8a020] flex items-center gap-1.5">
                      {dept.code}
                      {isFeatured && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-[#e8a020] text-black rounded font-black">
                          FEATURED
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] font-mono-code text-stone-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      Est. {dept.established}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#f2e8d5] leading-snug group-hover:text-[#e8a020] transition-colors">
                    {dept.name}
                  </h3>

                  <p className="mt-2 text-xs font-mono-code text-stone-400 line-clamp-2 leading-relaxed">
                    {dept.tag}
                  </p>
                </div>

                {/* Footer Metrics & CTA */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono-code text-stone-500 uppercase tracking-wider">
                      Avg Package
                    </span>
                    <span className="font-cinzel font-bold text-sm text-[#e8a020]">
                      {dept.avgPackage}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="block text-[10px] font-mono-code text-stone-500 uppercase tracking-wider">
                      Seats
                    </span>
                    <span className="font-mono-code text-xs text-stone-300">
                      {dept.seats} seats
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#e8a020] group-hover:text-black flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Department Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#140d04] border border-[#e8a020]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#f2e8d5] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c8560a] to-[#e8a020] flex items-center justify-center font-cinzel text-xl font-bold text-black shadow-lg">
                {selectedDept.code}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-dev text-base text-[#e8a020] font-semibold">{selectedDept.skt}</span>
                  <span className="text-xs font-mono-code text-stone-400">· Est. {selectedDept.established}</span>
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white mt-0.5">
                  {selectedDept.name}
                </h3>
                <p className="text-xs font-mono-code text-[#e8a020] mt-1">{selectedDept.tag}</p>
              </div>
            </div>

            {/* Placement Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-3 p-3.5 bg-black/40 border border-[#e8a020]/20 rounded-xl mb-6 text-center">
              <div>
                <span className="block text-[10px] font-mono-code text-stone-400 uppercase">Average CTC</span>
                <span className="font-cinzel text-lg font-bold text-[#e8a020]">{selectedDept.avgPackage}</span>
              </div>
              <div className="border-x border-white/10">
                <span className="block text-[10px] font-mono-code text-stone-400 uppercase">Highest CTC</span>
                <span className="font-cinzel text-lg font-bold text-white">{selectedDept.highestPackage}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono-code text-stone-400 uppercase">Intake Capacity</span>
                <span className="font-cinzel text-lg font-bold text-stone-300">{selectedDept.seats} Seats</span>
              </div>
            </div>

            {/* Narrative Overview */}
            <p className="text-stone-300 text-sm leading-relaxed mb-6 font-sans">
              {selectedDept.description}
            </p>

            {/* Curriculum Highlights */}
            <div className="mb-6">
              <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#e8a020] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Key Specialization & Curricular Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDept.curriculumHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-300 bg-white/[0.02] p-2.5 rounded border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8a020] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Labs & Top Recruiters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h5 className="font-mono-code text-xs uppercase tracking-wider text-stone-400 mb-2">
                  Research Centers & Labs
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {selectedDept.flagshipLabs.map((lab, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-[#e8a020]">◈</span> {lab}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h5 className="font-mono-code text-xs uppercase tracking-wider text-stone-400 mb-2">
                  Key Visiting Recruiters
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDept.topRecruiters.map((rec, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[11px] font-mono-code text-stone-300">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono-code text-stone-500">
                Admission via JEE Main & JoSAA / CSAB Counselling
              </span>
              <button
                onClick={() => {
                  const code = selectedDept.code;
                  setSelectedDept(null);
                  onSelectDepartmentForEnquiry(code);
                }}
                className="px-5 py-2.5 rounded bg-gradient-to-r from-[#c8560a] to-[#e8a020] text-black font-mono-code text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-lg"
              >
                Inquire for {selectedDept.code}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
