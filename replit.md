# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## PropAssure Website (`artifacts/prop-assure`)

Full B2B marketing website for PropAssure — a UK property compliance company.

- **Framework**: React + Vite, Tailwind CSS, wouter routing, shadcn/ui components
- **Brand**: Green (#72B801), Blue (#0186c8), White — logo at `attached_assets/PropAssure_1776429963639.png`
- **Pages**: Home (`/`), Services (`/services`), Industries (`/industries`), How It Works (`/how-it-works`), About (`/about`), Contact (`/contact`)
- **Components**: `Navbar`, `Footer` — both use the real logo image via `@assets` alias

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
