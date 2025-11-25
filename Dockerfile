FROM node:20-alpine as build
WORKDIR /app
# COPY ./package.json ./
COPY . .
RUN npm i
RUN npm run build-dev
# CMD ["sh", "/app/docker-entrypoint.sh"]
# RUN sh /app/docker-entrypoint.sh

# production environment
FROM nginx:stable-alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]