FROM node:12

WORKDIR /usr/src/server/
USER root
COPY ./ ./
RUN yarn

RUN yarn build

CMD ["yarn", "start:prod"]