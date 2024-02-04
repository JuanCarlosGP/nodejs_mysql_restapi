-- Archivo no necesario en el proyecto, únicamnete aclarativo.
CREATE DATABASE IF NOT EXISTS restapi;
USE restapi;
CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45)DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)
