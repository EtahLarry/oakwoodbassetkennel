# Oakwood Basset

This is a framework-free breeder website built with semantic HTML, one shared stylesheet, and one shared vanilla JavaScript file.

## Quick start

Open `index.html` directly in a browser, or serve this folder with any static web server. There is no build step and no dependency installation.

## Replace the placeholders

- Change the kennel name and location in the header, footer, page titles, and hero copy of the HTML files.
- Update phone, email, social links, and the placeholder contact details in `contact.html` and the footer blocks.
- Replace the remote Unsplash URLs in `script.js` with local image paths such as `images/maple.jpg`. The puppy and parent data is near the top of the file.
- Luna uses the owner-provided photos in `images/maple-1.jpg` and `images/maple-2.jpg`; replace those files or update her `photos` array in `script.js` for a different puppy.
- Penny uses the owner-provided photos in `images/penny-1.jpeg` and `images/penny-2.jpeg`; update her `photos` array in `script.js` if another image should be used.
- Buster uses the owner-provided photos in `images/clover-1.jpeg` and `images/clover-2.jpeg`; update his `photos` array in `script.js` if another image should be used.
- Walter uses the owner-provided photos in `images/walter-1.jpeg` and `images/walter-2.jpeg`; update his `photos` array in `script.js` if another image should be used.
- Bruno uses the owner-provided photos in `images/archie-1.jpeg` and `images/archie-2.jpeg`; update his `photos` array in `script.js` if another image should be used.
- Rosie uses the owner-provided photos in `images/beau-1.jpeg` and `images/beau-2.jpeg`; update his `photos` array in `script.js` if another image should be used.
- Adam uses the owner-provided photos in `images/rudy-1.jpeg` and `images/rudy-2.jpeg`; update his `photos` array in `script.js` if another image should be used.
- Ollie uses the owner-provided photos in `images/gigi-1.jpg` and `images/gigi-2.jpg`; update his `photos` array in `script.js` if another image should be used.
- Milo uses the owner-provided photos in `images/verity-1.jpg` and `images/verity-2.jpg`; update his `photos` array in `script.js` if another image should be used.
- Winston uses the owner-provided photos in `images/winston-1.jpg` and `images/winston-2.jpg`; update his `photos` array in `script.js` if another image should be used.
- Daisy uses the owner-provided photos in `images/daisy-1.jpg` and `images/daisy-2.jpg`; update her `photos` array in `script.js` if another image should be used.
- Harvey uses the owner-provided photo in `images/harvey.jpg`; update his `photos` array in `script.js` if another image should be used.
- Teddy uses the owner-provided photo in `images/teddy.jpg`; update his `photos` array in `script.js` if another image should be used.
- Hazel replaces Boone in Our Dogs and uses the owner-provided photo in `images/hazel.jpg`.
- Finn replaces Willow in Our Dogs and uses the owner-provided photo in `images/finn.jpg`.
- Leo replaces Otis in Our Dogs and uses the existing `images/maple-1.jpg` photo set.
- The homepage breed-intro section uses `images/breed-intro.mp4`; replace this file to update that feature video.
- The Our Dogs feature section uses `images/dogs-feature.mp4`; replace this file to update that feature video.
- The tricolor upcoming-litter feature uses `images/upcoming-tricolor.jpg`.
- The additional upcoming-litter feature uses `images/upcoming-tricolor-2.jpg`.
- The third upcoming-litter feature uses `images/upcoming-tricolor-3.jpg`.
- The fourth upcoming-litter feature uses `images/upcoming-tricolor-4.jpg`.
- The red-and-white upcoming-litter feature uses `images/upcoming-red-white.jpg`.
- The About page family-story photo uses `images/about-puppies.jpg`; replace this file to update the story image.
- The About page philosophy photo uses `images/about-feature.jpg`; replace this file to update that feature image.
- The About page third gallery photo uses `images/about-gallery-3.jpg`; replace this file to update that gallery image.
- The breed page Everyday Care photo uses `images/breed-care.jpg`; replace this file to update that feature image.
- The process-page pricing section uses `images/policies-award.jpg`; replace this file to update that policy image.
- `show-news.html` is the Champion & Show News page linked from the main navigation; update its news cards and award image as the kennel's story grows.
- Tara's Grand Champion feature uses `images/tara-grand-champion.jpg`; replace that file or update the image path in `show-news.html` when needed.
- Klarissa's championship feature uses `images/klarissa-champion.jpg`; replace that file or update the image path in `show-news.html` when needed.
- Eclipse's championship feature uses `images/eclipse-champion.jpg`; replace that file or update the image path in `show-news.html` when needed.
- Whisper's show feature uses `images/whisper-champion.jpg`; replace that file or update the image path in `show-news.html` when needed.
- The homepage hero uses `hero-basset.mp4` as a muted, looping background video with a poster-image fallback. Replace that file with the owner's preferred MP4 if needed.
- Green page headers and green content bands use `dogs-green-bg.mp4` as a shared muted background video. Replace that file to change those sections together.
- Update the sample puppy data, litter dates, health testing, policies, and testimonials to match the real program.
- The sample admin password is `happy-ears`. Change it in `script.js` before publishing. This demo admin mode is client-side only and is not a security system.

## Included interactions

- Responsive navigation, FAQ accordion, modal profiles, puppy galleries, lightbox image viewing, filtering, search, form validation, localStorage inquiry saving, reveal animations, and back-to-top control.
- Puppy status overrides are stored in `localStorage` under `bassetStatusOverrides`.
- Demo form submissions are stored in `localStorage` under `bassetInquiries`.
- Contact, homepage, and application forms send email through FormSubmit AJAX to `oakwoodbasset@gmail.com` after the email is verified with that service. The site must be hosted over HTTP(S) for cross-origin delivery; opening HTML files directly will keep the local fallback only.
- When opened directly as a local HTML file, the form opens a prefilled email in the visitor's default email app; the visitor must press Send. A local file cannot send silently on its own.
- The contact page includes direct call and SMS links for `+1 (346) 204-2276`. Automatic SMS notifications require a server-side SMS provider and credentials, which should never be placed in frontend JavaScript.
- `.env.example` documents the public contact settings for a future deployment or backend. Pure HTML/CSS/JS does not load `.env` files, so private email or WhatsApp API keys must stay on a server.

## Publishing notes

Use real, compressed puppy photography with descriptive alt text before launch. Connect the forms to a real email or CRM endpoint, replace the demo admin mode with authenticated server-side administration, and review all health, pricing, and policy language with the breeder before publishing.
