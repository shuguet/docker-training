FROM node
MAINTAINER Sylvain Huguet sylvain@huguet.me
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]
