import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, X, GraduationCap, Download, FileText, Sparkles, User, Mail, Phone, MapPin } from 'lucide-react';

interface AdmissionsEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const AdmissionsEnquiryModal: React.FC<AdmissionsEnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stateQuota, setStateQuota] = useState('Other State (All India Quota)');
  const [program, setProgram] = useState('B.Tech — Electronics & Communication (ECE)');
  const [jeeRank, setJeeRank] = useState('');
  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (preselectedProgram) {
      setProgram(preselectedProgram);
    }
  }, [preselectedProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const randomId = `NITW-2025-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomId);
    setIsSubmitted(true);
  };

  const handleDownloadSlip = () => {
    const slipText = `
=====================================================
NATIONAL INSTITUTE OF TECHNOLOGY WARANGAL (NITW)
OFFICIAL ADMISSIONS COUNSELLING ACKNOWLEDGEMENT SLIP
=====================================================
Reference Ticket: ${ticketId}
Candidate Name: ${name}
Email Address: ${email}
Phone Number: ${phone || 'Not provided'}
Quota Category: ${stateQuota}
Program Preference: ${program}
JEE Main AIR: ${jeeRank || 'Pending declaration'}
Candidate Query: ${query || 'General prospective admissions inquiry'}
Date of Submission: ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}
Institute JoSAA Code: 219 (NIT Warangal)
Admissions Cell Helpline: +91 870 246 2000 | admissions@nitw.ac.in
Motto: योगः कर्मसु कौशलम् (Excellence in Action)
=====================================================
    `;
    const blob = new Blob([slipText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NITW_Admissions_Pass_${ticketId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#140d04] border border-[#e8a020]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#f2e8d5] max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#e8a020]/20 border border-[#e8a020] flex items-center justify-center text-[#e8a020]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-dev text-xs text-[#e8a020]">प्रवेश प्रकोष्ठ · Admissions Desk</span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  NIT Warangal Admissions 2025-26
                </h3>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-sans mb-6">
              Inquire about B.Tech, M.Tech, MCA, MBA, or Ph.D seat allotments, fee structures, and scholarship assistance. Our admissions counselors respond within 48 hours.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-code">
              <div>
                <label className="block uppercase text-stone-400 mb-1">Full Legal Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-black/50 border border-white/15 rounded pl-9 pr-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase text-stone-400 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full bg-black/50 border border-white/15 rounded pl-9 pr-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase text-stone-400 mb-1">Mobile Contact</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-black/50 border border-white/15 rounded pl-9 pr-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase text-stone-400 mb-1">State Quota</label>
                  <select
                    value={stateQuota}
                    onChange={(e) => setStateQuota(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded px-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none"
                  >
                    <option value="Home State (Telangana)">Home State (Telangana - HS)</option>
                    <option value="Other State (All India Quota)">Other State (All India - OS)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase text-stone-400 mb-1">JEE Main AIR (Optional)</label>
                  <input
                    type="text"
                    value={jeeRank}
                    onChange={(e) => setJeeRank(e.target.value)}
                    placeholder="e.g. 4520"
                    className="w-full bg-black/50 border border-white/15 rounded px-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase text-stone-400 mb-1">Program of Interest</label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full bg-black/50 border border-white/15 rounded px-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none"
                >
                  <option value="B.Tech — Electronics & Communication (ECE)">B.Tech — Electronics &amp; Communication (ECE)</option>
                  <option value="B.Tech — Computer Science & Engineering (CSE)">B.Tech — Computer Science &amp; Engineering (CSE)</option>
                  <option value="B.Tech — Electrical & Electronics (EEE)">B.Tech — Electrical &amp; Electronics (EEE)</option>
                  <option value="B.Tech — Mechanical Engineering (MECH)">B.Tech — Mechanical Engineering (MECH)</option>
                  <option value="B.Tech — Civil Engineering (CIVIL)">B.Tech — Civil Engineering (CIVIL)</option>
                  <option value="B.Tech — Chemical Engineering (CHEM)">B.Tech — Chemical Engineering (CHEM)</option>
                  <option value="B.Tech — Metallurgical & Materials (MME)">B.Tech — Metallurgical &amp; Materials (MME)</option>
                  <option value="B.Tech — Biotechnology">B.Tech — Biotechnology</option>
                  <option value="M.Tech (via GATE / CCMT)">M.Tech (via GATE / CCMT)</option>
                  <option value="MCA (via NIMCET)">MCA (via NIMCET)</option>
                  <option value="MBA (via CAT / MAT)">MBA (School of Management)</option>
                  <option value="Ph.D Doctoral Research">Ph.D Doctoral Research</option>
                </select>
              </div>

              <div>
                <label className="block uppercase text-stone-400 mb-1">Specific Query / Academic Interests</label>
                <textarea
                  rows={3}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about hostel allocations, scholarships, branch changes, or research facilities..."
                  className="w-full bg-black/50 border border-white/15 rounded px-3 py-2 text-sm text-white focus:border-[#e8a020] outline-none resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded bg-gradient-to-r from-[#c8560a] to-[#e8a020] text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Admissions Enquiry
              </button>
            </form>
          </div>
        ) : (
          /* Submission Success Ticket */
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono-code text-stone-400 uppercase">ENQUIRY CONFIRMED</span>
              <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                अभिनन्दन, {name.split(' ')[0]}!
              </h3>
              <p className="text-stone-300 text-sm mt-1 max-w-md mx-auto font-sans">
                Your admissions interest has been logged into the NIT Warangal prospective scholar registry.
              </p>
            </div>

            <div className="bg-black/60 border border-[#e8a020]/30 rounded-xl p-5 text-left font-mono-code text-xs space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-stone-400">Reference ID:</span>
                <span className="text-[#e8a020] font-bold">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Preferred Program:</span>
                <span className="text-stone-200">{program}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Registered Email:</span>
                <span className="text-stone-200">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">JoSAA Code:</span>
                <span className="text-stone-200">219 (NIT Warangal)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleDownloadSlip}
                className="flex-1 py-2.5 px-4 rounded bg-[#e8a020] text-black font-mono-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:brightness-110 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Slip
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded bg-white/10 text-white font-mono-code text-xs uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
