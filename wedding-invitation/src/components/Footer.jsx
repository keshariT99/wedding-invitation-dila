import { couple } from '../data/config';

export default function Footer() {
  return (
    <footer className="relative bg-emerald-dark text-cream/70 py-12 px-6 text-center overflow-hidden">
      <p className="font-display italic text-2xl text-gold-light mb-2">
        {couple.brideName} &amp; {couple.groomName}
      </p>
      <p className="font-body text-xs tracking-widest2 uppercase">
        {couple.displayDate}
      </p>
      <p className="mt-6 font-body text-[11px] text-cream/40">
        Made with love, for our forever.
      </p>
    </footer>
  );
}
