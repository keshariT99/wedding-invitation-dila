import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { location } from '../data/config';

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 sm:py-32 px-6 bg-cream">
      <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          Find Us
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          Venue &amp; Location
        </h2>
        <SectionDivider />
      </Reveal>

      <Reveal direction="scale" className="max-w-3xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-soft bg-white/70 glass">
          <div className="aspect-video w-full">
            <iframe
              title="Venue map"
              src={location.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-gold shrink-0">
                <path
                  fill="currentColor"
                  d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
                />
              </svg>
              <div>
                <p className="font-display text-xl text-emerald-dark">
                  {location.venueName}
                </p>
                <p className="font-body text-sm text-ink/60">{location.address}</p>
              </div>
            </div>

            <a
              href={location.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-dark text-cream px-6 py-3 font-body text-sm tracking-wide shadow-soft transition-transform hover:scale-105 active:scale-95 shrink-0"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
