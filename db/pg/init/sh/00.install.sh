#!/bin/bash
echo "user $POSTGRES_USER" >&2
echo "database $POSTGRES_DB" >&2
echo "host $POSTGRES_HOST" >&2
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname="$POSTGRES_DB"<<-EOSQL
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   select * FROM pg_extension;
EOSQL
