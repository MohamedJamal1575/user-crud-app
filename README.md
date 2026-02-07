# User CRUD Application

A modern **User Management (CRUD)** application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Lucide React**. The project demonstrates clean architecture, reusable components, API routes, pagination, and theme support.

This README is intentionally written in a **human-style**, explaining *what each important file does and why it exists*, focusing on **application logic** rather than shadcn/ui internals.

---

## Tech Stack

- **Next.js 14 (App Router)** – Full‑stack React framework
- **TypeScript** – Type safety and scalability
- **Tailwind CSS** – Utility‑first styling
- **shadcn/ui** – Accessible UI primitives
- **Lucide React** – Icon library
- **ESLint** – Code quality

---

## Project Structure Overview

```
user-crud-app/
│
├── public/                 # Static assets
├── src/
│   ├── app/                # App Router (pages, layouts, API)
│   ├── components/         # Reusable UI & feature components
│   ├── config/             # Application configuration
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & API helpers
│   ├── types/              # TypeScript type definitions
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## Root Configuration Files

### `package.json`
Defines project metadata, scripts, and dependencies. This is the entry point for managing libraries like Next.js, Tailwind, shadcn/ui, and Lucide React.

### `next.config.ts`
Contains Next.js configuration. Used for framework-level settings such as strict mode, image handling, or future customizations.

### `tsconfig.json`
TypeScript configuration that controls type checking, path aliases, and compiler behavior.

### `eslint.config.mjs`
Defines linting rules to maintain consistent code quality across the project.

### `postcss.config.mjs`
Configures PostCSS, required for Tailwind CSS processing.

### `components.json`
shadcn/ui configuration file. It controls styling conventions, paths, and Tailwind integration.

---

## Public Assets

### `public/*.svg`
Static SVG assets used by the application. These are served directly by Next.js without processing.

---

## App Router (`src/app`)

### `src/app/layout.tsx`
The root layout of the application.

Responsibilities:
- Defines global HTML structure
- Applies global styles
- Wraps the app with providers (theme, etc.)
- Ensures consistent layout across all pages

---

### `src/app/globals.css`
Global CSS file.

Includes:
- Tailwind base, components, and utilities
- Global theme variables
- Application-wide styling overrides

---

### `src/app/page.tsx`
The home page of the application.

Responsibilities:
- Renders the User Form
- Displays the User Data Table
- Acts as the main integration point for CRUD UI

---

## API Layer

### `src/app/api/users/route.ts`
Server-side API route for user operations.

Responsibilities:
- Handles **Create, Read, Update, Delete** logic
- Acts as the backend for the frontend UI
- Keeps data logic isolated from UI components

This demonstrates Next.js full‑stack capabilities without a separate backend.

---

## Providers

### `src/app/providers/theme-provider.tsx`
Manages application theming (light/dark mode).

Responsibilities:
- Wraps the app with theme context
- Syncs user preference with system settings
- Used by theme toggle components

---

## Components (Non‑shadcn)

### `src/components/Navbar.tsx`
Top navigation bar of the application.

Responsibilities:
- Displays application title
- Hosts theme toggle
- Provides consistent navigation UI

---

### `src/components/UserForm.tsx`
Form component for creating and editing users.

Responsibilities:
- Collects user input (name, email, etc.)
- Performs validation
- Triggers create/update actions
- Reusable for both add and edit flows

---

### `src/components/UserDataTable.tsx`
Displays user data in a table format.

Responsibilities:
- Renders list of users
- Shows edit & delete actions per row
- Integrates pagination
- Acts as the main data visualization layer

---

### `src/components/SharedPagination.tsx`
Reusable pagination component.

Responsibilities:
- Handles page navigation UI
- Works with different datasets
- Keeps pagination logic consistent across views

---

### `src/components/theme-toggle.tsx`
UI control for switching between light and dark themes.

Responsibilities:
- Interacts with Theme Provider
- Updates UI instantly
- Improves user experience

---

## Hooks

### `src/hooks/usePagination.ts`
Custom hook for pagination logic.

Responsibilities:
- Manages current page
- Calculates page ranges
- Keeps pagination state isolated from UI

---

### `src/hooks/useQueries.ts`
Centralized hook for API interactions.

Responsibilities:
- Fetches user data
- Triggers mutations (create/update/delete)
- Abstracts API calls from components

---

## Configuration

### `src/config/userSchema.ts`
Defines user validation rules and schema.

Responsibilities:
- Central source of truth for user data shape
- Helps with form validation and consistency

---

## Utilities

### `src/lib/api.ts`
API helper functions.

Responsibilities:
- Wraps fetch logic
- Centralizes API endpoint handling
- Simplifies error handling

---

### `src/lib/utils.ts`
Generic utility helpers.

Responsibilities:
- Common reusable functions
- Keeps components clean and readable

---

## Types

### `src/types/user.ts`
TypeScript definition for User.

Responsibilities:
- Defines user object structure
- Ensures type safety across forms, tables, and API

---

## shadcn/ui Components

Files inside `src/components/ui/` are **auto‑generated shadcn/ui primitives**.

They are:
- Reusable
- Accessible
- Styling-focused

These files are intentionally **not documented individually** in this README, as they are framework-provided building blocks rather than application logic.

---

## Getting Started

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

---

## Why This Architecture?

- Clear separation of concerns
- Scalable for real-world applications
- Easy to maintain and extend
- Demonstrates professional Next.js best practices

---

## Author

**Mohamed Jamal M**  
Frontend Developer | React | Next.js | TypeScript

---

## License

This project is for learning and portfolio purposes.

