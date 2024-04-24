FROM postgres:15-alpine

COPY ./init/**/*.sh /docker-entrypoint-initdb.d/
RUN chmod 777 /docker-entrypoint-initdb.d/00.install.sh

COPY ./init/**/*.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
