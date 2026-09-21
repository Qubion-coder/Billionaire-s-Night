import { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicControllerProps {
  isPlaying: boolean;
  onToggle: () => void;
  inline?: boolean;
}

// Sophisticated VIP Gala Chords (Key of D Major / B Minor with 9ths & Maj7ths)
const CHORD_FREQS = [
  // Bm9: B2, D3, F#3, A3, C#4
  [123.47, 146.83, 185.0, 220.0, 277.18],
  // Gmaj9: G2, D3, F#3, B3, D4
  [98.0, 146.83, 185.0, 246.94, 293.66],
  // Dmaj9: D2, A2, F#3, C#4, E4
  [73.42, 110.0, 185.0, 277.18, 329.63],
  // A7sus4 -> A: A2, E3, G3, B3, C#4
  [110.0, 164.81, 196.0, 246.94, 277.18],
];

export class LuxuryAudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;
  private chordIndex: number = 0;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    this.isRunning = true;
    this.playNextChord();

    // Loop chords every 3.2 seconds
    this.intervalId = window.setInterval(() => {
      if (!this.isRunning) return;
      this.playNextChord();
    }, 3200);
  }

  private playNextChord() {
    if (!this.ctx || !this.masterGain) return;
    const freqs = CHORD_FREQS[this.chordIndex];
    this.chordIndex = (this.chordIndex + 1) % CHORD_FREQS.length;

    const now = this.ctx.currentTime;

    // Soft warm pad & bell arpeggiation
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Sine + Triangle warmth
      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Delicate envelope
      const delay = idx * 0.12;
      noteGain.gain.setValueAtTime(0.0001, now + delay);
      noteGain.gain.linearRampToValueAtTime(0.06 / (idx + 1), now + delay + 0.4);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 3.0);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now + delay);
      osc.stop(now + delay + 3.1);
    });
  }

  public stop() {
    this.isRunning = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.3);
    }
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

// Global audio engine instance
export const luxuryAudio = new LuxuryAudioEngine();

export default function MusicController({ isPlaying, onToggle, inline = false }: MusicControllerProps) {
  if (inline) {
    return (
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-[#d4af37]/40 backdrop-blur-md shadow-lg shadow-black/40">
        <Music className={`w-4 h-4 ${isPlaying ? 'text-[#f5d77f] animate-pulse' : 'text-neutral-500'}`} />
        <span className="text-xs uppercase tracking-wider text-[#e6d5b8] font-medium">
          Background Music
        </span>
        <button
          onClick={onToggle}
          type="button"
          aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
          className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#d4af37] ${
            isPlaying ? 'bg-[#d4af37]' : 'bg-neutral-800'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full transition-transform duration-300 shadow-md ${
              isPlaying
                ? 'translate-x-7 bg-black'
                : 'translate-x-1 bg-neutral-400'
            }`}
          />
        </button>
        <span className={`text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded ${
          isPlaying ? 'text-[#fef3c7] bg-[#d4af37]/20 border border-[#d4af37]/30' : 'text-neutral-500 bg-neutral-900'
        }`}>
          {isPlaying ? 'ON' : 'OFF'}
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={onToggle}
      type="button"
      title={isPlaying ? 'Pause Background Music' : 'Play VIP Gala Music'}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/80 border border-[#d4af37]/50 backdrop-blur-md shadow-xl text-xs uppercase tracking-widest text-[#fae596] hover:border-[#f5d77f] hover:bg-neutral-900/90 transition-all duration-300 group"
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8c15a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37]"></span>
          </span>
          <Volume2 className="w-4 h-4 text-[#fae596] animate-pulse" />
          <span className="hidden sm:inline text-[#e6d5b8]">Gala Ambiance:</span>
          <span className="font-semibold text-[#ffd700]">ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-neutral-400 group-hover:text-[#fae596]" />
          <span className="hidden sm:inline text-neutral-400 group-hover:text-[#e6d5b8]">Music:</span>
          <span className="font-semibold text-neutral-400 group-hover:text-[#ffd700]">OFF</span>
        </>
      )}
    </button>
  );
}
