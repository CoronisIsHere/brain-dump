README.txt
CSCI1170 A3 W2026 — Info Dump Website
======================================

OVERVIEW
--------
This project is a 3-page personal website built with HTML, CSS, and JavaScript.
It was reused and extended from Assignment 1/2 with full CSS styling added.
The site covers my personal interests, the history of the RMS Carpathia,
and a media page with audio, video, and an embedded YouTube video.

======================================
FILE STRUCTURE & RELATIVE PATHS
======================================

Root/
├── index.html         — Home page
├── page2.html         — Carpathia history page
├── page3.html         — Media page
├── main.js            — Shared JavaScript (all pages)
├── README.txt         — This file
├── style.css          — Main stylesheet (all pages linked here)
├── images/
│   ├── Caterpillar.png   — Site favicon / gallery image
│   ├── carpathia1.jpg    — Painting of Carpathia (small canvas)
│   ├── carpathia2.jpg    — Large art piece of Carpathia and crew
│   └── carpathia3.jpg    — Photo of sunken Carpathia wreck
├── audio/
│   └── Drag Path - TOP.mp3  — Twenty One Pilots - Drag Path (audio)
└── videos/
    └── Devils-Day.mp4       — HRM Mascot Showdown video

======================================
CSS SELECTORS — LOCATIONS & PURPOSE
======================================

1. UNIVERSAL SELECTOR (*)
   File: style.css — Line: "* { box-sizing: border-box; margin: 0; padding: 0; }"
   Purpose: Resets default margin/padding and sets consistent box-sizing across all elements.

2. MULTIPLE SELECTOR
   File: style.css — "nav.sidebar a, nav.sidebar button { ... }"
   Purpose: Applies identical styling (font, padding, hover) to both anchor links and buttons inside the sidebar nav to keep them visually consistent.

3. CHILD SELECTOR (>)
   File: style.css — "nav.sidebar > ul > li { ... }"
   Purpose: Targets only direct li children of the nav's ul, not nested lists deeper in the DOM. Applies list-style:none and bottom margin.

4. SIBLING SELECTOR (~)
   File: style.css — ".theme-label ~ li { ... }"
   Purpose: Removes top-border separators from all li siblings that follow the
   .theme-label element (the "Theme" text label in the nav).

5. ADJACENT SIBLING SELECTOR (+)
   File: style.css — "nav.sidebar > ul > li + li { ... }"
   Purpose: Adds a subtle top border between consecutive nav list items to visually separate them, without affecting the first item.

6. ATTRIBUTE SELECTOR
   File: style.css — "a[href^='http'] { ... }" and "input[type='text'], input[type='email'], textarea { ... }"
   Purpose (links): Styles external links (those starting with "http") with a dashed underline to visually distinguish them from internal navigation links.
   Purpose (inputs): Applies consistent background, border, and focus styles to all text and email inputs and text areas using the type attribute.

7. PSEUDO-ELEMENT SELECTOR (::before)
   File: style.css — "h2::before { content: '▶ '; ... }"
   Purpose: Inserts a decorative arrow character before every h2 heading using
   CSS-generated content, without modifying the HTML.

======================================
JAVASCRIPT FUNCTIONS
======================================

FILE: main.js (shared across all pages)

--- setTheme(theme) ---
Purpose: Applies a visual colour theme to the page.
Input:   theme (string) — one of "light", "dark", or "ocean"
Output:  Removes any existing theme class from <body>, adds the appropriate class, and saves the selection to localStorage for persistence across page loads.
Example: setTheme("ocean") → adds class "theme-ocean" to body, saves to localStorage
Dependent: CSS variables in style.css for --bg, --text, --nav-bg, etc.

--- restoreTheme() (IIFE) ---
Purpose: Immediately restores the user's previously saved theme on page load.
Input:   None (reads from localStorage key "infodump-theme")
Output:  Calls setTheme() with the saved value if found.

--- Active Nav Link Highlighting ---
Purpose: Bolds and styles the nav link that corresponds to the current page.
Input:   window.location.pathname
Output:  Adds class "active" to the matching anchor element.
Note:    CSS .active class applies pink colour and bold weight (style.css).

--- Table Row Hover (distanceTable) ---
Purpose: Highlights table rows on mouseover using green background.
Input:   mouseover / mouseout events on tbody tr elements
Output:  Updates inline backgroundColor style on hovered row.
Dependent: #distanceTable must exist in DOM (page2.html only)

