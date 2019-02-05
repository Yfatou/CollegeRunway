-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

DROP DATABASE IF EXISTS collegerunway_db;
-- creates collegrunway_db
CREATE DATABASE collegerunway_db;

USE collegerunway_db;

INSERT INTO brands (colleges,seasons,brands,categories,createdAt,updatedAt)
VALUES ("Harvard University","Winter","American Eagle","Shoes", curdate(), curdate());

INSERT INTO brands (colleges,seasons,brands,categories,createdAt,updatedAt)
VALUES ("Stanford","Summer","Nike","Shoes", curdate(), curdate());

INSERT INTO brands (colleges,seasons,brands,categories,createdAt,updatedAt)
VALUES ("Northwestern","Fall","American Eagle","Tops", curdate(), curdate());


INSERT INTO brands (colleges,seasons,brands,categories,createdAt,updatedAt)
VALUES ("Yale","Fall","American Eagle","Tops", curdate(), curdate());


INSERT INTO brands (colleges,seasons,brands,categories,createdAt,updatedAt)
VALUES ("University of IL","Fall","American Eagle","Tops", curdate(), curdate());


