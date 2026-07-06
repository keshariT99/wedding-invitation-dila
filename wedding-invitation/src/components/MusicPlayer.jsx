import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { music } from '../data/config';

// Music never autoplays (browsers block it, and it's polite anyway).
// The guest taps once to start; the button keeps gently pulsing
// while a track is playing so it reads as "live".
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleError = () => setReady(false);
    audio.addEventListener('error', handleError);
    return () => audio.removeEventListener('error', handleError);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !ready) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      setReady(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-50">
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <motion.button
        onClick={toggle}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={ready ? music.title : 'Add your track in public/audio'}
        className="relative w-14 h-14 rounded-full glass shadow-soft flex items-center justify-center text-emerald-dark"
        whileTap={{ scale: 0.9 }}
      >
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border border-gold/60"
            animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 6, repeat: playing ? Infinity : 0, ease: 'linear' }}
        >
          {playing ? (
            <path
              fill="currentColor"
              d="M9 5v14l4-2.5V7.5L9 5Zm6 0v14l-1.2-.75V5.75L15 5Z"
            />
          ) : (
            <path fill="currentColor" d="M8 5v14l11-7L8 5Z" />
          )}
        </motion.svg>
      </motion.button>
    </div>
  );
}
