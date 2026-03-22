# React Assignment: Task Manager

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717.svg?style=flat&logo=github)](https://github.com/harshraj-jadeglobal/task-manager)

A fast, fully responsive, and minimalist task management application built with **React** and **Vite**. The project implements a clean, professional interface using standard design tokens, providing reliable task lifecycle management directly in the browser.

## Features

- **Professional UI**: Clean, professional board layout optimized for efficient workflow.
- **Task Lifecycle Management**: Create, read, update (status transitions), and delete tasks dynamically.
- **Advanced Filtering**: Instant, in-memory filtering by status, priority, and text-based search.
- **Theming**: Built-in support for Light and Dark modes using structured design tokens directly in CSS properties.
- **Responsive Layout**: Collapsible sidebar and an adaptable split-pane detailed view.
- **Optimized Rendering**: Built with React `useMemo` and `useCallback` for heavily optimized performance, preventing unnecessary rendering on state mutations.

## Tech Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) for sub-second HMR and rapid production builds.
- **Styling Architecture**: Scoped Component CSS with global CSS custom properties (variables) for native light/dark mode execution.
- **Code Quality**: Strict linting via ESLint v9.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation & Launch

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshraj-jadeglobal/task-manager.git
   cd task-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Preview:**
   Navigate to the local URL provided by Vite (typically `http://localhost:5173`).

## System Architecture

- **State Management**: Zero-dependency architecture relying on native React hooks (`useState`, `useRef`). Derived state computation is aggressively cached via `useMemo`.
- **Theming System**: Leveraging CSS Custom Properties (`data-theme="dark"`) on the document body to trigger repaints, fully avoiding costly React tree re-renders on theme swaps.
- **Seed Data**: Pre-seeded functional database simulates an active remote payload to demonstrate functional UI capabilities out of the box.

