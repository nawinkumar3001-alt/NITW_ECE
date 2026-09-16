import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Radio, Zap, Award, Layers, Terminal, Sparkles, Sliders } from 'lucide-react';

interface ECESpotlightProps {
  onOpenEnquiry: (program?: string) => void;
}

export const ECESpotlight: React.FC<ECESpotlightProps> = ({ onOpenEnquiry }) => {
  const [waveType, setWaveType] = useState<'sine' | 'pulse' | '5g'>('5g');
  const [frequency, setFrequency] = useState<number>(3.5);
  const [amplitude, setAmplitude] = useState<number>(40);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Interactive Oscilloscope Canvas
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const renderWave = () => {
      const W = (cv.width = cv.offsetWidth);
      const H = (cv.height = cv.offsetHeight);
      ctx.clearRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = 'rgba(232, 160, 32, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = 'rgba(232, 160, 32, 0.25)';
      ctx.beginPath();
      ctx.moveTo(0, H / 2);
      ctx.lineTo(W, H / 2);
      ctx.stroke();

      // Main signal trace
      ctx.save();
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#e8a020';
      ctx.strokeStyle = '#e8a020';
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      t += 0.04;
      for (let x = 0; x < W; x += 2) {
        let y = H / 2;
        const normalizedX = (x / W) * Math.PI * 4 * (frequency / 2);

        if (waveType === 'sine') {
          y += Math.sin(normalizedX - t * 3) * amplitude;
        } else if (waveType === 'pulse') {
          // Clock pulse
          const sinVal = Math.sin(normalizedX - t * 3);
          y += (sinVal > 0 ? 1 : -1) * amplitude;
        } else if (waveType === '5g') {
          // 5G OFDM high-frequency carrier with modulated envelope
          const carrier = Math.sin(normalizedX * 4 - t * 8);
          const envelope = Math.sin(normalizedX - t * 1.5);
          y += carrier * envelope * amplitude;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => cancelAnimationFrame(animId);
  }, [waveType, frequency, amplitude]);

  const eceLabs = [
    'MeitY Semiconductor & VLSI Center',
    'Indo-US 5G / 6G Wireless Testbed',
    'RF Microwave & Anechoic Chamber',
    'DSP & Edge AI Neuromorphic Lab',
    'Photonic Integrated Circuits Lab',
    'Embedded Automotive Systems Center',
  ];

  const flagshipRecruiters = [
    'Qualcomm',
    'Nvidia',
    'Texas Instruments',
    'Apple',
    'Intel',
    'AMD',
    'Samsung R&D',
    'ISRO',
    'Synopsys',
    'Broadcom',
  ];

  return (
    <section id="ece" className="relative py-24 bg-[#140d04] text-[#f2e8d5] overflow-hidden border-t border-[#e8a020]/30">
      {/* Circuit traces in background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e8a020_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#e8a020]/20 mb-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-dev text-2xl font-bold text-[#e8a020]">अध्याय ४ · विशेष शाखा</span>
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#c8560a]">
                विद्युत् संचार · Featured Center of Excellence
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f2e8d5]">
              ELECTRONICS &amp; COMMUNICATION ENGINEERING
            </h2>
            <p className="text-stone-300 text-sm mt-1 max-w-2xl font-sans">
              Where signals become silicon stories — leading India’s semiconductor self-reliance with MeitY fabrication hubs, 5G testbeds, and top global chipmaker placements.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('B.Tech — ECE')}
            className="px-4 py-2 bg-[#e8a020]/10 border border-[#e8a020] text-[#e8a020] font-mono-code text-xs uppercase tracking-wider rounded hover:bg-[#e8a020] hover:text-black transition-all cursor-pointer font-bold shadow-lg"
          >
            Apply for ECE 2025
          </button>
        </div>

        {/* 2-Column Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Sanskrit Hero & Research Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-black/40 border border-[#e8a020]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <div className="font-dev text-4xl sm:text-5xl font-bold text-[#e8a020] mb-2 tracking-wide">
                विद्युत् संचार
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3">
                From GaN Nanowires to Deep Space Telemetry
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6 font-sans">
                The Department of Electronics and Communication Engineering at NITW is recognized as a national pioneer. Backed by central government sanctions including the India Semiconductor Mission (ISM) and Department of Telecommunications (DoT), the department trains engineers directly on Cadence, Synopsys, and Xilinx industry-standard EDA suites.
              </p>

              {/* Research Chips */}
              <div>
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#e8a020]" />
                  Flagship Research Labs &amp; Centers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {eceLabs.map((lab, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-[#e8a020]/30 text-xs font-mono-code text-stone-200 hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
                    >
                      {lab}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Placement Metric Banner */}
            <div className="grid grid-cols-3 gap-1 bg-[#e8a020]/20 p-1 rounded-xl border border-[#e8a020]/40 text-center">
              <div className="bg-[#140d04] p-4 rounded-lg">
                <span className="block text-[10px] font-mono-code text-stone-400 uppercase">Avg CTC</span>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#e8a020]">₹17.8 LPA</span>
              </div>
              <div className="bg-[#140d04] p-4 rounded-lg">
                <span className="block text-[10px] font-mono-code text-stone-400 uppercase">Highest CTC</span>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-white">₹88 LPA</span>
              </div>
              <div className="bg-[#140d04] p-4 rounded-lg">
                <span className="block text-[10px] font-mono-code text-stone-400 uppercase">Placement %</span>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#e8a020]">98%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Signal Oscilloscope & Silicon Wafer Controls */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-black/60 border border-[#e8a020]/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#e8a020] animate-pulse" />
                  <span className="font-mono-code text-xs font-bold uppercase text-[#e8a020]">
                    Real-time RF Signal &amp; VLSI Waveform Synthesizer
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-stone-400 bg-white/5 px-2 py-0.5 rounded">
                  OSCILLOSCOPE 100MHz
                </span>
              </div>

              {/* Canvas Waveform */}
              <div className="relative w-full h-48 bg-[#0a0600] rounded-xl overflow-hidden border border-[#e8a020]/30 shadow-inner mb-5">
                <canvas ref={canvasRef} className="w-full h-full" />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono-code text-[#e8a020]/70">
                  SIGNAL: {waveType.toUpperCase()} | FREQ: {frequency} GHz | VPP: {amplitude * 2} mV
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="space-y-4 text-xs font-mono-code">
                {/* Waveform Selector */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-stone-400 uppercase">Signal Mode:</span>
                  <div className="flex gap-1.5">
                    {[
                      { id: '5g', label: '5G OFDM' },
                      { id: 'sine', label: 'RF Sine' },
                      { id: 'pulse', label: 'Clock Pulse' },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => setWaveType(mode.id as typeof waveType)}
                        className={`px-2.5 py-1 rounded text-[11px] uppercase transition-all cursor-pointer ${
                          waveType === mode.id
                            ? 'bg-[#e8a020] text-black font-bold'
                            : 'bg-white/5 text-stone-400 hover:text-white'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frequency Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-stone-400">
                    <span>Carrier Frequency:</span>
                    <span className="text-[#e8a020]">{frequency} GHz</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.5"
                    value={frequency}
                    onChange={(e) => setFrequency(parseFloat(e.target.value))}
                    className="w-full accent-[#e8a020] cursor-pointer"
                  />
                </div>

                {/* Amplitude Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-stone-400">
                    <span>Gain / Signal Amplitude:</span>
                    <span className="text-[#e8a020]">{amplitude} mV</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    value={amplitude}
                    onChange={(e) => setAmplitude(parseInt(e.target.value, 10))}
                    className="w-full accent-[#e8a020] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Recruiter Marquee Bar */}
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
              <span className="block text-[10px] font-mono-code uppercase tracking-wider text-stone-400 mb-2">
                Flagship ECE Silicon &amp; Telecom Recruiters
              </span>
              <div className="flex flex-wrap gap-2">
                {flagshipRecruiters.map((rec, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono-code text-stone-200"
                  >
                    {rec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
