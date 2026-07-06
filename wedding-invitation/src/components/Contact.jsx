import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { contacts, couple } from '../data/config';

function ContactCard({ role, person, delay }) {
  return (
    <Reveal
      direction="up"
      delay={delay}
      className="relative rounded-3xl bg-white/70 glass shadow-card p-8 text-center flex-1"
    >
      <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">{role}</p>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl text-emerald-dark">
        {person.name}
      </h3>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href={`https://wa.me/${person.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${person.name}`}
          className="w-11 h-11 rounded-full bg-sage/15 hover:bg-sage/25 flex items-center justify-center text-olive-dark transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.5-1.3a.6.6 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.6 1 2.8.1.2 1.8 2.7 4.3 3.8.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.5-.3Z"
            />
          </svg>
        </a>
        <a
          href={`tel:${person.phone.replace(/\s/g, '')}`}
          aria-label={`Call ${person.name}`}
          className="w-11 h-11 rounded-full bg-sage/15 hover:bg-sage/25 flex items-center justify-center text-olive-dark transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1Z"
            />
          </svg>
        </a>
      </div>

      <p className="mt-4 font-body text-sm text-ink/50">{person.phone}</p>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 bg-sand">
      <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          Questions?
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">
          Get In Touch
        </h2>
        <SectionDivider />
        <p className="font-body text-sm text-ink/60">
          Reach out any time — {couple.brideName} &amp; {couple.groomName} would love to hear
          from you.
        </p>
      </Reveal>

      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-6">
        <ContactCard role="The Bride" person={contacts.bride} delay={0} />
        <ContactCard role="The Groom" person={contacts.groom} delay={0.12} />
      </div>

      {contacts.email && (
        <p className="mt-10 text-center font-body text-sm text-ink/50">
          Or email us at{' '}
          <a href={`mailto:${contacts.email}`} className="text-olive-dark underline underline-offset-4">
            {contacts.email}
          </a>
        </p>
      )}
    </section>
  );
}
