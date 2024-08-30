FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

ENV WATCHPACK_POLLING=true

CMD [ "npm", "run", "dev" ]