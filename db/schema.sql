DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db;          
USE employee_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,3),
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);