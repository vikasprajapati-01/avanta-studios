# Avanta Studios

Avanta Studios is a React website for a game development studio focused on bringing Indian mythology and cultural storytelling to life through interactive experiences. The current landing page presents the studio, highlights the mythology-inspired project **Matsya Avtar**, and includes the first version of an Avanta Store route.

## Features

- Animated landing-page hero carousel featuring Fortnite, Spiderman, and Call of Duty artwork
- Automatic carousel playback with previous, next, and indicator controls
- Promotional video section for **The Preserver**
- Studio introduction focused on mythology-inspired game development
- History, vision, mission, and project information cards
- Light and dark themes persisted with `localStorage`
- Responsive navigation built with reusable React components
- Initial `/shop` route with Avanta Store navigation
- Scroll-based blur, reveal, and image expansion animations
- Social links in the footer for YouTube, Instagram, Twitter, and Facebook

## Tech Stack

- React 19
- React Router 7
- Vite
- Tailwind CSS 4
- GSAP
- React Icons
- ESLint

## Project Structure

```text
frontend/
├── public/                 # Logos, artwork, fonts, and public media
├── src/
│   ├── assets/             # Imported images and video
│   ├── components/         # Shared page sections and UI components
│   ├── data/               # Store navigation data
│   ├── pages/Shop/         # Store page
│   ├── App.jsx             # Application routes and page composition
│   ├── index.css           # Global styles, theme variables, and animations
│   └── main.jsx            # React entry point
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Requirements

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
git clone https://github.com/vikasprajapati-01/avanta-studios.git
cd avanta-studios/frontend
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

The site will be available at the local URL printed by Vite, normally `http://localhost:5173`.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint across the frontend:

```bash
npm run lint
```

## Available Routes

| Route | Purpose |
| --- | --- |
| `/` | Avanta Studios landing page |
| `/shop` | Avanta Store entry page |

The navigation includes future destinations for studio information and store categories, while the currently wired application routes are the landing page and `/shop`.

## Design and Theming

The interface uses CSS custom properties for its color system. The theme toggle switches between the default light palette and a dark palette, then stores the selected preference under the `theme` key in the browser's local storage.

Several sections use CSS scroll-driven animations, including blur transitions, reveal effects, and full-width image expansion. These effects are defined in the component stylesheets and `src/index.css`.

## Media and Branding

Project media is stored in:

- `frontend/public/` for files referenced by public URL paths
- `frontend/src/assets/` for files imported directly by React components

The public assets include the Avanta logo, game artwork, background images, a custom Proxima Nova font, and the introductory video used by the hero section.

## Development Notes

The site is currently an evolving studio showcase. The `/shop` route provides the store navigation foundation, while additional store category pages, dedicated About pages, and contact destinations can be added as the product experience expands.
