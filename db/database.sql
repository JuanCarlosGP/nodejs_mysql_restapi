-- Archivo no necesario en el proyecto, únicamnete aclarativo.
CREATE DATABASE IF NOT EXISTS restapi;
USE restapi;
CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45)DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

INSERT INTO employee VALUES
    (1, 'John', 1000),
    (2, 'Joe', 2000),
    (3, 'Henry', 3000),
    (4, 'Sam', 4000),
    (5, 'Max', 5000);
