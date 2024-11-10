# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# The `dist` folder will be created at this point

# Use an empty command since we just want the build output
CMD ["echo", "Build complete. Use bind mount to access the dist folder."]
