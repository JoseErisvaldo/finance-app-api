docker rm -f finance-app-postgres

docker run -d \
 --name finance-app-postgres \
 -e POSTGRES_PASSWORD=password \
 -e POSTGRES_USER=root \
 -e POSTGRES_DB=financeapp \
 -p 5432:5432 \
 postgres

cd src/db/postgres/migrations && node exec.js
