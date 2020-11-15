# Specifies the base image we're extending
FROM node:9

# Specify the "working directory" for the rest of the Dockerfile
WORKDIR /app

# Install packages using NPM 5 (bundled with the node:9 image)
COPY ./package.json ./package.json

RUN npm install 

# Add application code
COPY ./app 


# Set environment to "development" by default
ENV NODE_ENV development

# Allows port 5000 to be publicly available
EXPOSE 5000

# The command uses nodemon to run the application
CMD ["npm", "start", "test"]
