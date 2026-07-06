import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { couple } from '../data/config';
import Petals from './Petals';

// The signature opening moment: a wax-sealed envelope the guest taps
// to break open, which then folds away to reveal the invitation.
export default function EntryGate({ onEnter }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => onEnter(), 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="entry-gate"
        exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.2 } }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-emerald via-emerald-dark to-[#16241b] overflow-hidden"
      >
        <Petals density={10} variant="dark" />

        <div className="absolute inset-0 bg-radial-glow" />

        <div className="relative flex flex-col items-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold-light/80 font-body text-[11px] tracking-widest2 uppercase mb-6"
          >
            You are cordially invited
          </motion.p>

          {/* Envelope */}
          <motion.button
            onClick={handleOpen}
            disabled={opening}
            aria-label="Open invitation"
            className="relative w-[240px] h-[170px] sm:w-[280px] sm:h-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
            whileHover={{ scale: opening ? 1 : 1.03 }}
            whileTap={{ scale: opening ? 1 : 0.97 }}
          >
            {/* Envelope body */}
            <motion.div className="absolute inset-0 rounded-md bg-gradient-to-br from-sage-light via-sage to-sage-dark shadow-soft overflow-hidden">
              <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%)]" />
            </motion.div>

            {/* Envelope flap */}
            <motion.div
              className="absolute inset-x-0 top-0 h-[85px] sm:h-[100px] origin-top bg-gradient-to-b from-sage-light to-sage"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />

            {/* Rising card */}
            <motion.div
              className="absolute inset-x-4 bottom-4 top-10 rounded-sm bg-cream shadow-card flex flex-col items-center justify-center"
              animate={opening ? { y: -190, opacity: 1 } : { y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            >
              <p className="font-display italic text-olive-dark text-sm">Royal Invitation</p>
              <p className="font-display text-xl text-emerald-dark mt-1">
                {couple.brideName} & {couple.groomName}
              </p>
            </motion.div>

            {/* Wax seal */}
            <motion.div
              className="absolute left-1/2 top-[70px] sm:top-[85px] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-soft flex items-center justify-center border-2 border-gold-light/60"
              animate={
                opening
                  ? { scale: 0, opacity: 0, rotate: 25 }
                  : { scale: [1, 1.05, 1] }
              }
              transition={
                opening
                  ? { duration: 0.5 }
                  : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <span className="font-display text-emerald-dark text-lg tracking-wide">
                {couple.initials.replace(' & ', '')}
              </span>
            </motion.div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 0 : 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 font-body text-cream/70 text-xs tracking-widest2 uppercase"
          >
            Tap the seal to open
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
