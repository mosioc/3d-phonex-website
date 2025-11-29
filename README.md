# 3D PhoneX


3D PhoneX Website is a React-based web application that provides an interactive 3D model viewer for smartphone products. The application features real-time customization capabilities, including color selection, scaling adjustments, and texture mapping.

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **3D Rendering**: Three.js
- **Styling**: Tailwind
- **Class Name Utility**: clsx
- **Linting**: ESLint

## Project Structure

```
src/
├── components/
│   ├── Lighter.tsx
│   ├── ModelView.tsx
│   └── models/
│       └── Samsung_galaxy_s22_ultra.jsx
├── store/
│   └── index.tsx          # Global state management
├── assets/                # Static assets
├── App.tsx                # Root component
├── App.css                # Global styles
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Core Features

### 1. State Management (`src/store/index.tsx`)

The application uses Zustand for lightweight global state management with the following features:

- **Color Customization**: Users can change the phone color from a predefined Solarized palette
- **Scale Control**: Adjust the 3D model scale (default: 0.08)
- **Reset Functionality**: Restore all settings to defaults

#### Color Palette (Solarized Theme)

The solarized palette includes 16 carefully selected colors for consistent UI/UX design.

#### Protected Parts

The `noChangeParts` array defines model components that remain unchanged during customization:

- Object_2
- Object_10
- Object_11
- Object_12
- Object_13
- Object_23
- Object_26

### 2. Application Root (`src/App.tsx`)

The main application component renders the `ModelView` component, which serves as the primary user interface for 3D model interaction.

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Project dependencies and scripts
- `eslint.config.js` - Code quality rules

## Usage

### Accessing Store State

```typescript
import usePhoneXStore from './store';

function MyComponent() {
  const color = usePhoneXStore((state) => state.color);
  const setColor = usePhoneXStore((state) => state.setColor);
  
  return (
    <button onClick={() => setColor('#dc322f')}>
      Change to Red
    </button>
  );
}
```

## Future Enhancements

- Additional phone models
- Extended texture library
- Real-time rendering optimization
- Mobile responsive design
- Animation controls
