# Cashy Design System

A modern, accessible design system built with React, TypeScript, and Storybook. Features a comprehensive component library with full dark mode support and design tokens extracted from Figma.

## 🎨 Features

- **Design Tokens**: CSS custom properties generated from Figma variables
- **Dark Mode**: Full theme support with seamless light/dark switching
- **Accessible**: WCAG compliant components with proper ARIA labels
- **Type-Safe**: Built with TypeScript for better developer experience
- **Documented**: Interactive documentation powered by Storybook
- **Modern Stack**: React 18, Vite, and latest tooling

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start Storybook
npm run storybook

# Start Vite dev server
npm run dev
```

### Build

```bash
# Build Storybook
npm run build-storybook

# Build library
npm run build
```

## 📦 Components

### Button
A versatile button component with multiple variants and states.

**Variants:**
- Primary - Main call-to-action
- Secondary - Alternative actions
- Tertiary - Low-emphasis actions
- Danger Bold - Destructive actions (high emphasis)
- Danger Subtle - Destructive actions (low emphasis)

**Features:**
- Icon support (left/right)
- Loading states
- Disabled states
- Icon-only mode
- Three sizes (small, medium, large)

## 🎨 Design Tokens

Design tokens are automatically generated from Figma and include:

- **Colors**: Semantic color system with light/dark modes
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Radii**: Border radius values

Tokens are available as CSS custom properties in `src/tokens/variables.css`.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Storybook 8** - Component documentation
- **CSS Custom Properties** - Theming system

## 📖 Documentation

Visit the Storybook documentation to explore all components interactively:

```bash
npm run storybook
```

## 🤝 Contributing

This is a design system for the Cashy project. Contributions should follow the established patterns and design tokens.

## 📄 License

MIT

## 🔗 Links

- [Figma Design File](https://figma.com) - Design source
- [Storybook](http://localhost:6006) - Component documentation (local)

---

Built with ❤️ by the Cashy team
