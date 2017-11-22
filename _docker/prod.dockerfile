FROM node:carbon-alpine

WORKDIR /opt/app
COPY . /opt/app

RUN npm --production --silent install

EXPOSE 9002
ENV NODE_ENV=production BANK_MONITOR_PORT=9002
CMD [ "node", "src/index.js" ]