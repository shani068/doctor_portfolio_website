# ADHD Profile - Healthcare Platform

A modern, responsive healthcare platform for Dr. Dash Sidhu, featuring appointment booking, service information, and patient testimonials. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Overview

The ADHD Profile is a professional healthcare web application designed to showcase medical services, facilitate appointment bookings, and provide comprehensive information about ADHD treatment and related healthcare services. The platform features a modern, accessible interface optimized for both desktop and mobile devices.

## 🏗️ Architecture

### Core Technologies
- **React 19.2** - Modern React with latest concurrent features
- **TypeScript 5** - Type-safe development with strict checking
- **Vite 7** - Lightning-fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Framework & Components
- **shadcn/ui** - Accessible component library built on Radix UI primitives
- **Radix UI** - Headless accessible components including:
  - `@radix-ui/react-accordion` - Collapsible content sections
  - `@radix-ui/react-alert-dialog` - Modal dialogs
  - `@radix-ui/react-avatar` - User avatars
  - `@radix-ui/react-checkbox` - Form checkboxes
  - `@radix-ui/react-dialog` - Modal components
  - `@radix-ui/react-dropdown-menu` - Dropdown menus
  - `@radix-ui/react-label` - Form labels
  - `@radix-ui/react-popover` - Popover components
  - `@radix-ui/react-select` - Select dropdowns
  - `@radix-ui/react-separator` - Visual separators
  - `@radix-ui/react-slot` - Component composition
  - `@radix-ui/react-switch` - Toggle switches
  - `@radix-ui/react-tabs` - Tab interfaces

### Icons & Visuals
- **Lucide React** - Beautiful, consistent icon set (560+ icons)

### Form Management
- **React Hook Form 7.71** - Performant form validation and state management
- Native validation support
- TypeScript integration

### State Management & Utilities
- **class-variance-authority (CVA)** - Component variant management
- **clsx** - Conditional className utility
- **tailwind-merge** - Intelligent Tailwind class merging
- **tailwindcss-animate** - Animation utilities

### Theme & Styling
- **Custom theme provider** - Dark/light mode support with system preference detection
- **Open Sans font** - Clean, professional typography (300-800 weights)
- **Blue-accent color scheme** - Optimized for medical/healthcare context

## 📂 Project Structure

```
ADHD_Profile/
├── src/
│   ├── components/
│   │   ├── profile/                  # Feature components
│   │   │   ├── about.tsx            # About doctor section
│   │   │   ├── footer.tsx           # Footer with contact info
│   │   │   ├── header.tsx           # Navigation header
│   │   │   ├── hero.tsx             # Hero banner with CTA
│   │   │   ├── services.tsx         # Healthcare services grid
│   │   │   ├── testimonials.tsx     # Patient testimonials
│   │   │   └── theme-provider.tsx   # Theme context provider
│   │   └── ui/                       # shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── switch.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-mobile.tsx           # Mobile breakpoint detection
│   │   └── use-toast.tsx            # Toast notification system
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn helper)
│   ├── assets/                       # Static assets
│   ├── App.tsx                       # Root component with booking modal
│   ├── main.tsx                      # Application entry point
│   └── index.css                     # Global styles & CSS variables
├── public/                           # Public static files
├── index.html                        # HTML entry point
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript base config
├── tsconfig.app.json                # TypeScript app config
├── tsconfig.node.json               # TypeScript node config
├── vite.config.ts                   # Vite configuration
├── components.json                  # shadcn/ui configuration
├── eslint.config.js                 # ESLint configuration
└── README.md                        # Project documentation
```

## 📦 Installed Packages

