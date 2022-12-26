FROM node:19-alpine3.15
WORKDIR /app
COPY package.json .
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .
EXPOSE 3000
RUN npm run test
CMD ["npm", "run", "start"]