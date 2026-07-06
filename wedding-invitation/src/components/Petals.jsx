import { useMemo } from 'react';
import { motion } from 'framer-motion';

// A soft field of floating petals + leaves used as ambient decoration.
// `density` lets a section request fewer/more petals; `variant` swaps
// the color for light/dark backgrounds.
export default function Petals({ density = 14, variant = 'light' }) {
  const petals = useMemo(
    () =>
      Array.from({ length: density }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 10,
        drift: (Math.random() - 0.5) * 120,
        rotate: Math.random() * 360,
        isLeaf: Math.random() > 0.6,
      })),
    [density]
  );

  const color = variant === 'dark' ? '#E4CD97' : '#C9A455';
  const soft = variant === 'dark' ? '#AEBB9F' : '#8A9A7B';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: '-10%', x: 0, opacity: 0, rotate: p.rotate }}
          animate={{
            y: '110%',
            x: [0, p.drift, 0],
            opacity: [0, 0.8, 0.8, 0],
            rotate: p.rotate + 180,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.isLeaf
              ? `linear-gradient(135deg, ${soft}, transparent)`
              : `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
            borderRadius: p.isLeaf ? '0% 70% 0% 70%' : '50% 50% 50% 0%',
            filter: 'blur(0.2px)',
          }}
        />
      ))}
    </div>
  );
}
