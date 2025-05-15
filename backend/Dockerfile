# Use official Node.js 18 image as the base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port the backend runs on
EXPOSE 5000

# Command to start the backend
CMD ["node", "server.js"]