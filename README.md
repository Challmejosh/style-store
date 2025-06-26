# Style Store Boutique

Style Store Boutique is a modern e-commerce web application built with React, Vite, and Tailwind CSS. It features a clean UI, product browsing, filtering, and a shopping cart experience.

## Features

- ⚡ Fast Vite-powered development
- 🎨 Styled with Tailwind CSS
- 🛒 Shopping cart with context management
- 🔍 Product browsing and filtering
- 📱 Responsive design
- ✨ Modern UI components

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Bun (if using bun.lockb, otherwise use npm/yarn/pnpm)

### Installation

```bash
# Install dependencies
bun install
# or
npm install
# or
yarn install
```

### Running the Development Server

```bash
bun run dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```bash
bun run build
# or
npm run build
# or
yarn build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
  components/         # Reusable UI components
  contexts/           # React context providers (e.g., CartContext)
  data/               # Static data (e.g., products)
  hooks/              # Custom React hooks
  lib/                # Utility functions
  pages/              # Page components (About, Cart, Contact, etc.)
  App.tsx             # Main app component
  main.tsx            # Entry point
public/               # Static assets
```

## Customization

- Edit `src/data/products.ts` to update product listings.
- Modify components in `src/components/` to change UI or add features.
- Update Tailwind config in `tailwind.config.ts` for custom styles.

## License

MIT
