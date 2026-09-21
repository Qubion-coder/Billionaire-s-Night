import React, { useState } from 'react';
import { Heart, Share2, Copy, Check, ArrowUp, Sparkles, MessageCircle } from 'lucide-react';
import { CrownFlourish } from './OrnamentalDivider';

interface ClosingSectionProps {
  onScrollToTop: () => void;
}

export default function ClosingSection({ onScrollToTop }: ClosingSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "👑 You are cordially invited to BILLIONAIRE'S NIGHT 2026 - Annual Staff Get Together of North Western II Region!\n\n📅 Date: 14 November 2026 (6:00 PM onwards)\n📍 Venue: Lotus Ballroom, Golden Cassandra, Kurunegala\n\nOpen your VIP digital invitation here:\n" +
        window.location.href
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <footer className="relative py-16 px-4 max-w-4xl mx-auto text-center z-10 border-t border-[#d4af37]/20">
      {/* Background Soft Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-36 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* QR Code Section (As in reference image) */}
      <div className="max-w-xs mx-auto mb-14 p-6 rounded-2xl bg-dark-card border border-[#d4af37]/40 shadow-xl flex flex-col items-center">
        <p className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-4">
          SCAN TO OPEN INVITATION
        </p>

        {/* High Precision QR Code Display */}
        <div className="relative p-3 bg-white rounded-xl shadow-lg border-2 border-[#d4af37]">
          <svg viewBox="0 0 100 100" className="w-36 h-36">
            {/* Corner position markers */}
            <rect x="5" y="5" width="26" height="26" fill="black" />
            <rect x="8" y="8" width="20" height="20" fill="white" />
            <rect x="12" y="12" width="12" height="12" fill="black" />

            <rect x="69" y="5" width="26" height="26" fill="black" />
            <rect x="72" y="8" width="20" height="20" fill="white" />
            <rect x="76" y="12" width="12" height="12" fill="black" />

            <rect x="5" y="69" width="26" height="26" fill="black" />
            <rect x="8" y="72" width="20" height="20" fill="white" />
            <rect x="12" y="76" width="12" height="12" fill="black" />

            {/* Pattern data dots simulating invitation QR code */}
            <rect x="36" y="8" width="5" height="5" fill="black" />
            <rect x="45" y="12" width="5" height="5" fill="black" />
            <rect x="55" y="6" width="5" height="5" fill="black" />
            <rect x="38" y="24" width="5" height="5" fill="black" />
            <rect x="48" y="22" width="5" height="5" fill="black" />

            <rect x="8" y="38" width="5" height="5" fill="black" />
            <rect x="18" y="44" width="5" height="5" fill="black" />
            <rect x="25" y="52" width="5" height="5" fill="black" />
            <rect x="12" y="58" width="5" height="5" fill="black" />

            <rect x="38" y="38" width="7" height="7" fill="#8A6318" />
            <rect x="50" y="40" width="5" height="5" fill="black" />
            <rect x="60" y="38" width="6" height="6" fill="black" />
            <rect x="44" y="52" width="6" height="6" fill="black" />
            <rect x="56" y="50" width="7" height="7" fill="#8A6318" />

            <rect x="69" y="42" width="5" height="5" fill="black" />
            <rect x="78" y="48" width="5" height="5" fill="black" />
            <rect x="86" y="38" width="5" height="5" fill="black" />
            <rect x="72" y="58" width="5" height="5" fill="black" />
            <rect x="88" y="54" width="5" height="5" fill="black" />

            <rect x="38" y="70" width="5" height="5" fill="black" />
            <rect x="48" y="74" width="5" height="5" fill="black" />
            <rect x="58" y="68" width="5" height="5" fill="black" />
            <rect x="42" y="84" width="5" height="5" fill="black" />
            <rect x="54" y="86" width="5" height="5" fill="black" />
            <rect x="64" y="80" width="5" height="5" fill="black" />

            <rect x="72" y="72" width="5" height="5" fill="black" />
            <rect x="84" y="76" width="5" height="5" fill="black" />
            <rect x="76" y="86" width="5" height="5" fill="black" />
            <rect x="88" y="88" width="5" height="5" fill="black" />

            {/* Subtle center golden crown */}
            <circle cx="50" cy="50" r="10" fill="#FFE898" />
            <polygon points="46,53 50,47 54,53" fill="#8A6318" />
          </svg>
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-2 mt-4 w-full">
          <button
            onClick={handleCopyLink}
            className="flex-1 py-2 px-3 rounded-xl bg-neutral-900 border border-[#d4af37]/30 hover:border-[#ffd700] text-[11px] font-cinzel text-[#fae596] flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
          <button
            onClick={handleShareWhatsApp}
            className="py-2 px-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-[11px] font-sans-modern text-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
            title="Share via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Main Closing Calligraphy Statement */}
      <div className="my-8">
        <CrownFlourish className="w-8 h-8 mx-auto mb-3 opacity-80" />

        <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.18em] text-gold-shimmer uppercase mb-2">
          WE LOOK FORWARD
          <br />
          TO CELEBRATING WITH YOU!
        </h3>

        {/* Script subtitle matching reference "We look forward to celebrating with you!" */}
        <p className="font-script text-3xl sm:text-4xl text-[#fae596] my-2 select-none">
          We look forward to celebrating with you!
        </p>

        {/* Gold ornamental lines and small gold heart detail */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
          <div className="flex items-center gap-2 text-[#d4af37]">
            <Heart className="w-4 h-4 fill-[#d4af37] text-[#d4af37] animate-pulse" />
          </div>
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
        </div>

        {/* Date numeral */}
        <p className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.35em] text-gold-gradient">
          14 • 11 • 2026
        </p>
      </div>

      {/* Brand & Region Signature */}
      <div className="pt-8 border-t border-[#d4af37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-modern text-neutral-500">
        <p>
          LOLC Finance • North Western II Region • Annual Staff Get Together 2026
        </p>

        <button
          onClick={onScrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-[#d4af37]/30 text-neutral-400 hover:text-[#fae596] hover:border-[#ffd700] transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="text-[11px] font-cinzel">Back to Top</span>
        </button>
      </div>
    </footer>
  );
}
