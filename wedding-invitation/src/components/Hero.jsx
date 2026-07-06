import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import { couple } from '../data/config';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sand via-cream to-cream px-6 text-center"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />

      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-body text-xs sm:text-sm tracking-widest2 uppercase text-olive/70"
      >
        Together with our families
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl text-emerald-dark leading-none"
      >
        {couple.brideName}
        <span className="mx-3 sm:mx-5 text-gold italic font-script">&</span>
        {couple.groomName}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <SectionDivider />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1 }}
        className="font-display text-xl sm:text-2xl text-olive-dark tracking-wide"
      >
        {couple.displayDate}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="mt-6 max-w-md font-body text-sm sm:text-base text-ink/70 leading-relaxed"
      >
        {couple.welcomeMessage}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.5 }}
        className="mt-10"
      >
        <button
          onClick={scrollToNext}
          className="group inline-flex items-center gap-2 rounded-full bg-emerald-dark text-cream px-7 py-3 font-body text-sm tracking-wide shadow-soft transition-transform hover:scale-105 active:scale-95"
        >
          Discover Our Story
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </button>
      </motion.div>

      <motion.button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-olive/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" />
          <circle cx="10" cy="9" r="2.5" fill="currentColor" />
        </svg>
      </motion.button>
    </section>
  );
}
