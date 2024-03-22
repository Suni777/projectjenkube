FROM node:19
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]
