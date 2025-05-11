FROM node:lts-alpine AS build

WORKDIR /app

# Enable and prepare Yarn 4
RUN corepack enable
RUN corepack prepare yarn@4.6.0 --activate

# Set registry globally so Next.js SWC can download
RUN yarn config set npmRegistryServer "https://registry.npmjs.org" --home

# Copy project files
COPY package.json yarn.lock .yarnrc.yml ./

# Install dependencies
RUN yarn install --immutable

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN yarn build

# Stage 2: Run the app
FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app ./

# Enable Corepack and activate Yarn 4 at runtime
RUN corepack enable
RUN corepack prepare yarn@4.6.0 --activate

EXPOSE 3000
CMD ["yarn", "start"]