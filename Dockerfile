FROM node:10.21.0-alpine3.11 as base

EXPOSE 8080
EXPOSE 9229

ENV NODE_ENV=production

# ENV MONGODB_URI=mongodb://0.0.0.0:27017/zip-to-lat-and-lng

WORKDIR /app

COPY package*.json ./

# just production deps
# we use npm ci here so only the package-lock.json file is used
RUN npm ci \
    && npm cache clean --force

# stage 2 dev
FROM base as dev

ENV NODE_ENV=development

ENV PATH=/app/node_modules/.bin:$PATH

RUN npm install --only=development

WORKDIR /app/zip

CMD [ "nodemon", "--inspect=0.0.0.0:9229", "server.js" ]

# stage 3 prod
FROM base as prod

WORKDIR /app/zip

COPY . .

# RUN node seedData.js

CMD [ "node", "server.js" ]
