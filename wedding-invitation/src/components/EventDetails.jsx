import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { events } from '../data/config';

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" className="text-gold">
      <path fill="currentColor" d="M12 2c-2 4-6 5-6 9a6 6 0 0 0 12 0c0-4-4-5-6-9Z" />
    </svg>
  );
}

export default function EventDetails() {
  return (
    <section id="events" className="relative py-24 sm:py-32 px-6 bg-cream">
      <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-16">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          A Celebration of Tradition &amp; Love
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          Event Details
        </h2>
        <SectionDivider />
      </Reveal>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
        {events.map((event, idx) => (
          <Reveal
            key={event.name}
            direction={idx % 2 === 0 ? 'left' : 'right'}
            delay={idx * 0.1}
            className="relative rounded-3xl bg-white/70 glass shadow-card p-8 text-center overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-sage/10" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-gold/10" />

            <div className="relative flex justify-center mb-4">
              <LeafIcon />
            </div>
            <h3 className="relative font-display text-2xl sm:text-3xl text-emerald-dark">
              {event.name}
            </h3>
            <p className="relative mt-4 font-body text-sm text-ink/60 leading-relaxed">
              {event.description}
            </p>

            <div className="relative mt-6 flex flex-col gap-2 font-body text-sm text-olive-dark">
              <span>{event.date}</span>
              <span className="font-medium">{event.time}</span>
              <span className="text-ink/60">{event.venue}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
