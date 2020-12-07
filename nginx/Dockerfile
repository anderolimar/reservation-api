FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Create pass directory
WORKDIR /usr/pass

COPY .htpasswd ./

EXPOSE 3000