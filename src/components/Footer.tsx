import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060400] text-[#f2e8d5] border-t-2 border-[#e8a020]/30 pt-16 pb-12 overflow-hidden">
      {/* Top ornamental stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8560a] via-[#e8a020] to-[#c8560a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#c8560a] to-[#e8a020] clip-tara shadow-lg" />
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                  NIT WARANGAL
                </span>
                <p className="font-dev text-xs text-[#e8a020]">
                  योगः कर्मसु कौशलम्
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed max-w-md">
              National Institute of Technology Warangal is an autonomous Institute of National Importance under the Ministry of Education, Government of India. Founded in 1959 as India’s first REC.
            </p>

            <div className="pt-2 text-xs font-mono-code text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e8a020] flex-shrink-0" />
                <span>P.O. R.E.C. Warangal, Telangana — 506 004, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e8a020] flex-shrink-0" />
                <span>+91 870 245 9191 / +91 870 246 2000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#e8a020] flex-shrink-0" />
                <span>director@nitw.ac.in · admissions@nitw.ac.in</span>
              </div>
            </div>
          </div>

          {/* Academic Branches */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#e8a020] font-bold">
              Academics
            </h4>
            <ul className="space-y-2 text-xs font-mono-code text-stone-400">
              <li><a href="#ece" className="hover:text-white transition-colors">Electronics &amp; Comm. (ECE)</a></li>
              <li><a href="#departments" className="hover:text-white transition-colors">Computer Science (CSE)</a></li>
              <li><a href="#departments" className="hover:text-white transition-colors">Electrical Engineering (EEE)</a></li>
              <li><a href="#departments" className="hover:text-white transition-colors">Mechanical Engineering (MECH)</a></li>
              <li><a href="#departments" className="hover:text-white transition-colors">Civil Engineering (CIVIL)</a></li>
              <li><a href="#departments" className="hover:text-white transition-colors">Chemical &amp; Materials</a></li>
            </ul>
          </div>

          {/* Quick Admissions & Placements */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#e8a020] font-bold">
              Admissions &amp; R&amp;D
            </h4>
            <ul className="space-y-2 text-xs font-mono-code text-stone-400">
              <li><a href="#predictor" className="hover:text-white transition-colors">JoSAA 2025 Rank Predictor</a></li>
              <li><a href="#predictor" className="hover:text-white transition-colors">CSAB Special Rounds</a></li>
              <li><a href="#placements" className="hover:text-white transition-colors">Phase-1 Placement Report</a></li>
              <li><a href="#ece" className="hover:text-white transition-colors">MeitY Semiconductor Hub</a></li>
              <li><a href="#placements" className="hover:text-white transition-colors">ISRO Space Tech Cell</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Public Tenders &amp; Circulars</a></li>
            </ul>
          </div>

          {/* Campus & Governance */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#e8a020] font-bold">
              Campus Life &amp; Statutory
            </h4>
            <ul className="space-y-2 text-xs font-mono-code text-stone-400">
              <li><a href="#campus" className="hover:text-white transition-colors">256-Acre Interactive Tour</a></li>
              <li><a href="#culture" className="hover:text-white transition-colors">Technozion Tech Fest</a></li>
              <li><a href="#culture" className="hover:text-white transition-colors">Spring Spree Cultural</a></li>
              <li><a href="#campus" className="hover:text-white transition-colors">Bheem Mega Hostel (1.8K)</a></li>
              <li><span className="text-stone-500">NIRF Ranked #21 Engineering</span></li>
              <li><span className="text-stone-500">Anti-Ragging Zero Tolerance</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Legacy Stripe */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-stone-500">
          <div className="flex items-center gap-2">
            <span>© 2025 National Institute of Technology, Warangal</span>
            <span>·</span>
            <span className="text-stone-400">Institute of National Importance</span>
          </div>
          <div className="flex items-center gap-3 text-[#e8a020]/80">
            <span className="clip-tara w-2.5 h-2.5 bg-[#e8a020] inline-block" />
            <span className="font-dev text-stone-300">योगः कर्मसु कौशलम्</span>
            <span className="clip-tara w-2.5 h-2.5 bg-[#e8a020] inline-block" />
            <span>EST. 1959</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
