-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

-- DROP DATABASE IF EXISTS collegerunway_db;
-- creates collegrunway_db
CREATE DATABASE collegerunway_db;

USE collegerunway_db;

INSERT INTO Universities (name,createdAt,updatedAt)
VALUES ("Harvard University", curdate());

INSERT INTO Universities (name, createdAt,updatedAt)
VALUES ("Yale University", curdate(), curdate());

INSERT INTO Universities (name,createdAt,updatedAt)
VALUES ("Stanford University", curdate(),curdate());
