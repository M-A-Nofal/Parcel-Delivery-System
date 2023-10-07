FROM node:18.18.0-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

RUN yarn prisma generate
COPY prisma ./prisma/

COPY . .

EXPOSE 3000

CMD npm run dev
