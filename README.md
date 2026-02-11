# ADHD Profile Management System

A modern, accessible web application designed to help individuals with ADHD manage their profiles, tasks, and daily routines through an intuitive interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

ADHD Profile is a specialized web application built with React and TypeScript, focusing on providing a distraction-free, user-friendly interface for individuals with ADHD. The application emphasizes clarity, accessibility, and ease of use through carefully designed UI components and interactions.

## ✨ Features

- **Profile Management**: Create and manage user profiles with customizable settings
- **Task Organization**: Structured task management tailored for ADHD needs
- **Responsive Design**: Fully responsive interface that works across all devices
- **Dark Mode Support**: Built-in dark/light theme toggle for reduced eye strain
- **Accessible UI**: WCAG-compliant components with keyboard navigation support
- **Modern Design**: Clean, minimalist interface using shadcn/ui components
- **Type-Safe**: Full TypeScript implementation for robust code quality

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon library
- **tw-animate-css** - Animation utilities for Tailwind

### State Management & Utilities
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **date-fns** - Date manipulation utilities
- **clsx & tailwind-merge** - Conditional class name management

### Development Tools
- **ESLint** - Code linting and quality checks
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React SWC** - Fast refresh and optimized builds

## 📁 Project Structure

```
ADHD_Profile/
├── src/
│   ├── components/       # Reusable UI components
│   │   └── ui/          # shadcn/ui component library
│   ├── lib/             # Utility functions and helpers
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and theme configuration
├── public/              # Static assets
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

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

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### Code Style

This project follows strict TypeScript and ESLint configurations:
- Type checking is enforced at build time
- Unused variables and imports are flagged
- React hooks rules are strictly enforced
- React refresh warnings are enabled for better DX

### Adding New Components

When adding shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Components will be automatically added to `src/components/ui/` with proper TypeScript types.

## 🎨 Design System

### Color Palette

The application uses a blue-accent color scheme optimized for readability:

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

- **Font Family**: Open Sans - Clean, readable sans-serif font
- **Font Weights**: 300-800 available for flexible typography

### Spacing & Layout

- Border radius: `0.5rem` default
- Consistent spacing using Tailwind's spacing scale
- Responsive breakpoints following Tailwind defaults

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Write meaningful commit messages
- Add TypeScript types for all new code
- Ensure all linting passes before submitting
- Test components across light and dark themes
- Maintain accessibility standards (WCAG 2.1 AA)
- Document complex logic with comments

## 🔐 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- The ADHD community for inspiration and feedback

---

**Note**: This project is designed with accessibility and user experience as top priorities, specifically tailored for individuals with ADHD to reduce cognitive load and improve focus.