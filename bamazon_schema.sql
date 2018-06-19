CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  product_name VARCHAR(70) NOT NULL,
  department_name VARCHAR (50) NOT NULL,
  price DECIMAL (10,2) NOT NULL, 
  stock_quantity INT NOT NULL
  
);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("ice cream", "grocery", 5.67, 100);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("eye cream", "cosmetics", 75.98, 450);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("carrot", "grocery", 1.23, 490);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("laptop", "tech", 345.90, 378);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("water", "grocery", 1.34, 456);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("desk", "furniture", 65.90, 385);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("banana", "grocery", 0.24, 987);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("foundation", "cosmetics", 34.67, 100);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("bluetooth speaker", "tech", 145.90, 253);

INSERT INTO products (product_name, department_name, 
price, stock_quantity)
VALUES ("mascara", "cosmetics", 37.45, 100);

SELECT * FROM products;





-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
