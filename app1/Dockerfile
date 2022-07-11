FROM node:14
WORKDIR /app
COPY ./package*.json /usr/src/app/
RUN npm install
COPY . .
EXPOSE 8888
CMD [ "node", "index.js" ]
