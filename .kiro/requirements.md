# Requirements Document

## Introduction

SheSafe is a static, responsive website built with HTML and CSS that serves as a daily safety companion for women. The site provides quick access to emergency contacts, practical safety tips, daily safety tools, and a contact form — all wrapped in a clean, modern UI with a soft pink or green color theme. No backend is required; the site is fully client-side.

## Glossary

- **Website**: The SheSafe static HTML/CSS site delivered in a browser
- **User**: A person visiting the SheSafe website
- **SOS_Button**: A prominently styled button in the Emergency section that visually highlights emergency action
- **Navigation_Bar**: The top-level navigation component linking to all major sections
- **Contact_Form**: The HTML form in the Contact section accepting name, email, and message fields
- **Safety_Card**: A styled card component used to display tips, tools, or information items
- **Viewport**: The visible area of the browser window at any given screen size

## Requirements

---

### Requirement 1: Page Structure and Navigation

**User Story:** As a user, I want a clear navigation bar and consistent page structure, so that I can quickly jump to any section of the site.

#### Acceptance Criteria

1. THE Website SHALL include a navigation bar at the top of the page containing links to Home, Emergency, Safety Tips, Daily Tools, and Contact sections.
2. WHEN a user clicks a navigation link, THE Website SHALL scroll smoothly to the corresponding section.
3. THE Website SHALL display the site title "SheSafe" and tagline "Empowering Women with Safety and Confidence" prominently in the Home section.
4. THE Navigation_Bar SHALL remain accessible and legible at all viewport widths down to 320px.

---

### Requirement 2: Emergency Section

**User Story:** As a user in a stressful situation, I want immediate access to emergency numbers and a prominent SOS button, so that I can act quickly without searching.

#### Acceptance Criteria

1. THE Website SHALL include an Emergency section containing a visually prominent SOS_Button.
2. THE Website SHALL display the following emergency contact numbers within the Emergency section: Police (100), Women Helpline (1091), and Ambulance (108).
3. WHEN a user views the Emergency section on a mobile device, THE Website SHALL display the SOS_Button and all emergency numbers without horizontal scrolling.
4. THE SOS_Button SHALL be styled with a distinct color (red or high-contrast) that differentiates it from all other interactive elements on the page.

---

### Requirement 3: Safety Tips Section

**User Story:** As a user, I want to read categorized daily safety tips, so that I can stay informed about staying safe while traveling, online, and in public.

#### Acceptance Criteria

1. THE Website SHALL include a Safety Tips section containing tips organized into at least three categories: Travel Safety, Online Safety, and Public Places Safety.
2. THE Website SHALL display each safety tip category using a Safety_Card component.
3. WHEN a user hovers over a Safety_Card on a pointer device, THE Website SHALL apply a visible hover effect (such as a shadow or color shift) to the card.
4. THE Safety Tips section SHALL contain a minimum of three tips per category.

---

### Requirement 4: Daily Tools Section

**User Story:** As a user, I want to learn about practical safety tools and techniques, so that I can be better prepared in everyday situations.

#### Acceptance Criteria

1. THE Website SHALL include a Daily Tools section containing information about recommended safety apps.
2. THE Website SHALL include an explanation of the fake call trick within the Daily Tools section.
3. THE Website SHALL include basic self-defense tips within the Daily Tools section.
4. THE Website SHALL present each tool or tip topic using a Safety_Card component with an icon and a short description.
5. WHEN a user hovers over a Daily Tools Safety_Card on a pointer device, THE Website SHALL apply a visible hover effect consistent with the Safety Tips section cards.

---

### Requirement 5: Contact Section

**User Story:** As a user, I want to send a message through the website, so that I can reach out with questions or feedback.

#### Acceptance Criteria

1. THE Website SHALL include a Contact section containing a Contact_Form with fields for name, email, and message.
2. THE Contact_Form SHALL mark the name, email, and message fields as required inputs.
3. WHEN a user submits the Contact_Form with an invalid or empty email address, THE Website SHALL display a validation message indicating the email field is invalid.
4. WHEN a user submits the Contact_Form with any required field empty, THE Website SHALL prevent submission and indicate which fields are incomplete.

---

### Requirement 6: Responsive and Accessible Design

**User Story:** As a user on any device, I want the site to display correctly and be easy to use, so that I can access safety information regardless of my screen size.

#### Acceptance Criteria

1. THE Website SHALL render a usable layout at viewport widths of 320px, 768px, and 1280px without content overflow or broken layouts.
2. THE Website SHALL use Google Fonts for all body and heading typography.
3. THE Website SHALL apply a consistent soft color theme using pink or green as the primary palette throughout all sections.
4. THE Website SHALL use CSS hover effects on all interactive card and button elements.
5. THE Website SHALL use icons (inline SVG or icon font) alongside card titles and section headings to improve visual clarity.
6. WHILE a user is viewing the site on a mobile viewport (width below 768px), THE Navigation_Bar SHALL collapse or adapt to prevent horizontal overflow.
