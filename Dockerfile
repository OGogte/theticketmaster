FROM node:20-alpine3.16 as development

ENV NODE_ENV development

WORKDIR /react-app

# Install Dependencies

COPY ./package.json /react-app
RUN npm install

COPY . .

CMD npm start

EXPOSE 3000
