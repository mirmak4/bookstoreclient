# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== INSTALL =====
RUN npm install -g npm@9.7.1
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# allow legacy for mui styles in angular 18
RUN npm ci --legacy-peer-deps
# Build the app
RUN npm run build
# ==== TEST =====
RUN npm run test:nowatch
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]