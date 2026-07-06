import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';
import { rsvpEndpoint, couple } from '../data/config';

const initialForm = {
  name: '',
  phone: '',
  guests: '1',
  attending: '',
  message: '',
};

function Field({ label, error, children }) {
  return (
    <label className="block text-left">
      <span className="font-body text-xs tracking-wide uppercase text-olive-dark/80">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

const inputClass =
  'w-full rounded-xl border border-sage-light/60 bg-white/80 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-gold/60 transition';

export default function RSVP() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!form.phone.trim()) next.phone = 'A phone number helps us reach you.';
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone))
      next.phone = 'That doesn\u2019t look like a valid phone number.';
    if (!form.attending) next.attending = 'Let us know if you can make it.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const payload = {
      name: form.name,
      phone: form.phone,
      guests: form.guests,
      attending: form.attending,
      message: form.message,
      submittedAt: new Date().toISOString(),
      couple: `${couple.brideName} & ${couple.groomName}`,
    };

    try {
      // Google Apps Script web apps don't return readable CORS
      // responses in no-cors mode, so we submit optimistically.
      // See README.md for the Apps Script + Sheet setup.
      await fetch(rsvpEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      });
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="rsvp" className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-sand to-cream">
      <Reveal direction="up" className="max-w-lg mx-auto text-center mb-12">
        <p className="font-body text-xs tracking-widest2 uppercase text-gold-dark">
          Kindly
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-emerald-dark">RSVP</h2>
        <SectionDivider />
        <p className="font-body text-sm text-ink/60">
          We would be honored to have you join us. Please respond below.
        </p>
      </Reveal>

      <Reveal direction="scale" className="max-w-xl mx-auto">
        <div className="relative rounded-3xl bg-white/80 glass shadow-soft p-6 sm:p-10 overflow-hidden">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                  className="mx-auto mb-6 w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" className="text-gold-dark">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="font-display text-2xl text-emerald-dark mb-2">
                  Thank You!
                </h3>
                <p className="font-body text-sm text-ink/60 max-w-xs mx-auto">
                  Your response has been received with love. We can&rsquo;t wait to
                  celebrate with you.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-body text-xs tracking-widest2 uppercase text-olive-dark underline underline-offset-4"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid gap-5"
                noValidate
              >
                <Field label="Guest Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+94 7X XXX XXXX"
                    className={inputClass}
                  />
                </Field>

                <Field label="Number of Guests">
                  <select
                    value={form.guests}
                    onChange={update('guests')}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Will you attend?" error={errors.attending}>
                  <div className="grid grid-cols-2 gap-3">
                    {['Yes', 'No'].map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setForm((f) => ({ ...f, attending: option }))}
                        className={`rounded-xl border px-4 py-3 font-body text-sm transition ${
                          form.attending === option
                            ? 'bg-emerald-dark text-cream border-emerald-dark shadow-soft'
                            : 'border-sage-light/60 text-olive-dark bg-white/60 hover:border-gold'
                        }`}
                      >
                        {option === 'Yes' ? 'Joyfully Accept' : 'Regretfully Decline'}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Message (optional)">
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={3}
                    placeholder="Leave a wish for the couple"
                    className={inputClass}
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-xs text-red-600 text-center">
                    Something went wrong sending your RSVP. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 w-full rounded-xl bg-emerald-dark text-cream py-3 font-body text-sm tracking-wide shadow-soft transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit RSVP'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
