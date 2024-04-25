FROM node:alpine

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@17

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003
