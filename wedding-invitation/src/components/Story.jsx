import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { story, couple } from '../data/config';

export default function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 px-6 bg-cream overflow-hidden">
      <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-16">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          Our Story
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          A Journey of Love, Laughter &amp; Forever
        </h2>
        <SectionDivider />
        <p className="font-display italic text-lg text-olive-dark/80">{couple.quote}</p>
      </Reveal>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden sm:block" />

        <div className="flex flex-col gap-14">
          {story.map((item, idx) => (
            <Reveal
              key={item.year}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              className={`relative flex flex-col sm:flex-row items-center gap-4 sm:gap-8 ${
                idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="flex-1 text-center sm:text-inherit">
                <div className="inline-block rounded-2xl bg-white/70 glass shadow-card px-6 py-5 max-w-sm">
                  <p className="font-display text-3xl text-gold-dark mb-1">{item.year}</p>
                  <h3 className="font-display text-2xl text-emerald-dark">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-ink/60">{item.text}</p>
                </div>
              </div>

              <div className="relative z-10 w-4 h-4 rounded-full bg-gold shadow-soft ring-4 ring-cream shrink-0" />

              <div className="flex-1 hidden sm:block" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