--- loadQuiz() ---
Purpose: Dynamically builds the quiz HTML from quizData array and injects it into the #quiz container div.
Input:   None (uses global quizData array)
Output:  Populates #quiz element with radio button groups for each question.
Dependent: quizData array, #quiz element present in DOM
Called:  window.addEventListener("load", loadQuiz)

--- submitQuiz() ---
Purpose: Scores the user's quiz answers by comparing selected radio values to correct answers in quizData, then displays a result message.
Input:   DOM radio button selections (input[name="q{index}"]:checked)
Output:  Updates #result element with score out of 10 and a feedback message.
Conditional messages:
  - 10/10 → "Perfect score! You are a Titanic expert"
  - 7–9   → "Great job! You know a lot!"
  - 4–6   → "Not bad, but you can improve."
  - 0–3   → "Keep studying the Titanic!"
Dependent: quizData array, #result element in DOM (page2.html only)
Called:  submitQuiz button onclick (page2.html)

--- Table Styling Notes ---
The #distanceTable is wrapped in a .table-wrapper div which provides overflow-x: auto for mobile responsiveness (horizontal scroll if needed). The table includes a <caption> element styled as a header bar.
Columns: Ship name (bold, pink, font-heading) | Distance (normal text).
Alternating row colours use nth-child(even/odd) on tbody tr.
Hover highlights the full row and turns text accent colour.
On mobile, the wrapper extends edge-to-edge using negative margins.

--- sortTable() (inline in page2.html) ---
Purpose: Sorts the #distanceTable rows from closest to farthest distance.
Input:   Table rows in #distanceTable tbody
Output:  Reorders rows by ascending integer value parsed from "How Far Away" column.
Called:  "Sort by Distance" button onclick (page2.html)

--- submitGuestBook() (inline in index.html) ---
Purpose: Validates and "submits" the Home page guest book form.
Input:   #guestName (required), #guestEmail, #favTopic, #guestMessage (required)
Output:  Shows success or error message in #formResult element.
Validation: Name and message are required fields.

--- submitMediaForm() (inline in page3.html) ---
Purpose: Validates and "submits" the Media page feedback form.
Input:   #mediaName (required), #favMedia, #mediaComment
Output:  Shows success or error message in #mediaResult element.

======================================
CSS LAYOUT TECHNIQUES
======================================

FLEXBOX — Used in:
  - .main-layout (flex row: sidebar + content area)
  - .page-wrapper (flex column: hero + layout + footer)
  - nav.sidebar (flex column: stacked nav items)
  - Mobile nav (flex row, wrapping, via @media max-width: 600px)

GRID — Used in:
  - .photo-gallery (auto-fit minmax grid for responsive image gallery)
    Desktop: multiple columns; Tablet: 2 columns; Mobile: 1 column

======================================
RESPONSIVE DESIGN
======================================

Three breakpoints are implemented via CSS media queries (style.css):

DESKTOP (> 900px):
  - Sidebar on the left (200px wide), content area fills the rest
  - Photo gallery: auto-fit columns (3+)
  - Full padding and typography

TABLET (≤ 900px):
  - Sidebar narrows to 160px
  - Photo gallery: 2 columns
  - Slightly reduced padding

MOBILE (≤ 600px):
  - Sidebar becomes a horizontal top bar (flex-wrap)
  - Nav items become compact pill buttons
  - Photo gallery: 1 column
  - Content area padding reduced
  - iframe collapses to full-width, 220px height
  - h2::before decorative arrows hidden

======================================
ACCESSIBILITY NOTES
======================================
- All images include descriptive alt text
- ARIA labels on nav, audio, video, iframes, and forms
- aria-current="page" marks the active nav link
- aria-live="polite" on form result and quiz result elements
- Colour contrast maintained in all three themes
- Semantic HTML: <header>, <nav>, <main>, <section>, <footer>
- Form labels are explicitly associated with inputs via for/id
- No empty links or broken href attributes

======================================
REFERENCES & ASSETS
======================================
- Carpathia images: available by searching "Carpathia" on Google
- Caterpillar.png: my own icon
- Audio: "Drag Path" by Twenty One Pilots
- Video: "Devils-Day.mp4" — my own footage from HRM Mascot Showdown
- YouTube embed: https://www.youtube.com/embed/qLTUxq1lHp4
- External links:
    https://www.cunard.com/en-us/cunard-stories/180-years-of-cunard
    https://www.britannica.com/topic/Carpathia
    https://en.wikipedia.org/wiki/RMS_Carpathia
- CSS design: original — built from scratch for this assignment
