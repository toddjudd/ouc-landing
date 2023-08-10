#base image
FROM node:latest
#set working dir
WORKDIR /app

#add app node mod to path
ENV PATH /app/node_modules/.bin:$PATH

#install Cache and App Dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
# RUN npm install -g --silent react-scripts@3.3.0
RUN npm install -g serve

COPY ./build /app

CMD ["serve", "-l","3000", "-s", "/app"]
