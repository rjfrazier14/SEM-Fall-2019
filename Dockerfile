FROM node 

WORKDIR /app
	#apt-get update && \
    #apt-get upgrade -y && \
   # apt-get install -y git

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
 
CMD ["node","./hotburger-service.js/"]
