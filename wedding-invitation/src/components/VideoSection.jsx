import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { video } from '../data/config';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-cream to-sand"
    >
      <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          Watch Our Story
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          A Little Film About Us
        </h2>
        <SectionDivider />
      </Reveal>

      <Reveal direction="scale" className="max-w-3xl mx-auto">
        <div className="relative rounded-[28px] overflow-hidden shadow-soft aspect-video bg-emerald-dark">
          {playing && video.videoUrl ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <img
                src={video.posterUrl}
                alt="Wedding video preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/70 via-transparent to-transparent" />
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play wedding video"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <motion.span
                  className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gold-light/50"
                  animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full glass flex items-center justify-center shadow-soft"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" className="text-cream ml-1">
                    <path fill="currentColor" d="M8 5v14l11-7L8 5Z" />
                  </svg>
                </motion.span>
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/80 font-body text-xs tracking-widest2 uppercase">
                Tap to play
              </p>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
