docker run \
    --name postgres \
    -e POSTGRES_USER=joao \
    -e POSTGRES_PASSWORD="123" \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker logs postgres
docker exec -it postgres psql --username joao --dbname heroes

CREATE TABLE warrior(id serial PRIMARY KEY, name VARCHAR(255) NOT NULL);

#mongodb

docker run \
    --name mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=JOAO \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -p 27017:27017 \
    -d \
    mongo:4
    
docker logs mongodb
