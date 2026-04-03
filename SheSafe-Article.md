# SheSafe: Building a Women's Safety Companion Website

## Introduction

Safety is something every woman deserves — not just in theory, but in practice, every single day. SheSafe is a static website built to be a quick, reliable safety companion for women. It brings together emergency contacts, practical safety tips, daily tools, and a contact form in one clean, easy-to-use page.

This article walks through what SheSafe is, why it was built, and how it was put together.

---

## What Is SheSafe?

SheSafe is a single-page website designed with one goal: give women fast access to safety information when they need it most. No login. No app download. No complicated navigation. Just open the page and everything is right there.

The site has five sections:

- **Home** — A welcoming hero banner with the tagline *"Empowering Women with Safety and Confidence"*
- **Emergency** — A prominent SOS button and three emergency numbers (Police: 100, Women Helpline: 1091, Ambulance: 108)
- **Safety Tips** — Practical advice organized into Travel Safety, Online Safety, and Public Places Safety
- **Daily Tools** — Useful techniques including recommended safety apps, the fake call trick, and basic self-defense tips
- **Contact** — A simple form to reach out with questions or feedback

---

## Why This Project?

Women face unique safety challenges every day — whether commuting late at night, navigating online spaces, or simply walking through a crowded area. Most safety resources are scattered across different apps, websites, and pamphlets.

SheSafe brings it all into one place. The idea was to create something that feels calm and trustworthy, not alarming — a resource you can bookmark and return to, or share with someone who needs it.

The design uses a soft pink and green color palette to feel approachable, while the red SOS button stands out clearly for emergencies. Every design decision was made with the user in mind.

---

## How It Was Built

SheSafe is intentionally simple under the hood. No frameworks. No backend. No database. Just three files:

- `index.html` — All the content and structure
- `styles.css` — All the visual styling
- `script.js` — A small amount of JavaScript (under 50 lines)

### HTML Structure

The page uses semantic HTML5 — proper `<header>`, `<main>`, `<section>`, and `<footer>` tags. Each section has an anchor ID so the navigation links scroll smoothly to the right place using CSS `scroll-behavior: smooth`.

The navigation bar includes a hamburger menu button for mobile users, toggled by a few lines of JavaScript.

### CSS and Design

The styling uses CSS custom properties (variables) for the entire color theme. This makes it easy to maintain consistency — change one variable and the whole site updates.

```css
:root {
  --color-primary: #E91E8C;
  --color-accent: #4CAF82;
  --color-sos: #D32F2F;
}
```

The layout is fully responsive with three breakpoints:
- Mobile (under 768px): single column, hamburger nav
- Tablet (768px): two-column card grid
- Desktop (1280px and above): three-column card grid, full navigation bar

Cards have a hover effect — a subtle lift with `transform: translateY(-4px)` and a soft shadow — giving the page a polished, interactive feel.

### JavaScript

The JavaScript does two things only:

1. **Mobile nav toggle** — clicking the hamburger button adds a CSS class to show or hide the nav links
2. **Form validation** — when the contact form is submitted, it checks that all fields are filled in and that the email address is valid

```js
function validateForm() {
  // checks each field, shows error messages if invalid
  // shows success message if all fields pass
}
```

The form uses the browser's built-in `validity` API for email checking, keeping the code minimal and reliable.

---

## Key Features

### Emergency Section

The SOS button is the most important element on the page. It's styled in red (`#D32F2F`), large, and impossible to miss. Below it, three emergency contact cards display the numbers clearly — Police (100), Women Helpline (1091), and Ambulance (108).

On mobile, these cards stack into a single column so nothing gets cut off or requires scrolling sideways.

### Safety Tips

Three cards cover the most common safety scenarios:

- **Travel Safety** — Share your location, stick to well-lit routes, keep emergency numbers saved
- **Online Safety** — Use strong passwords, protect your privacy, report harassment
- **Public Places Safety** — Stay aware, trust your instincts, know your exits

Each card has an inline SVG icon and at least four practical tips.

### Daily Tools

This section goes beyond tips into actionable tools:

- **Safety Apps** — bSafe, Shake2Safety, Google Maps Live Share
- **Fake Call Trick** — How to use a scheduled fake call to exit uncomfortable situations
- **Self-Defense Tips** — Basic techniques and the value of a personal alarm

### Contact Form

The contact form is clean and straightforward — name, email, and message. It validates on the client side before submission and shows a friendly success message when sent.

---

## Testing

The project includes a test suite using Vitest and jsdom to verify the site works correctly:

- All five navigation links are present
- The SOS button and all three emergency numbers exist
- Safety Tips and Daily Tools each have three cards
- The contact form fields are all marked as required

These tests run with a single command: `npx vitest --run`

---

## Conclusion

SheSafe started as a simple idea — what if there was one place a woman could go to feel more prepared and less alone? The result is a lightweight, fast, and accessible website that anyone can open on any device.

It doesn't need an internet connection beyond the initial load. It doesn't ask for personal data. It just works.

The project proves that meaningful tools don't have to be complicated. Sometimes the most helpful thing you can build is something clear, calm, and always there when you need it.

---

*Built with HTML5, CSS3, and vanilla JavaScript. Open source and free to use.*
