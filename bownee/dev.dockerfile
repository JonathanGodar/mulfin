FROM node

WORKDIR /user/node

COPY yarn.lock ./
COPY package.json ./
RUN yarn install

COPY tsconfig.json ./
ENV NODE_ENV=development



CMD ["yarn", "start"]