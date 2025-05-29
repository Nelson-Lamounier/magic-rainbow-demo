FROM node:lts-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Enable and prepare Yarn 4
RUN corepack enable
RUN corepack prepare yarn@4.6.0 --activate

# Set registry globally
RUN yarn config set npmRegistryServer "https://registry.npmjs.org" --home

# Copy dependency files
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

# Build stage
FROM base AS builder
WORKDIR /app

# Enable Yarn 4
RUN corepack enable
RUN corepack prepare yarn@4.6.0 --activate

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN yarn build

# Production stage
FROM base AS runner
WORKDIR /app

# Install curl for health checks
RUN apk add --no-cache curl

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Enable Yarn 4 for runtime
RUN corepack enable
RUN corepack prepare yarn@4.6.0 --activate

# Copy only production files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs


HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:${PORT:-3000}/api/healthcheck || exit 1

CMD ["node", "server.js"]