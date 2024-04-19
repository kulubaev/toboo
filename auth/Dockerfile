FROM node:alpine

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

ARG ENV=production
ENV NODE_ENV $ENV

COPY --chown=node:node package* ./
RUN npm install --no-package-lock --silent

COPY --chown=node . .

CMD npm run $NODE_ENV


