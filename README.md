# ITZFIZZ: Scroll-Driven Automotive Hero Section

A premium, highly interactive front-end web project featuring a stunning cinematic scroll-driven animation. This application showcases a high-fidelity sports car model that dynamically drives across the screen, complete with spinning wheels and glowing cinematic headlights, all controlled smoothly by the user's scroll progress.

## 🏗️ Architecture & Tech Stack

This project is built using modern web development standards and optimized for both desktop and mobile experiences at 60fps.

- **React 18 + Vite**: The underlying view library and extremely fast build tool/dev server. React's functional components and refs manage the DOM elements cleanly for the animation engine.
- **GSAP (GreenSock Animation Platform)**: The core animation engine. Specifically, `gsap.timeline()` and the `ScrollTrigger` plugin are used to effortlessly map the user's scrollbar progress to the car's horizontal translation, wheel rotation, and headlight beam scaling.
- **Tailwind CSS**: A utility-first CSS framework used for rapid, precise, and responsive styling. It facilitates the cinematic backdrop, dark-mode styling, and complex CSS rendering like multi-layered box-shadows, gradients, filters (blurs for lighting effects), and mix-blend-modes without writing heavy traditional SCSS.
- **Responsive Fluid Layout**: The UI combines CSS Grid (for modular stats laying down into a 2-column grid on small displays) and absolute positioning (for the car). Dynamic viewport unit assignments correctly scale the car based on the user's screen dimensions.

## ✨ Key Features

1. **Scroll-Scrubbing Animation**: Instead of an automatic timeline, the primary animation is linked to the scrollbar footprint using GSAP's `scrub` mechanism.
2. **Dynamic Realistic Lighting**: Custom headlights use layered glowing divs, backdrop filtering, and `mask-image`/`clip-path` CSS properties to give the illusion of a volumetric light beam fading off.
3. **Advanced Wheel Mechanics**: Highly realistic multi-layered vector DOM elements simulate high-end sports rims. The wheels synchronize rotation with the car's scrolling progression.
4. **Cinematic Intro**: Upon page load, standard entrance animations introduce the textual elements, while a "flicker on" effect breathes life into the car's headlights before the user starts scrolling.

## 🚀 How To Run Locally

It's very easy to get this project up and running on your local machine.

### Prerequisites
- Node.js (version 16 or newer recommended)
- npm (Node Package Manager)

### Installation & Execution

1. **Open your terminal** and navigate to the project directory.
   ```bash
   cd d:/itzfizz/project
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```
   *(This will install React, GSAP, Tailwind CSS, and Vite).*

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   - Open your web browser.
   - Navigate to the local URL provided by Vite, typically **`http://localhost:5173/`**.

### Building for Production
To bundle the project for a production deployment (creating a `.dist` directory with minified assets):
```bash
npm run build
```
