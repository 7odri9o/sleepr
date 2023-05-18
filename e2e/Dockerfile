FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN ls -la
RUN pwd

RUN npm install -g pnpm
RUN pnpm install

CMD ["pnpm", "test"]