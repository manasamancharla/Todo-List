# Using Node.js as the base image
FROM node:14-alpine

# Setting the working directory
WORKDIR /app

# Copying package.json and package-lock.json files to the container
COPY package*.json ./

# Installing the project dependencies
RUN npm install

# Copying the rest of the project files
COPY . .

# Building the React project using Vite
RUN npm run build

# Running the application
CMD ["npm", "run","dev"]
