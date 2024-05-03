CREATE DATABASE plantdex_bdd;

DROP TABLE IF EXISTS plant CASCADE; 
DROP TABLE IF EXISTS "user" CASCADE; 

CREATE TABLE plante (id int PRIMARY KEY, 
nom varchar(255) NOT NULL, 
soleil varchar(50) not NULL,
arrosage int not NULL, 
categorie varchar(255) not NULL, 
image varchar(255) not null
);

CREATE TABLE "user" (id SERIAL PRIMARY KEY, 
pseudo varchar(50) not null,
email varchar(50) not null,
password varchar(255) not null,
role INT not null,
token varchar(255) null
);