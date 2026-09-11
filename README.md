# Hafizur-Rahman-Provat
Portfolio Website.Available worldwide, 24/7, forever free.

# Next.js Portfolio (Static Export)

This repository contains a Next.js portfolio site scaffold configured for static export (`output: 'export'`) so it can be published to GitHub Pages.

## Getting started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build and export: `npm run build`

When exported, the static files are placed in the `out/` directory. The included GitHub Actions workflow will build and publish `out/` to the `gh-pages` branch on push to `main`.

## What I need from you

- Upload images, your resume (`resume.pdf`) and certification PDFs into the `public/` folder. Recommended structure:
  - `public/resume.pdf`
  - `public/certs/<cert-file>.pdf`
  - `public/images/<project-image>.png`

- Replace placeholder texts in `pages/*.js` with your actual content.
- Replace the Formspree form ID in `components/ContactForm.js` with your form endpoint or configure a different contact method.

Notes:
- Contact details used in the scaffold: phone 01763676326, email vatpro8@gmail.com, LinkedIn https://www.linkedin.com/in/hafizur

Resume:
- A plain-text resume was generated at public/resume.txt and is rendered on the resume page. If you need a PDF, upload resume.pdf to public/ and I will link/embed it.


## Deploy notes (GitHub Pages)

If you host at a project site (`https://username.github.io/repo-name`) you will need to set `basePath` and `assetPrefix` in `next.config.js` to `/repo-name` and adjust links accordingly.
