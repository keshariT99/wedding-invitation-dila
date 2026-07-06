import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { gallery } from '../data/config';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i + 1) % gallery.length);
  const showPrev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) showNext();
    else if (info.offset.x > 80) showPrev();
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-6 bg-sand">
      <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          A Lifetime Of
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          Our Gallery
        </h2>
        <SectionDivider />
      </Reveal>

      <div className="max-w-5xl mx-auto columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
        {gallery.map((item, idx) => (
          <Reveal
            key={item.url}
            direction="scale"
            delay={idx * 0.06}
            className="mb-4 break-inside-avoid"
          >
            <button
              onClick={() => setActiveIndex(idx)}
              className="group relative w-full overflow-hidden rounded-2xl shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-dark/0 group-hover:bg-emerald-dark/25 transition-colors duration-500 flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-cream font-body text-xs tracking-wide">
                  {item.caption}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-emerald-dark/95 flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-6 right-6 text-cream/80 hover:text-gold text-3xl leading-none"
            >
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 text-cream/70 hover:text-gold text-3xl px-2"
            >
              ‹
            </button>

            <motion.div
              key={activeIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img
                src={gallery[activeIndex].url}
                alt={gallery[activeIndex].caption}
                className="w-full max-h-[75vh] object-contain rounded-xl shadow-soft select-none"
                draggable={false}
              />
              <p className="mt-4 text-center font-display italic text-cream/80 text-lg">
                {gallery[activeIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 text-cream/70 hover:text-gold text-3xl px-2"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
