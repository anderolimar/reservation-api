FROM node:12

# Create app directory
WORKDIR /usr/src

# Install app dependencies
COPY package*.json ./

RUN npm install

# Futuramente obter configuraçãoes do banco de dados de fonte segura
COPY knexfile.js ./ 

COPY index.js ./
COPY app ./app/
COPY server ./server/
COPY swagger ./swagger/

RUN npm install pm2 -g

EXPOSE 3001

CMD ["npm", "run", "init"]