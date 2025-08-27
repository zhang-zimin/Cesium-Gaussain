# Multi-stage Dockerfile: build with Node, serve with nginx

FROM node:18-alpine AS build
WORKDIR /app

# Install build deps
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM nginx:stable-alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built site
COPY --from=build /app/dist /usr/share/nginx/html
# Copy Cesium static assets so CESIUM_BASE_URL = "/Cesium/" works
COPY --from=build /app/node_modules/cesium/Build/Cesium /usr/share/nginx/html/Cesium

# Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
