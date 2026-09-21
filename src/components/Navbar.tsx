import React from 'react';
import { Volume2, VolumeX, Sparkles, MapPin, Calendar } from 'lucide-react';

interface NavbarProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onOpenRsvp: () => void;
}

export default function Navbar({ isMusicPlaying, onToggleMusic, onOpenRsvp }: NavbarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/75 border-b border-[#d4af37]/25 transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand mark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <img 
            src="/lo.png" 
            alt="Logo" 
            className="h-6 sm:h-8 w-auto object-contain drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105"
          />
          <div>
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#fae596] group-hover:text-white transition-colors">
              BILLIONAIRE'S NIGHT
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] tracking-widest text-[#a88a44] uppercase font-sans-modern">
              • 14.11.2026
            </span>
          </div>
        </button>

        {/* Quick Nav Links & Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden md:flex items-center gap-5 text-xs font-cinzel tracking-wider text-[#e6d5b8]">
            <button
              onClick={() => scrollTo('event-details')}
              className="hover:text-[#ffd700] transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => scrollTo('invitation-video')}
              className="hover:text-[#ffd700] transition-colors"
            >
              Video
            </button>
            <button
              onClick={() => scrollTo('dress-code')}
              className="hover:text-[#ffd700] transition-colors"
            >
              Dress Code
            </button>
            <button
              onClick={() => scrollTo('location-section')}
              className="hover:text-[#ffd700] transition-colors"
            >
              Location
            </button>
          </nav>

          {/* Quick Sound Toggle Button */}
          <button
            onClick={onToggleMusic}
            aria-label={isMusicPlaying ? 'Mute background sound' : 'Play ambient music'}
            className="p-2 rounded-full bg-neutral-900 border border-[#d4af37]/40 hover:border-[#ffd700] text-[#f5d77f] transition-colors"
            title={isMusicPlaying ? 'Sound Playing (Click to mute)' : 'Sound Muted (Click to play)'}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-4 h-4 text-[#ffd700] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-neutral-400" />
            )}
          </button>

          {/* RSVP Button */}
          <button
            onClick={onOpenRsvp}
            id="nav-rsvp-btn"
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-[#120f04] font-cinzel text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#120f04]" />
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </header>
  );
}
