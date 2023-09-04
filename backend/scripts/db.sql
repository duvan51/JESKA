CREATE DATABASE IF NOT EXISTS tiendaJK;

USE tiendaJK;

CREATE TABLE IF NOT EXISTS categories(
    id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500) NOT NULL
    
);


CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories(id,title, descripcion) VALUES
    (2, "BOLSOS", "toda clase de gfgfg desde kdlkslkmdlsk");
   (1, "ZAPATOS", "toda clase de zapatos desde kdlkslkmdlsk");
   (2, "BOLSOS", "toda clase de gfgfg desde kdlkslkmdlsk");


INSERT INTO products (id, title, descripcion, price, category_id) VALUES
   (2, "zapatos marc", "asdasdsad", 135.000, 2);
   (1, "zapatos guccy", "asdasdsad", 125.000, 1);
   

