FROM node:20
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

ENV PORT_APP=80

EXPOSE $PORT_APP
CMD ["node", "dist/main.js"]