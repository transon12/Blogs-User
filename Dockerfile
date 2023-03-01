# build environment: giai doan build project
FROM node:lts-alpine3.12 as build


# tao folder trong container
WORKDIR /app


# copy toan bo project vao trong container
COPY . .



# cai dat thu vien
RUN yarn

RUN cp .env.prod .env

RUN cat .env

# build du an
RUN yarn build


# production environment: giao doan deploy de dung
FROM nginx:stable-alpine

# copy folder build, nginx.conf trong state build de deploy trn enginx
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

#export cong cua container cho phep host + cac container khac co the giao tiep
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