### Core Dependencies
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.5.0",
  "typescript": "~5.8.5"
}
```

### UI & Component Libraries
```json
{
  "@radix-ui/react-accordion": "^1.4.3",
  "@radix-ui/react-alert-dialog": "^1.4.3",
  "@radix-ui/react-avatar": "^1.4.3",
  "@radix-ui/react-checkbox": "^1.4.3",
  "@radix-ui/react-dialog": "^1.4.3",
  "@radix-ui/react-dropdown-menu": "^2.4.3",
  "@radix-ui/react-label": "^2.4.3",
  "@radix-ui/react-popover": "^1.4.3",
  "@radix-ui/react-select": "^2.4.3",
  "@radix-ui/react-separator": "^1.4.3",
  "@radix-ui/react-slot": "^1.4.3",
  "@radix-ui/react-switch": "^1.4.3",
  "@radix-ui/react-tabs": "^1.4.3",
  "lucide-react": "^0.563.0"
}
```

### Form & Validation
```json
{
  "react-hook-form": "^7.71.1"
}
```

### Styling & Utilities
```json
{
  "tailwindcss": "^4.1.18",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^7.0.4",
  "eslint": "^9.18.0",
  "@eslint/js": "^9.18.0",
  "eslint-plugin-react-hooks": "^5.1.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "typescript-eslint": "^8.20.0",
  "globals": "^15.14.0"
}
```

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary: `hsl(208 100% 50%)` - Bright blue
- Primary Foreground: `hsl(0 0% 100%)` - White
- Background: `hsl(0 0% 100%)` - Pure white
- Foreground: `hsl(0 0% 20%)` - Dark gray
- Muted: `hsl(0 0% 90%)` - Light gray
- Muted Foreground: `hsl(0 0% 40%)` - Medium gray
- Border: `hsl(0 0% 85%)` - Light border
- Accent: `hsl(208 100% 95%)` - Light blue

**Dark Mode:**
- Primary: `hsl(208 100% 55%)` - Lighter blue
- Primary Foreground: `hsl(0 0% 100%)` - White
- Background: `hsl(0 0% 8%)` - Near black
- Foreground: `hsl(0 0% 95%)` - Light gray
- Muted: `hsl(0 0% 30%)` - Medium gray
- Muted Foreground: `hsl(0 0% 60%)` - Light gray
- Border: `hsl(0 0% 20%)` - Dark border
- Accent: `hsl(208 100% 15%)` - Dark blue

### Typography
- **Font Family**: Open Sans
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)
- **Line Heights**: Optimized for readability
- **Letter Spacing**: Standard tracking

### Animation & Motion
- **Border Radius**: 0.5rem (customizable via CSS variables)
- **Transitions**: Smooth 200ms ease-in-out
- **Animations**: Accordion, dialog, dropdown, popover
- **Keyframes**: Custom animations via tailwindcss-animate

## ✨ Key Features

### 1. Responsive Header & Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scroll to sections
- Theme toggle (light/dark mode)
- Professional branding

### 2. Hero Section
- Compelling call-to-action
- Doctor credentials display
- Quick stats (500+ patients, 15+ years, 98% satisfaction)
- Prominent booking button

### 3. Healthcare Services
Eight specialized service cards:
- ADHD Diagnosis & Treatment
- Anxiety & Depression Management
- Stress Management Counseling
- Sleep Disorder Treatment
- Behavioral Therapy
- Medication Management
- Family Counseling
- Group Therapy Sessions

Each service includes description and interactive hover effects.

### 4. About Doctor Section
- Professional qualifications
- Years of experience
- Specializations
- Treatment philosophy
- Education credentials

### 5. Patient Testimonials
- Real patient reviews
- Star ratings
- Avatar integration
- Responsive carousel layout

### 6. Interactive Booking Modal
- Comprehensive appointment form
- Service selection dropdown
- Date/time picker
- Reason for visit textarea
- Form validation with react-hook-form
- Accessible dialog component

### 7. Professional Footer
- Contact information
- Office hours
- Social media links
- Quick navigation
- Copyright information

### Technical Features

#### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles throughout
- Keyboard navigation support
- Screen reader optimized
- Focus management in modals
- Color contrast WCAG AA compliant

#### Performance
- Vite for instant HMR
- Code splitting enabled
- Lazy loading ready
- Optimized production builds
- Tree-shaking for smaller bundles
- Fast initial page load

#### Responsive Design
- Mobile-first approach
- Custom breakpoint detection hook
- Fluid typography scaling
- Adaptive layouts for all screen sizes
- Touch-friendly interface

#### Theme Support
- System preference detection
- Manual theme toggle
- Persistent theme selection (localStorage)
- Smooth theme transitions
- CSS custom properties for theming

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload (http://localhost:5173)
npm run dev

# Type-check TypeScript without emitting files
npm run type-check

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Development Server
- **URL**: `http://localhost:5173`
- **Hot Module Replacement**: Enabled
- **Fast Refresh**: React components update instantly
- **Error Overlay**: Helpful error messages

### Adding New shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Components will be added to `src/components/ui/` with:
- Full TypeScript types
- Customizable variants
- Accessibility built-in
- Theme integration

### Configuration Files

#### Build & Development
- **vite.config.ts** - Vite build configuration with React plugin
- **tsconfig.json** - Base TypeScript configuration
- **tsconfig.app.json** - Application TypeScript settings (strict mode)
- **tsconfig.node.json** - Node environment TypeScript settings

#### Code Quality
- **eslint.config.js** - ESLint rules with TypeScript support
  - Strict TypeScript checking
  - React hooks rules enforced
  - React Refresh plugin enabled
  - Unused variables flagged as errors

