# Build stage
FROM node:20-alpine AS base

ARG NODE_ENV

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --production=false

# Expose the port the app runs on
EXPOSE 3001

# Define the development build

FROM base as dev

# Set default NODE_ENV to development unless overridden at build time with --build-arg NODE_ENV=production
ENV NODE_ENV ${NODE_ENV:-development}

COPY . .

CMD npm run dev

# Define the production build

FROM base as prod

# Set default NODE_ENV to production unless overridden at build time with --build-arg NODE_ENV=development
ENV NODE_ENV ${NODE_ENV:-production}

RUN npm ci --production=false

COPY . .

RUN npm run build

CMD npm run start