FROM node:12.18.1

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .babelrc .babelrc
COPY webpack.commom.js webpack.commom.js
COPY webpack.config.prod.js webpack.config.prod.js

RUN npm install yarn 
RUN npm install -g serve
RUN yarn
RUN yarn build

COPY . .

CMD ["serve","-s","dist"]