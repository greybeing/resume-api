FROM node:14.17.6

WORKDIR /app

ADD package.json /app/package.json

RUN npm install 

ADD . /app

#EXPOSE 9100

CMD ["npm", "run", "start"]

