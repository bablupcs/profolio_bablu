# Bablu Singh — Portfolio

Personal portfolio site for **Bablu Singh**, a Full Stack Developer based in
Noida, India. Built with React and Vite, styled with Tailwind CSS and daisyUI.

## Sections

| Section | What it covers |
| --- | --- |
| Home | Intro, stats, tech stack and quick links to the live projects |
| About | Background, how I work, experience and education |
| Portfolio | Live products and applications, with in-page previews |
| Experience | Work history as a timeline |
| Services | CRM, CMS, websites, e-commerce and custom web apps |
| Skills | Languages, frameworks and tools |
| Contact | Contact details and an enquiry form |

## Features

- **In-page live previews** — Omee India and AI Tools Wallah open inside an
  embedded browser modal with desktop and mobile views, so visitors can browse
  them without leaving the page.
- **Dark mode** — follows the OS colour scheme on first visit, remembers the
  choice in `localStorage`, and is applied before first paint so there is no
  flash of the wrong theme.
- **Animated hero** — drifting gradient blobs, a dotted grid and floating code
  glyphs, all CSS-only and disabled under `prefers-reduced-motion`.
- **Responsive** — single-column layouts and a slide-down menu on small screens.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3 + daisyUI 4
- react-scroll for section navigation
- react-icons, react-typed
- ESLint

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # production build into dist/
npm run preview # serve the production build
npm run lint    # lint the project
```

## Project structure

```
src/
├── App.jsx              # section order
├── index.css            # Tailwind layers, theme tokens, shared card styles
├── data/
│   └── projects.jsx     # single source of truth for the project list
└── components/
    ├── Navbar.jsx       ├── Home.jsx        ├── About.jsx
    ├── Portfolio.jsx    ├── Experiance.jsx  ├── Services.jsx
    ├── Skill.jsx        ├── Contacts.jsx    ├── Footer.jsx
    ├── LivePreview.jsx  # embedded browser modal + its context
    └── ThemeToggle.jsx  # light/dark switch
```

## Contact

- Email — bablupcs123@gmail.com
- LinkedIn — [bablu-singh-518589195](https://www.linkedin.com/in/bablu-singh-518589195/)
- GitHub — [bablupcs](https://github.com/bablupcs)
