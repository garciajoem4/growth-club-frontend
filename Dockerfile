# Build stage
FROM node:21-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine AS runner

# Copy build output to Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# (Optional) Replace default nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
