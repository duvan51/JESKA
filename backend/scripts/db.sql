CREATE DATABASE IF NOT EXISTS tiendaJK;

USE tiendaJK;

CREATE TABLE IF NOT EXISTS categories(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500) NOT NULL
    
)



CREATE TABLE IF NOT EXISTS products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descripcion TEXT,
    price INTEGER NOT NULL,
    category_id INT,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

INSERT INTO categories (id, title, descripcion) VALUES
   (1, "ZAPATOS", "toda clase de zapatos desde kdlkslkmdlsk"),
   (2, "BOLSOS", "toda clase de zapatos desde kdlkslkmdlsk");


INSERT INTO products (title, descripcion, price,category_id) VALUES
   ("converces", "zapatos color black", 25.000, 1 ),
   ("bolso chartold", "bolsxoskamls lskals laksalkm", 50.000, 2);


