# OrtizHub

OrtizHub is Ortiz Imana Jnr's author and digital-products website for sharing books, resources, articles, and ways to connect.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ortizhub/src/data/books.ts` — book catalog and book detail content.
- `artifacts/ortizhub/src/data/blog-posts.ts` — blog article copy, metadata, and related-product links.
- `artifacts/ortizhub/src/pages/` — Home, About, Books, book details, Digital Products, Blog, article details, and Contact pages.
- `artifacts/ortizhub/src/components/share-buttons.tsx` — reusable page-sharing controls.
- `artifacts/ortizhub/index.html` and `src/App.tsx` — Google Analytics tag and in-app page-view tracking.

## Architecture decisions

- Gumroad remains the checkout and digital-download delivery provider. Do not build Stripe checkout unless Ortiz asks to switch after the digital product files are ready.
- The Blog listing and article detail pages read from the shared blog-posts data file.

## Product

Visitors can explore Ortiz Imana Jnr's books and digital products, read articles, subscribe to updates, contact Ortiz, and share selected pages with their audience.

## User preferences

- Keep the existing Gumroad checkout and delivery flow; leave the connected Stripe integration unused for now.

## Gotchas

- Update `blog-posts.ts` with each approved article as it is provided; do not publish sample or placeholder blog content.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
