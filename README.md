# Bigweb - React Template

## Description

A base frontend template for client-side React applications.
Designed to provide a modern, performant, and easily extensible stack with strict typing, minimal state management, and a composable design system.

---

## Tech Stack

### Framework & Design

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### State Management

- [Zustand](https://zustand-demo.pmnd.rs/)

### Typing & Validation

- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)

### Testing & Linting

- [Vitest](https://vitest.dev/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/)

---

## Requirements

- Node.js version 18 or higher
- npm (comes with Node.js) or yarn
- Recommended code editor: VSCode with TypeScript and ESLint extensions
- Git CLI for version control and cloning the repository

## Installation

```bash
git clone https://github.com/your-username/bigweb-react-template.git
cd bigweb-react-template
npm install
```

---

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run linter               |
| `npm run test`    | Run tests                |

---

## Basic Structure

```
src/
├── components/      # UI components (shadcn + custom)
├── store/           # Zustand stores
├── hooks/           # Custom hooks
├── pages/           # App pages (route-based)
├── lib/             # Utility libraries (e.g. zod schemas)
├── assets/          # Static assets
├── App.tsx          # Root component
└── main.tsx         # Entry point
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  
You are required to give appropriate credit to the original author in any derived work or distribution.
