import { AnimatePresence, motion } from 'framer-motion';
import useCountdown from '../hooks/useCountdown';
import { couple } from '../data/config';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';

function FlipUnit({ value, label }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[70px] h-[86px] sm:w-[92px] sm:h-[110px] rounded-2xl bg-gradient-to-b from-emerald to-emerald-dark shadow-soft overflow-hidden border border-gold/30">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gold/20" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={padded}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center font-display font-numeral text-3xl sm:text-4xl text-gold-light"
            style={{ textShadow: '0 0 18px rgba(201,164,85,0.5)' }}
          >
            {padded}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 font-body text-[10px] sm:text-xs tracking-widest2 uppercase text-olive/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(couple.weddingDate);

  return (
    <section
      id="countdown"
      className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-cream via-sand to-cream overflow-hidden"
    >
      <Reveal direction="fade" className="relative max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          The Final Countdown
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          Until We Say &ldquo;I Do&rdquo;
        </h2>
        <SectionDivider />
        <p className="max-w-md mx-auto font-body text-sm text-ink/60 mb-12">
          Time is standing still as we eagerly await the moment our forever begins.
        </p>

        <div className="flex items-start justify-center gap-3 sm:gap-6 flex-wrap">
          <FlipUnit value={days} label="Days" />
          <FlipUnit value={hours} label="Hours" />
          <FlipUnit value={minutes} label="Minutes" />
          <FlipUnit value={seconds} label="Seconds" />
        </div>
      </Reveal>
    </section>
  );
}
