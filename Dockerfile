FROM node:latest

WORKDIR /app

COPY package.json /app/

RUN npm install 

COPY . .

RUN npm run build

ARG DEFAULTPORT=3000

ENV PORT=${DEFAULTPORT}

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]