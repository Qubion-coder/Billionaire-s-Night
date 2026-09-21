import React from 'react';
import { Sparkles, Phone, MessageSquare, ChevronRight, UserCheck } from 'lucide-react';

interface RsvpSectionProps {
  onOpenRsvp: () => void;
}

export default function RsvpSection({ onOpenRsvp }: RsvpSectionProps) {
  const coordinatorPhone = '0773596407';
  const displayPhone = '077-3596407';
  const coordinatorName = 'D. Weerasinghe';

  return (
    <section id="rsvp-section" className="relative py-16 px-4 max-w-4xl mx-auto text-center z-10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Luxury RSVP Card Container */}
      <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#161410]/95 via-[#0e0d0b]/95 to-[#070708]/98 border border-[#d4af37]/60 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Subtle decorative gold line top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#f5d77f]" />
          <span className="text-[11px] font-cinzel font-bold tracking-[0.25em] text-[#fae596] uppercase">
            Exclusive Invitation
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-shimmer tracking-wide mb-3 uppercase">
          Reserve Your Place
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-[#e6d5b8] font-sans-modern max-w-lg mx-auto mb-8 leading-relaxed">
          Kindly confirm your attendance and join us for an unforgettable evening.
        </p>

        {/* Large Premium Gold Pill Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={onOpenRsvp}
            id="rsvp-main-cta-btn"
            type="button"
            className="w-full sm:w-auto px-10 sm:px-14 py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-[#120f04] font-cinzel text-sm sm:text-base font-black tracking-[0.22em] uppercase transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 gold-button-glow flex items-center justify-center gap-3 group"
          >
            <span>CLICK HERE TO RSVP</span>
            <div className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ChevronRight className="w-4 h-4 text-[#120f04] stroke-[3]" />
            </div>
          </button>
        </div>

        {/* Direct Coordinator Contact Card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 rounded-2xl bg-black/60 border border-[#d4af37]/30 backdrop-blur-md">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2a2414] to-[#120f06] border border-[#d4af37]/50 flex items-center justify-center text-[#f5d77f]">
              <Phone className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <p className="text-[10px] font-cinzel tracking-widest text-[#d4af37] uppercase font-bold">
                RSVP INQUIRIES
              </p>
              <p className="font-cinzel text-sm font-bold text-white">
                {coordinatorName}
              </p>
              <p className="text-xs text-[#fae596] font-mono">
                {displayPhone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${coordinatorPhone}`}
              className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#d4af37]/40 hover:border-[#ffd700] text-xs font-cinzel text-[#fae596] flex items-center gap-1.5 transition-colors"
              title="Call Coordinator"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/94773596407?text=${encodeURIComponent(
                "Hello, I would like to inquire about Billionaire's Night 2026."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366]/30 text-xs font-sans-modern text-emerald-300 flex items-center gap-1.5 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
