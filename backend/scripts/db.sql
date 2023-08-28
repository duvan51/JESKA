CREATE DATABASE IF NOT EXISTS tiendaJK;

USE tiendaJK;

CREATE TABLE IF NOT EXISTS categories(
    id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500) NOT NULL
    
)



CREATE TABLE IF NOT EXISTS products(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    descripcion TEXT;
    price INTEGER NOT NULL
    category_id INT,
    FOREIGN KEY(category_id) REFERENCES categories(id)
)

INSERT INTO categories (title, descripcion) VALUES
   ("ZAPATOS", "toda clase de zapatos desde kdlkslkmdlsk");
   ("BOLSOS", "toda clase de zapatos desde kdlkslkmdlsk");

