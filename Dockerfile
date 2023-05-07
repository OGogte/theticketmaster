FROM node:20-alpine3.16 as development

ENV NODE_ENV development
WORKDIR /react-app

# Install Dependencies

COPY ./package.json /react-app
RUN npm install

COPY . .

ENV HOST="0.0.0.0"
ENV PORT="80"

EXPOSE 80

CMD [ "npm" , "start" ]
