FROM node:23-alpine3.19 as base

EXPOSE 8080

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

# just production deps
# we use npm ci here so only the package-lock.json file is used
RUN npm config list \
    && npm ci \
    && npm cache clean --force

# stage 2 dev
# testing
FROM base as dev

ENV NODE_ENV=development

ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app

RUN npm install --only=development

WORKDIR /app/zip

CMD [ "nodemon", "--inspect=0.0.0.0:9229", "server.js" ]

## Stage 3 (copy in source)
FROM base as source

WORKDIR /app/zip

COPY . .

# stage 4 test
FROM source as test

ENV NODE_ENV=test
ENV PATH=/app/node_modules/.bin:$PATH

COPY --from=dev /app/node_modules /app/node_modules

RUN eslint .

# stage 5 prod
FROM source as prod

# RUN node seedData.js

CMD [ "node", "server.js" ]
