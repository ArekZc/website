# To build and run with Docker:
#
#  $ docker build -t ng-quickstart .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ng-quickstart
#
FROM node:latest

RUN mkdir -p /panel /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /panel
COPY package.json /panel/
RUN npm install --unsafe-perm=true

COPY . /panel
RUN chown -R nodejs:nodejs /panel
USER nodejs

CMD npm start
