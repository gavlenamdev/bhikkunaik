# Bhikku Naik — Badminton & Fitness Website

A responsive, modern sports website built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — page content and sections
- `styles.css` — full responsive styling
- `script.js` — navigation, animation, testimonials and WhatsApp enquiry form
- `assets/favicon.svg` — website icon

## Open the website

Double-click `index.html` to open it in a browser.

For local development, you can also run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current details

- Phone / WhatsApp: +91 96760 49453 (`919676049453` in WhatsApp links)
- Email: bheekunaik8434@gmail.com
- Training is at the student's own location in Hyderabad, Telangana, India
- Fees are discussed after the demo class

### Social media links

Replace the `href="#"` values in the footer with real Instagram, YouTube and Facebook profile links.

### Coach photo

The design currently uses a professional BN monogram instead of a photo.

To add a coach photo:

1. Put the image in the `assets` folder, for example `assets/coach.jpg`.
2. Add an `<img>` inside `.coach-panel`.
3. Add CSS with `width: 100%; height: 100%; object-fit: cover;`.

## Deployment options

This static website can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- Hostinger
- Cloudflare Pages
- Any shared hosting with an `public_html` folder

No database is required for the current version. The enquiry form opens WhatsApp with a pre-filled message.
