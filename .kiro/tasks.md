# Implementation Plan: SheSafe Static Website

## Overview

Build a single-page static website using HTML5, CSS3, and minimal vanilla JavaScript. The site is delivered as `index.html`, `styles.css`, and `script.js`. Implementation proceeds section by section, wiring everything together at the end with tests validating form logic and DOM structure.

## Tasks

- [x] 1. Set up project structure and base HTML shell
  - Create `index.html` with semantic HTML5 boilerplate, Google Fonts `<link>`, and `<link>` to `styles.css` and `<script src="script.js" defer>`
  - Add all section anchors: `#home`, `#emergency`, `#safety-tips`, `#daily-tools`, `#contact`
  - Create empty `styles.css` with CSS custom properties for the color theme (primary pink/green palette, error red `#D32F2F`)
  - Create empty `script.js`
  - _Requirements: 1.1, 6.2, 6.3_

- [x] 2. Implement Navigation Bar
  - [x] 2.1 Build the `<header>` with nav brand, hamburger toggle button (`aria-label="Toggle navigation"`), and nav links to all five sections
    - Use `scroll-behavior: smooth` on the `html` element in CSS
    - _Requirements: 1.1, 1.2, 1.4_
  - [x] 2.2 Style the nav bar — sticky/fixed positioning, responsive collapse below 768px, legible at 320px
    - _Requirements: 1.4, 6.1, 6.6_
  - [x] 2.3 Implement hamburger toggle in `script.js` — toggle a CSS class on the `<nav>` to show/hide links on mobile
    - _Requirements: 6.6_

- [x] 3. Implement Hero Section (`#home`)
  - Add full-width hero with site title "SheSafe" and tagline "Empowering Women with Safety and Confidence"
  - Apply gradient background using the primary palette CSS variables
  - _Requirements: 1.3, 6.3_

- [x] 4. Implement Emergency Section (`#emergency`)
  - [x] 4.1 Add the SOS button styled with `background: #D32F2F`, white text, large size, high contrast
    - _Requirements: 2.1, 2.4_
  - [x] 4.2 Add three emergency contact cards: Police (100), Women Helpline (1091), Ambulance (108)
    - Single-column layout on mobile (< 768px), no horizontal scroll
    - _Requirements: 2.2, 2.3_

- [x] 5. Implement reusable Safety_Card CSS component
  - Define `.card` styles: padding, border-radius, background, icon + title + list layout
  - Add hover effect on `.card:hover` — `box-shadow` and `transform: translateY(-4px)` with `transition`
  - _Requirements: 3.3, 4.5, 6.4_

- [x] 6. Implement Safety Tips Section (`#safety-tips`)
  - [x] 6.1 Add three Safety_Card instances: Travel Safety, Online Safety, Public Places Safety — each with an inline SVG icon and at least 3 tip list items
    - _Requirements: 3.1, 3.2, 3.4_
  - [x] 6.2 Apply responsive grid: 1 column (< 768px) → 2 columns (768px) → 3 columns (≥ 1280px)
    - _Requirements: 6.1_
  - [ ]* 6.3 Write property test for Safety_Card structure (Property 4)
    - **Property 4: Every Safety_Card contains an icon and meets minimum tip count**
    - **Validates: Requirements 3.4, 6.5**
    - Use Vitest + jsdom; assert each `.card` in `#safety-tips` has an SVG child and at least 3 `<li>` items

- [x] 7. Implement Daily Tools Section (`#daily-tools`)
  - Add three Safety_Card instances: Safety Apps, Fake Call Trick, Self-Defense Tips — each with an inline SVG icon and short description
  - Reuse `.card` styles and hover effect from task 5
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 8. Checkpoint — Verify layout and hover effects
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Implement Contact Section (`#contact`)
  - [x] 9.1 Add the `<form id="contact-form" novalidate>` with `name`, `email`, `message` fields, all marked `required`, each with an associated `<label>`
    - _Requirements: 5.1, 5.2_
  - [x] 9.2 Implement `validateForm()` in `script.js`
    - On submit: check each required field; add `.error` class and inline error message for empty/whitespace fields
    - Validate email via `input.validity.valid`; show "Please enter a valid email address" on failure
    - On valid submit: hide form, show success message "Thank you! Your message has been received."
    - _Requirements: 5.2, 5.3, 5.4_
  - [ ]* 9.3 Write property test for empty/whitespace required fields (Property 1)
    - **Property 1: Form rejects empty required fields**
    - **Validates: Requirements 5.2, 5.4**
    - Use fast-check; generate arbitrary combinations of empty/whitespace strings for name, email, message; assert `validateForm()` returns false and all empty fields have `.error`
  - [ ]* 9.4 Write property test for invalid email (Property 2)
    - **Property 2: Form rejects invalid email**
    - **Validates: Requirements 5.3**
    - Use fast-check; generate arbitrary non-email strings; assert `validateForm()` returns false and email field has `.error`

- [x] 10. Implement responsive layout and accessibility polish
  - Ensure all breakpoints (320px, 768px, 1280px) render without overflow
  - Add `aria-hidden="true"` to all decorative inline SVGs
  - Verify all form inputs have associated `<label>` elements
  - _Requirements: 6.1, 6.5, 6.6_

- [x] 11. Implement CSS hover effects on all interactive elements
  - Confirm `.card:hover` and button hover styles are applied consistently across Safety Tips, Daily Tools, and SOS button
  - _Requirements: 6.4_
  - [ ]* 11.1 Write property test for consistent card hover CSS (Property 3)
    - **Property 3: All interactive cards have consistent hover effects**
    - **Validates: Requirements 3.3, 4.5, 6.4**
    - Use Vitest + jsdom; assert every `.card` element's stylesheet includes both `box-shadow` and `transform` in its `:hover` rule

- [x] 12. Set up testing framework
  - Install Vitest and jsdom (`npm install --save-dev vitest jsdom fast-check`)
  - Configure Vitest with jsdom environment in `vitest.config.js`
  - Add a test entry file that loads `index.html` into jsdom
  - [ ]* 12.1 Write unit tests for DOM structure
    - Assert nav has all five links
    - Assert Emergency section has SOS button and all three contact numbers
    - Assert Safety Tips section has three `.card` elements
    - Assert Daily Tools section has three `.card` elements
    - Assert Contact form has name, email, message inputs all with `required`
    - _Requirements: 1.1, 2.1, 2.2, 3.1, 4.1, 4.2, 4.3, 5.1, 5.2_

- [x] 13. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check (minimum 100 iterations each) and Vitest + jsdom
- Unit tests cover DOM structure and form validation examples
- All JavaScript stays under 50 lines; no frameworks or build tools required beyond Vitest for testing
