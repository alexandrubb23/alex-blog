# Copilot Instructions

## Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run lint       # ESLint via Next.js

# Database (Drizzle + PlanetScale)
npm run db:generate   # Generate migration files
npm run db:migrate    # Run migrations
npm run db:push       # Push schema directly
npm run db:studio     # Open Drizzle Studio
```

No test suite exists yet.

## Architecture

This is a Next.js 15 (App Router) personal profile/blog site backed by **PlanetScale serverless MySQL** via **Drizzle ORM**, with **TanStack Query v5** for data fetching and **Chakra UI v3** for components.

### Data Flow

1. **Database → API**: SQL queries live in `src/app/api/lib/sql/`. The `PlanetScale` singleton class (`planetscale.ts`) manages the DB connection and provides `cachedQuery()` with an LRU cache layer.
2. **API → Client**: Generic entity routes (`/api/[entity]` and `/api/[entity]/[id]`) serve all content types. Every route handler wraps its logic in `handleEntityRequestService`, which handles errors and returns `NextResponse`.
3. **SSR Hydration**: Dynamic pages use `hydratedPage.tsx` HOC, which prefetches data server-side into a `QueryClient` and passes it via `EntityHydrationProvider`. The client then picks up the already-hydrated cache.
4. **Client Fetching**: `factoryApiClient<T>(entity)` creates a typed `APIClient` for a given entity. Hooks like `useEntityQuery` and `useEntityItemQuery` wrap React Query's `useQuery` with consistent `queryKey` patterns and a 24-hour `staleTime`.

### Content Model

- Posts are stored as **Markdown with gray-matter frontmatter** in MySQL's `posts.content` column.
- The `topics` table maps posts to technology categories. `Technology` type is derived at runtime from the keys of `src/data/icons.ts`.
- `APIResponse` groups posts by topic: `{ id: Technology, name: string, data: PostData[] }`.
- Entity types are defined in `ENTITIES` constant: `certifications`, `exercises`, `pages`, `posts`, `contact`.

## Key Conventions

### Path Alias
All imports from `src/` use `@/` (e.g., `@/hooks`, `@/utils`, `@/app/api/lib/models`).

### Barrel Exports
Every component folder exports via `index.ts`. Import from the folder, not the file (e.g., `import { Blog } from '@/components'`).

### Environment Variables
All env vars are declared and validated with **Zod** in `src/env.js` using `@t3-oss/env-nextjs`. Always import `env` from `@/env` rather than accessing `process.env` directly.

Required env vars:
- `DATABASE_URL` — PlanetScale connection string
- `DATABASE_CACHE_TTL` — LRU cache TTL in ms
- `RESEND_API_KEY` — for contact form emails
- `NEXT_PUBLIC_BASE_URL` — base URL (defaults to production URL)
- `GOOGLE_VERIFICATION` — required in production only

### Query Key Conventions
- List queries: `[entity, queryFilter]`
- Single-item queries: `[singular(entity), id]` (using `pluralize` package)

### API Error Handling
API routes throw `HttpError` subclasses (`NotFoundError`, `InternalServerError`). `handleEntityRequestService` catches these and returns a `400` JSON error response.

### Zod Validation in API Routes
Each route defines its own `z.object()` schema and calls `parseQuery(schema, req)` to validate and parse `searchParams`.

### Chakra UI Theme
Custom tokens are in `src/theme.ts`:
- `primary`: `#6D54D0`
- `secondary` / `header`: `#F2EFE5`
- Custom fonts: `libre` (Libre Baskerville), `nothingYouCouldDo`
- Max container width: `980px`

### Markdown Rendering
Post content is parsed from Markdown to HTML via `remark` (`unified` + `remark-parse` + `remark-html`) in `src/utils/parseMarkdownResponseToHTML.ts`, with an in-memory `Map` cache keyed by `topic:id`.
