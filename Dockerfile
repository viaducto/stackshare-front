FROM node:12-stretch

# USER node
WORKDIR /home/node/front

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm","start"]