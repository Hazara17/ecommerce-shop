# Use official Node.js LTS image
  FROM node:20-alpine

  # Set working directory inside container
  WORKDIR /app

  # Copy dependency files first (layer caching)
  COPY package*.json ./
  RUN npm install --production

  # Copy all source code
  COPY . .

  # Expose the app port
  EXPOSE 3000

  # Start the ecommerce server
  CMD ["node", "server.js"]
