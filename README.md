# Hafizur-Rahman-Provat
Portfolio Website.Available worldwide, 24/7, forever free.

# Hafizur Rahman — Portfolio

This repository contains Hafizur Rahman’s portfolio website, configured as a static Next.js export for GitHub Pages and the custom domain `msrongbahar.me`.

## Getting started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build and export: `npm run build`

The production build generates static files in the `out/` directory. The GitHub Actions workflow publishes `out/` to the `gh-pages` branch whenever `main` is updated.

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

The canonical portfolio URL is:

`https://msrongbahar.me/`

The build is configured for root-domain hosting and includes `public/CNAME`. In GitHub repository settings, open **Pages**, select `gh-pages` as the branch with `/ (root)` as the folder, and set the custom domain to `msrongbahar.me`.

The domain must no longer be assigned to the unrelated Vercel “M/S Rong Bahar” project. Remove that domain from Vercel or point the domain DNS to GitHub Pages. For an apex domain, configure the DNS provider with GitHub Pages’ current A records; for `www`, configure a CNAME to `provat1640.github.io` and redirect the apex as appropriate.
