# 90s Miami Aesthetic - Honzův bezvýznamný kamarád

A Vite React TypeScript project featuring authentic 90s Miami aesthetics with the Czech text "Honzův bezvýznamný kamarád". Inspired by Miami Vice, neon lights, and the vibrant 90s Miami scene.

## Features

- 🌴 **90s Miami Design** with:
  - Neon gradient backgrounds (hot pink, cyan, orange, purple)
  - Animated palm trees swaying in the breeze
  - Comic Sans MS font
  - Multiple neon-colored borders
  - Glowing text shadows with Miami colors
  - Floating diamond and sunset elements
  - Retro neon grid patterns
  - Backdrop blur effects
- 📱 Responsive design
- ⚡ Built with Vite for fast development
- 🔧 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn
   ```

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
yarn build
```

### Preview

Preview the production build:

```bash
yarn preview
```

## 90s Miami Aesthetic Elements

This project captures the essence of 90s Miami design with:

- **Neon Gradient Backgrounds**: Animated gradients featuring Miami's signature colors (hot pink, cyan, orange, purple)
- **Palm Trees**: Animated palm tree silhouettes that sway gently
- **Comic Sans MS**: The quintessential 90s font
- **Multiple Neon Borders**: Layered borders in Miami neon colors
- **Glowing Text Effects**: 3D text with neon glow animations
- **Floating Elements**: Diamond and sunset emojis with neon effects
- **Grid Patterns**: Animated neon grid backgrounds
- **Backdrop Blur**: Modern glass-morphism effects
- **Miami Colors**: Hot pink (#ff0080), Cyan (#00ffff), Orange (#ff8000), Purple (#8000ff)

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 Animations
- Google Fonts (Comic Sans MS)
- Backdrop Filter (glass-morphism)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
