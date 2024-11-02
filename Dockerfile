# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# expose the port
EXPOSE 5170

CMD ["npm", "run", "dev"]
