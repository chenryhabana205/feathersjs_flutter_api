FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3030

RUN mkdir -p /data/files/

VOLUME /data/files/

CMD ["npm", "run", "start"]