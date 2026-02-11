# ADHD Profile Management System

A modern, accessible web application built with React and TypeScript, designed to help individuals with ADHD manage their profiles, tasks, and daily routines through an intuitive interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installed Packages](#installed-packages)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Development](#development)
- [Key Features](#key-features)
- [Code Style Guidelines](#code-style-guidelines)
- [Resources](#resources)

## 🎯 Overview

The ADHD Profile Management System provides a user-friendly interface for profile management with features specifically designed for individuals with ADHD. Built with modern web technologies, it offers a responsive, accessible, and performant experience across all devices.

## 🏗️ Architecture

### Framework & Build Tools
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### UI Framework & Components
- **shadcn/ui** - Accessible component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless accessible components including:
  - `@radix-ui/react-accordion` - Collapsible content sections
  - `@radix-ui/react-alert-dialog` - Modal dialogs
  - `@radix-ui/react-slot` - Component composition

### State Management & Utilities
- **class-variance-authority (CVA)** - Component variant management
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes intelligently
- **tailwindcss-animate** - Animation utilities for Tailwind

### Theme & Styling
- **Custom theme provider** - Dark/light mode support
- **Open Sans font** - Clean, readable typography
- **Blue-accent color scheme** - Optimized for readability

## 📂 Project Structure

```
ADHD_Profile/
├── src/
│   ├── components/
│   │   ├── profile/              # Profile-specific components
│   │   │   ├── Profile.tsx       # Main profile container
│   │   │   ├── about.tsx         # About section
│   │   │   ├── footer.tsx        # Footer component
│   │   │   ├── header.tsx        # Header/navigation
│   │   │   ├── hero.tsx          # Hero banner
│   │   │   ├── pricing.tsx       # Pricing information
│   │   │   ├── services.tsx      # Services showcase
│   │   │   ├── testimonials.tsx  # User testimonials
│   │   │   └── theme-provider.tsx # Theme context
│   │   └── ui/                    # shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       └── ...               # Additional UI components
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-mobile.ts         # Mobile detection hook
│   │   ├── use-mobile.tsx
│   │   └── use-toast.tsx         # Toast notification hook
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn helper)
│   ├── assets/                    # Static assets
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles & theme variables
├── public/                        # Public static files
├── index.html                     # HTML entry point
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript base config
├── tsconfig.app.json             # TypeScript app config
├── tsconfig.node.json            # TypeScript node config
├── vite.config.ts                # Vite configuration
├── components.json               # shadcn/ui configuration
├── eslint.config.js              # ESLint configuration
└── README.md                     # Project documentation
```

## 📦 Installed Packages

### Core Dependencies
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "typescript": "^5.x"
}
```

### UI & Styling Packages
```json
{
  "@radix-ui/react-accordion": "^1.x",
  "@radix-ui/react-alert-dialog": "^1.x",
  "@radix-ui/react-slot": "^1.x",
  "class-variance-authority": "^0.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x",
  "tailwindcss": "^3.x",
  "tailwindcss-animate": "^1.x"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.x",
  "vite": "^5.x",
  "eslint": "^9.x",
  "@typescript-eslint/parser": "^8.x",
  "@typescript-eslint/eslint-plugin": "^8.x"
}
```

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary: `hsl(208 100% 50%)` - Bright blue
- Background: `hsl(0 0% 100%)` - Pure white
- Foreground: `hsl(0 0% 20%)` - Dark gray
- Muted: `hsl(0 0% 90%)` - Light gray

**Dark Mode:**
- Primary: `hsl(208 100% 55%)` - Lighter blue
- Background: `hsl(0 0% 8%)` - Near black
- Foreground: `hsl(0 0% 95%)` - Light gray
- Muted: `hsl(0 0% 30%)` - Medium gray

### Typography
- **Font Family**: Open Sans
- **Weights**: 300-800 available
- Optimized for readability and accessibility

### Component Architecture

The application uses a modular component structure:

1. **Profile Components** (`src/components/profile/`)
   - `Profile.tsx` - Main profile container
   - `header.tsx` - Navigation and branding
   - `hero.tsx` - Hero section
   - `about.tsx` - About information
   - `services.tsx` - Service offerings
   - `pricing.tsx` - Pricing plans
   - `testimonials.tsx` - User reviews
   - `footer.tsx` - Footer content
   - `theme-provider.tsx` - Theme context

2. **UI Components** (`src/components/ui/`)
   - Reusable shadcn/ui components
   - Built with Radix UI primitives
   - Fully typed with TypeScript
   - Accessible by default

3. **Custom Hooks** (`src/hooks/`)
   - `use-mobile.ts` - Responsive breakpoint detection
   - `use-toast.tsx` - Toast notification management

4. **Utilities** (`src/lib/utils.ts`)
   - `cn()` function for className merging
   - Type-safe utility functions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ADHD_Profile.git
cd ADHD_Profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 💻 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### Adding New shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Components will be automatically added to `src/components/ui/` with proper TypeScript types.

### Configuration Files

#### Build & Development
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript base configuration
- `tsconfig.app.json` - TypeScript app configuration
- `tsconfig.node.json` - TypeScript node configuration

#### Code Quality
- `eslint.config.js` - ESLint rules and configuration
- Strict TypeScript checking enabled
- React hooks rules enforced
- Unused variables flagged

#### UI Components
- `components.json` - shadcn/ui configuration
- Defines component paths and styling preferences

## 🎯 Key Features

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimized

### Responsive Design
- Mobile-first approach
- Custom mobile detection hook (`use-mobile.ts`)
- Fluid typography and spacing

### Theme Support
- Dark/Light mode toggle
- System preference detection
- Persistent theme selection via `theme-provider.tsx`

### Performance
- Vite for fast HMR (Hot Module Replacement)
- Code splitting and lazy loading
- Optimized production builds

## 📝 Code Style Guidelines

### TypeScript
- Strict type checking enforced
- No implicit `any` types
- Unused variables/imports flagged as errors

### React
- Functional components with hooks
- Props interfaces for type safety
- React Refresh enabled for better DX

### Styling
- Tailwind CSS utility classes
- Component variants with CVA
- Custom CSS variables for theming in `index.css`

## 🔐 Environment

The application is configured for:
- Development on `http://localhost:5173`
- Production builds output to `dist/` directory
- Static assets served from `public/` directory

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: This project uses modern web technologies and best practices for building accessible, performant React applications. The component library is extensible through shadcn/ui, making it easy to add new UI components as needed.