#### UI Components
- **components.json** - shadcn/ui configuration
  - Component paths defined
  - Styling preferences (Tailwind)
  - TypeScript enabled
  - CSS variables for theming

## 🎯 Component Architecture

### Profile Components (`src/components/profile/`)

1. **header.tsx** - Navigation component
   - Sticky positioning
   - Mobile responsive menu
   - Theme toggle
   - Smooth scroll navigation

2. **hero.tsx** - Landing section
   - Doctor introduction
   - Call-to-action button
   - Key statistics display
   - Gradient background

3. **services.tsx** - Services showcase
   - Grid layout (responsive)
   - 8 service cards with icons
   - Hover effects
   - Descriptions

4. **about.tsx** - Doctor information
   - Professional background
   - Qualifications
   - Experience highlights
   - Treatment approach

5. **testimonials.tsx** - Patient reviews
   - Review cards with avatars
   - Star ratings
   - Responsive grid layout
   - Real patient feedback

6. **footer.tsx** - Site footer
   - Contact details
   - Office hours
   - Social media links
   - Navigation links

7. **theme-provider.tsx** - Theme management
   - Context-based theme state
   - System preference detection
   - LocalStorage persistence
   - Theme toggle functionality

### UI Components (`src/components/ui/`)

Reusable shadcn/ui components with:
- Full TypeScript typing
- Radix UI primitives
- Customizable variants (CVA)
- Accessibility features
- Theme integration

### Custom Hooks (`src/hooks/`)

1. **use-mobile.tsx** - Responsive breakpoint detection
   - Detects screen width < 768px
   - Returns boolean for mobile state
   - Uses window.matchMedia API
   - Event listener cleanup

2. **use-toast.tsx** - Toast notification system
   - Toast state management
   - Add/remove/dismiss functions
   - Customizable duration
   - TypeScript typed

### Utilities (`src/lib/utils.ts`)

- **cn()** function - Intelligent className merging
  - Combines clsx and tailwind-merge
  - Handles conditional classes
  - Merges Tailwind utilities properly
  - Type-safe implementation

## 📝 Code Style Guidelines

### TypeScript
- **Strict mode enabled** - Maximum type safety
- **No implicit any** - All types must be explicit
- **Unused variables flagged** - Clean code enforcement
- **Interface over type** - Prefer interfaces for objects
- **Named exports** - Better tree-shaking

### React
- **Functional components only** - No class components
- **Hooks for state** - useState, useEffect, custom hooks
- **Props interfaces** - Type all component props
- **React Refresh enabled** - Fast development feedback
- **Memo for performance** - Use React.memo when needed

### Styling
- **Tailwind utility classes** - Primary styling method
- **CSS variables** - Theme customization in index.css
- **Component variants** - CVA for variant management
- **No inline styles** - Use Tailwind classes
- **Mobile-first** - Design for mobile, enhance for desktop

### File Organization
- **Components** - One component per file
- **Named exports** - Easier to refactor
- **Index files** - Barrel exports for cleaner imports
- **Hooks folder** - Separate custom hooks
- **Utils folder** - Pure utility functions

## 🔐 Environment & Deployment

### Development
- Port: `5173` (Vite default)
- Hot Module Replacement enabled
- Source maps for debugging
- Fast refresh for React components

### Production Build
- Output directory: `dist/`
- Minified JavaScript
- CSS optimization
- Asset optimization
- Code splitting enabled

### Static Assets
- Served from `public/` directory
- Direct file access in production
- No processing/transformation

## 📚 Resources & Documentation

### Official Documentation
- [React 19 Documentation](https://react.dev) - Latest React features
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - TypeScript guide
- [Vite Guide](https://vitejs.dev/guide) - Build tool documentation
- [shadcn/ui Docs](https://ui.shadcn.com) - Component library
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility CSS framework
- [Radix UI](https://www.radix-ui.com) - Accessible primitives
- [React Hook Form](https://react-hook-form.com) - Form validation
- [Lucide Icons](https://lucide.dev) - Icon set

### Learning Resources
- React patterns and best practices
- TypeScript with React
- Accessibility guidelines (WCAG 2.1)
- Responsive design principles
- Form validation strategies

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Review Checklist
- [ ] TypeScript types are correct
- [ ] Components are accessible
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Follows code style guidelines
- [ ] ESLint passes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React 19 + TypeScript 5 + Vite 7 + Tailwind CSS 4**

*A modern healthcare platform showcasing best practices in web development, accessibility, and user experience design.*