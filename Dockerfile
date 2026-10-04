# ---------- Stage 1: Build the React app ----------
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency files first so Docker can cache the npm install layer
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve with nginx ----------
FROM nginx:alpine

# Replace the default nginx config with ours
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the production build from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
