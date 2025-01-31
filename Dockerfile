FROM node:18-alpine

# Instala o OpenSSL e outras dependências necessárias
RUN apk add --no-cache openssl

# Cria o diretório de destino
RUN mkdir -p /usr/src/lupasil-api
WORKDIR /usr/src/lupasil-api

# Atualiza e instala dependências
RUN apk update && apk upgrade
RUN apk add git bash

# Copia o package.json e instala as dependências
COPY ./package.json .
RUN yarn install

# Copia o arquivo .env para o diretório da aplicação
COPY .env .

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Copia o restante do código
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Comando para rodar a aplicação
CMD ["yarn", "start"]