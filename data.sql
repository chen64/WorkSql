DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name varchar(50),
  cost decimal(10,2),
  stock int,
  PRIMARY KEY (id)
);

insert into products(product_name, department_name, cost, stock)
values("phone", "electronic" , "40", "100"),
			("marker", "supplies", "3.5", "100"),
            ("pen", "supplies", "2.5", "100"),
            ("pencil", "supplies", "1", "100"),
            ("computer", "electronic", "120", "100"),
            ("laptop" , "electronic", "70.5", "100"),
            ("mango", "food", "2", "100"),
            ("apple", "food", "2.5", "100"),
            ("banana", "food", "1.5", "100"),
            ("berry", "food", "3", "100");
