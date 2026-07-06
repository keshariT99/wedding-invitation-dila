// ─────────────────────────────────────────────────────────────
// Everything about the wedding lives here. Edit this one file
// to re-skin the whole site for a different couple / event.
// ─────────────────────────────────────────────────────────────

export const couple = {
  brideName: 'Thilini',
  groomName: 'Nadun',
  initials: 'T & N',
  weddingDate: '2026-08-20T09:30:00', // ISO string used by the countdown
  displayDate: '20th August 2026',
  welcomeMessage:
    'Together with our families, we joyfully invite you to celebrate the beginning of our forever.',
  quote:
    '"A journey of a thousand miles begins with a single step, and we\u2019re so incredibly happy to take it together."',
};

export const music = {
  // Drop an mp3 into public/audio and point to it here.
  src: '/audio/wedding-theme.mp3',
  title: 'Our Song',
};

export const story = [
  {
    year: '2018',
    title: 'First Met',
    text: 'The moment our paths crossed and everything changed.',
  },
  {
    year: '2019',
    title: 'Fell in Love',
    text: 'From being friends to a forever kind of love.',
  },
  {
    year: '2022',
    title: 'She Said Yes',
    text: 'The start of our forever begins.',
  },
  {
    year: '2026',
    title: 'Forever Starts',
    text: 'And now, we become one.',
  },
];

export const video = {
  posterUrl:
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  videoUrl: '', // add an mp4/YouTube embed URL here
};

export const gallery = [
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop',
    caption: 'Under the old trees',
  },
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    caption: 'Hand in hand',
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
    caption: 'Golden hour',
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
    caption: 'Quiet morning',
  },
  {
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop',
    caption: 'The proposal',
  },
  {
    url: 'https://images.unsplash.com/photo-1487555617229-579d9a0e73c4?q=80&w=1000&auto=format&fit=crop',
    caption: 'Forever begins',
  },
];

export const events = [
  {
    name: 'Poruwa Ceremony',
    date: 'Thursday, August 20, 2026',
    time: '09:30 AM – 10:30 AM',
    venue: 'Waters Edge, Battaramulla',
    description:
      'We are honored to invite you to witness our union as we exchange vows in a traditional Poruwa ceremony, surrounded by the beauty of nature and the warmth of our loved ones.',
  },
  {
    name: 'Reception',
    date: 'Thursday, August 20, 2026',
    time: '7:00 PM onwards',
    venue: 'Waters Edge, Battaramulla',
    description:
      'Join us for an evening of dinner, dancing and celebration as we begin our new chapter together.',
  },
];

export const location = {
  venueName: 'Waters Edge',
  address: 'Battaramulla, Sri Lanka',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31702.0!2d79.918!3d6.900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJOIDc5wrA1NScwNC44IkU!5e0!3m2!1sen!2slk!4v0',
  mapsLink: 'https://maps.google.com/?q=Waters+Edge+Battaramulla+Sri+Lanka',
};

export const contacts = {
  bride: { name: 'Thilini', phone: '+94 77 123 4567', whatsapp: '94771234567' },
  groom: { name: 'Nadun', phone: '+94 77 765 4321', whatsapp: '94777654321' },
  email: 'thilininadun2026@gmail.com',
};

// ── RSVP submission ─────────────────────────────────────────
// Preferred: a Google Apps Script Web App URL connected to a
// Google Sheet. See README.md → "Connect RSVP to Google Sheets"
// for step-by-step setup. Guests never see this URL or know
// where responses are stored.
export const rsvpEndpoint =
  'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec';
