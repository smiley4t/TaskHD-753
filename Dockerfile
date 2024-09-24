# Base image (starting point)
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port the application runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
