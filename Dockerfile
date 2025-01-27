FROM node:18-alpine

# Instala o OpenSSL e outras dependências necessárias
RUN apk add --no-cache openssl

# create destination directory
RUN mkdir -p /usr/src/lupasil-api
WORKDIR /usr/src/lupasil-api

# Update and install dependency
RUN apk update && apk upgrade
RUN apk add git
# docker-compose bash command dependency
RUN apk add bash

# Install app dependencies
COPY ./package.json .
RUN yarn install

# Bundle app source
COPY . .

# run
CMD ["yarn", "start"]