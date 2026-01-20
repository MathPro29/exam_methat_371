# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Stage 2: Production stage
FROM node:20-alpine
# Install curl for healthcheck
RUN apk add --no-cache curl

WORKDIR /app

# Copy dependencies from builder
COPY --from=builder /app/node_modules ./node_modules
# Copy source code
COPY . .

# Create logs directory for the application
RUN mkdir -p logs

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Healthcheck to verify the backend is running
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:3000/api/demo || exit 1

# Start the application
CMD ["node", "server.js"]
