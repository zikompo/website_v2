# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

The main project is located in the `my-website/` directory. Navigate there before running commands:

```bash
cd my-website
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture Overview

This is a Next.js 15 personal website with the following key architectural patterns:

### App Router Structure
- Uses Next.js App Router with TypeScript
- Main pages: `/` (home), `/projects`, `/experiences`, `/reading`, `/writing`
- Dynamic routing for blog posts: `/writing/[slug]`

### MDX Content System
- Blog posts are stored as `.mdx` files in `app/writing/`
- Custom MDX utilities in `lib/mdx.ts` handle article metadata and dynamic imports
- Articles must export a `metadata` object with `title`, `date`, and `description`
- MDX components are configured in `mdx-components.tsx`

### Styling and UI
- Tailwind CSS with custom design system
- shadcn/ui components in `components/ui/`
- Custom theme system with dark/light mode support
- Multiple Google Fonts: Geist, Geist Mono, Roboto Mono, Crimson Pro

### Component Organization
- App-specific components in `app/components/`
- Reusable UI components in `components/ui/`
- Custom hooks in `hooks/`
- Layout components handle consistent page structure

### Key Configuration
- Next.js configured for MDX support with `@next/mdx`
- Image optimization configured for book cover sources (Google Books, Amazon, etc.)
- TypeScript with strict configuration
- ESLint for code quality

## Content Management

Writing content is managed through MDX files that must include metadata exports. The system automatically generates article listings and handles routing through the file system.