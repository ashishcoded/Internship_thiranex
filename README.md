# Semantic Portfolio — Thiranex Task 1

A dependency-free, multi-page personal portfolio created for the **HTML5 Semantic Structure & Accessibility** internship task.

## Pages

- `index.html` — Home
- `about.html` — About
- `projects.html` — Projects
- `contact.html` — Accessible contact form

## Task requirements covered

### Semantic HTML5
Uses:
- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<address>`
- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Semantic lists and form controls

### Accessibility / WCAG-focused implementation
- Skip-to-content link
- Keyboard-navigable links and form
- Visible `:focus-visible` styles
- Descriptive navigation labels
- `aria-current` for the active page
- `aria-label` / `aria-labelledby` where useful
- Accessible form labels
- Required-field indication
- `aria-required`, `aria-invalid`
- Inline validation messages
- `role="status"` + `aria-live` for form feedback
- Reduced-motion support
- Good color contrast
- No icon-only interactive controls

### SEO
Each page includes:
- Unique `<title>`
- Unique meta description
- Author metadata
- Robots metadata
- Viewport metadata
- Theme-color metadata
- Canonical URL
- Structured data on the home page

## Before submission

1. Replace **Your Name**, `YN`, email and portfolio URL with your own details.
2. Replace the example projects with your actual projects if required.
3. Update canonical URLs from `https://example.com/` to your deployed website URL.
4. Deploy the folder on GitHub Pages, Netlify, Vercel or another static host.
5. Run Lighthouse in Chrome and check **Accessibility** and **SEO**.

## Important Lighthouse note

The project is intentionally dependency-free and avoids common audit problems such as missing page titles, missing meta descriptions, unlabeled form controls, inaccessible focus states and non-semantic page structure. A literal 100 score can still vary with the hosting URL, browser version, deployment headers and other environment-specific checks, so verify the final deployed version.
