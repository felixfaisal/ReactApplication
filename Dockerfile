FROM node:12 

ADD . ./code 
WORKDIR /code 

RUN npm install 
ENTRYPOINT [ "npm","start" ]
