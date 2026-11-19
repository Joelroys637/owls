import { useRef, useState } from 'react';
import { ArrowRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import headerVideo from '../asset/headervideo.mp4';

export type HeroQuickFilter = '2p' | 'family' | 'party' | 'strategy';

interface Hero3DStageProps {
  onOpenChat: () => void;
}

export function Hero3DStage({ onOpenChat }: Hero3DStageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  return (
    <section
      id="top"
      className="relative w-full min-h-[78vh] lg:min-h-[86vh] flex items-center overflow-hidden bg-[#111318] border-b border-[#E4E2DC]"
    >
      {/* Full-Bleed Cinematic 3D Background Video */}
      <video
        ref={videoRef}
        src={headerVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
      />

      {/* Balanced Architectural Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111318]/80 via-[#111318]/44 to-[#111318]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111318]/55 via-transparent to-[#111318]/20"
      />

      {/* Clean Minimalist Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl space-y-7">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#E5987F]" />
            <span className="font-mono-spec text-[11px] uppercase tracking-[0.16em] text-white/90 font-medium">
              Bengaluru Tabletop Atelier · Est. 2025
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.03] text-white drop-shadow-xs">
              Bring Everyone Back to the{' '}
              <span className="text-[#F08E70]">Table.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#E5E7EB] leading-relaxed max-w-xl">
              Original imported and independent board games curated for Indian homes. Discover by group size, playtime, or strategy depth — dispatched pan-India in 24–48 hours.
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              type="button"
              onClick={onOpenChat}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C84B31] hover:bg-[#DF5A3E] text-white font-semibold text-sm tracking-wide shadow-xl shadow-black/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Find Your Perfect Game</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/12 hover:bg-white text-white hover:text-[#111318] backdrop-blur-md border border-white/30 font-semibold text-sm transition-all"
            >
              Shop New Drops
            </a>
          </div>
        </div>
      </div>

      {/* Discreet Corner Video Controls */}
      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-8 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-[#111318]/45 hover:bg-[#111318]/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-[#111318]/45 hover:bg-[#111318]/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
}
