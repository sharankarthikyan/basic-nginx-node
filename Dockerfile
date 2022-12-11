FROM node:16.18-alpine
WORKDIR /app/
COPY ./app/package.json .
RUN npm install
COPY ./app/ .
CMD ["npm", "start"]