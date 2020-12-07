FROM node:12

# Create app directory
WORKDIR /usr/src

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY index.js ./
COPY app ./app/
COPY server ./server/

RUN npm install pm2 -g

EXPOSE 3001

CMD ["pm2-runtime", "index.js"]