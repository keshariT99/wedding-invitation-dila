export default function SectionDivider({ label }) {
  return (
    <div className="flex items-center justify-center gap-4 my-6" aria-hidden={!label}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-gold shrink-0">
        <path
          fill="currentColor"
          d="M12 2c-2 4-6 5-6 9a6 6 0 0 0 12 0c0-4-4-5-6-9Z"
        />
      </svg>
      {label && (
        <span className="font-body text-xs tracking-widest2 uppercase text-olive/70">
          {label}
        </span>
      )}
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
