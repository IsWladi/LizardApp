FROM node:20.11-alpine3.18
WORKDIR /app
COPY ./lizard/package*.json /app/
RUN npm i -g @angular/cli@17.1.1
RUN npm i -g @ionic/cli@7.1.1
RUN npm install
COPY ./lizard/* /app/
