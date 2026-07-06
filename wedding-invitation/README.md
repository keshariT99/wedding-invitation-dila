# Thilini & Nadun — Digital Wedding Invitation

A premium, animated digital wedding invitation built with **React**, **Tailwind CSS**, and **Framer Motion**. Sage-green & gold palette, floating petals, a wax-seal envelope opening moment, a live countdown, a photo gallery with lightbox, and an RSVP form that saves responses straight into a Google Sheet.

## 1. Run it locally (VS Code)

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The production files land in `dist/` — upload that folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## 2. Customize the content

Everything guest-facing lives in **`src/data/config.js`**:

- `couple` — names, wedding date/time (drives the live countdown), welcome message, quote
- `story` — your love-story timeline entries
- `gallery` — photo URLs + captions (swap the Unsplash placeholders for your own photos)
- `video` — poster image + your own video URL (mp4 or hosted link)
- `events` — ceremony / reception cards
- `location` — venue name, address, Google Maps embed + link
- `contacts` — bride/groom phone, WhatsApp, email
- `music` — path to your background track

To use your own photos: drop image files into `public/images/` and reference them as `/images/your-file.jpg` in `config.js`.

To add music: drop an mp3 into `public/audio/` (see the note in that folder) and update `music.src` if you rename it.

## 3. Connect RSVP to Google Sheets (recommended)

This lets you view every RSVP in a spreadsheet — no guest ever sees where it's stored.

1. Create a new Google Sheet. Add a header row: `submittedAt | couple | name | phone | guests | attending | message`
2. In the sheet, open **Extensions → Apps Script**.
3. Replace the default code with:

   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const p = e.parameter;
     sheet.appendRow([
       p.submittedAt, p.couple, p.name, p.phone, p.guests, p.attending, p.message
     ]);
     return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

4. Click **Deploy → New deployment → Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL (ends in `/exec`).
6. Paste it into `src/data/config.js` → `rsvpEndpoint`.

That's it — every RSVP submission now appears as a new row in your sheet, viewable/exportable in Excel format any time.

> Alternative backends: Supabase, Firebase, or Airtable all work the same way — just swap the `fetch` call inside `src/components/RSVP.jsx` for their respective client/API call.

## 4. Project structure

```
src/
  components/     — every section of the page (Hero, Countdown, Gallery, RSVP, …)
  data/config.js  — all editable wedding content in one place
  hooks/          — the countdown hook
  App.jsx         — assembles all sections
  main.jsx        — React entry point
  index.css       — Tailwind + shared utility classes
public/
  audio/          — background music
  images/         — your own photos (optional, or use gallery URLs directly)
```

## 5. Notes

- Background music never autoplays — the floating button in the bottom-right starts it on tap, per browser autoplay rules.
- The whole layout is mobile-first; check `sm:` / `md:` breakpoints in each component if you want to adjust tablet/desktop behavior.
- Animations respect `prefers-reduced-motion`.
- Replace the Unsplash gallery/video placeholders before publishing — they're just there so the layout has content to show at build time.
