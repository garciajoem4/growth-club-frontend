FROM node:18.17.0-alpine3.18
WORKDIR /
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
CMD ["npm", "dev"]