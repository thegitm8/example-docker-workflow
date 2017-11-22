FROM docker-wf-example-prod-image
ENV NODE_ENV=development BANK_MONITOR_PORT=9002
RUN npm i -g --silent nodemon
CMD ["./_docker/start_dev.sh"]