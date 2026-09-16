import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const oscHarmonicRef = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (!isPlaying) {
      // Create subtle atmospheric warm drone (Tanpura/Temple meditation chord)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base fundamental note: D2 (73.42 Hz) - classic grounding drone
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(73.42, ctx.currentTime);

      // Warm overtone: A2 (110 Hz)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110.0, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);

      osc.start();
      osc2.start();
      oscRef.current = osc;
      oscHarmonicRef.current = osc2;
      setIsPlaying(true);
    } else {
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        setTimeout(() => {
          try {
            oscRef.current?.stop();
            oscHarmonicRef.current?.stop();
            oscRef.current?.disconnect();
            oscHarmonicRef.current?.disconnect();
          } catch {
            // safely ignore
          }
          setIsPlaying(false);
        }, 1200);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="sound-ambience-toggle"
      onClick={toggleSound}
      title={isPlaying ? 'Mute Sacred Ambient Sound' : 'Play Kakatiya Sacred Ambience (Harmonic Drone)'}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-mono-code tracking-wider uppercase backdrop-blur-md ${
        isPlaying
          ? 'border-[#e8a020] bg-[#e8a020]/15 text-[#e8a020] shadow-[0_0_15px_rgba(232,160,32,0.3)]'
          : 'border-white/10 bg-black/40 text-stone-400 hover:text-[#f2e8d5] hover:border-[#e8a020]/40'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#e8a020]" />
          <span className="hidden sm:inline">Ambience: ON</span>
          <span className="flex gap-0.5 items-end h-3">
            <span className="w-0.5 bg-[#e8a020] h-2 animate-bounce" />
            <span className="w-0.5 bg-[#e8a020] h-3 animate-bounce [animation-delay:150ms]" />
            <span className="w-0.5 bg-[#e8a020] h-1.5 animate-bounce [animation-delay:300ms]" />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-70" />
          <span className="hidden sm:inline">Ambience</span>
        </>
      )}
    </button>
  );
};
