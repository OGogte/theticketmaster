FROM node:20-alpine3.16 as development

WORKDIR /app

# Install Dependencies

RUN ls
COPY ./package.json /app
RUN npm install

COPY . .

RUN npm run build --verbose

FROM nginx:1.23.4
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=development /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
