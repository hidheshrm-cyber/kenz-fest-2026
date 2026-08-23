# KEN'Z TECHFEST 2026 Website Foundation

Official modern frontend foundation for **KEN'Z TECHFEST 2026** at **Kongunadu College of Engineering and Technology** (28 & 29 August 2026).

## Technology Stack
- **Core Architecture**: Modern ES6+ HTML5/CSS3 Component-Based Architecture
- **Build & Development Server**: Vite (Fast HMR)
- **Styling System**: CSS Custom Design Tokens (`variables.css`), Reset (`reset.css`), Keyframe Animations (`animations.css`), Glassmorphism & Cyberpunk Neon Pink theme
- **Animation System**:
  - `ParticleEngine.js`: Interactive HTML5 Canvas particle background with mouse physics
  - `ParallaxController.js`: 3D mouse parallax and scroll position depth engine
  - `ScrollObserver.js`: IntersectionObserver cinematic section scroll reveals
- **Mascot Identity**: Pink Panther (`MascotVisual.js`)

## Getting Started

### Prerequisites
- Node.js (v18+) or Python 3

### Running Locally with Vite / Node.js
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Locally with Python
```bash
python -m http.server 5173
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
d:/kenz-fest-2k26/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── config/
    │   └── festConfig.js
    ├── styles/
    │   ├── variables.css
    │   ├── reset.css
    │   ├── animations.css
    │   └── main.css
    ├── animations/
    │   ├── ParticleEngine.js
    │   ├── ParallaxController.js
    │   └── ScrollObserver.js
    └── components/
        ├── Navbar.js
        ├── MascotVisual.js
        ├── SectionWrapper.js
        ├── EventCardShell.js
        └── Footer.js
```
