# Next.js 16 standalone — Low-Ops: HTTP port 8000, GET /ready
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output

FROM node:20-bookworm-slim AS base
WORKDIR /app

# --- deps: full install (devDependencies required for `next build`) ---
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# --- build ---
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Do not set NODE_ENV=production before build — some CI images do; that can skip devDeps on `npm ci`.
# This layer only runs `next build`, which outputs `.next/standalone`.
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- run: minimal runtime image ---
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8000

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

RUN groupadd --gid 1001 nodejs \
  && useradd --uid 1001 --gid nodejs --shell /bin/false nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --chown=nextjs:nodejs docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

USER nextjs
WORKDIR /app

EXPOSE 8000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
