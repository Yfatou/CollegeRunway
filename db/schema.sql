-- ************************************************************************************
-- schema.sql - To be able to get the count needed to be displayed in the result table,
-- some complex/long queries should be made
-- For simplicity and cleaner code, views will be used
-- DISCLAIMER: Thank you to Phil who helped our group
-- ************************************************************************************

USE  collegerunway_db;

-- The MostTopView count the most popular brand of top in an university
-- It contains the name of the university and the total number of user who said that 
-- this brand was their top for Tops
DROP VIEW IF EXISTS `MostTopsView`;
CREATE VIEW `MostTopsView` AS
SELECT  collegerunway_db.Colleges.name,
        collegerunway_db.brands.brands as Tops,
        COUNT(*) as Total
FROM collegerunway_db.UserTables 
LEFT JOIN collegerunway_db.Colleges 
ON collegerunway_db.UserTables.CollegeId = collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.Tops
GROUP BY collegerunway_db.Colleges.name, collegerunway_db.brands.brands;

-- The MostBottomsView count the most popular brand of bottom in an university
-- It contains the name of the university and the total number of user who said that 
-- this brand was their top for Bottoms
DROP VIEW IF EXISTS `MostBottomsView`;
CREATE VIEW `MostBottomsView` AS
SELECT  collegerunway_db.Colleges.name,
        collegerunway_db.brands.brands as bottoms,
        COUNT(*) as Total
FROM collegerunway_db.UserTables 
LEFT JOIN collegerunway_db.Colleges 
ON collegerunway_db.UserTables.CollegeId = collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.bottoms
GROUP BY collegerunway_db.Colleges.name, collegerunway_db.brands.brands;

-- The MostShoesView count the most popular brand of shoes in an university
-- It contains the name of the university and the total number of user who said that 
-- this brand was their top for Shoes
DROP VIEW IF EXISTS `MostShoesView`;
CREATE VIEW `MostShoesView` AS
SELECT  collegerunway_db.Colleges.name,
        collegerunway_db.brands.brands as shoes,
        COUNT(*) as Total
FROM collegerunway_db.UserTables 
LEFT JOIN collegerunway_db.Colleges 
ON collegerunway_db.UserTables.CollegeId = collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.shoes
GROUP BY collegerunway_db.Colleges.name, collegerunway_db.brands.brands;

-- The MostShoesView count the most popular brand of Accessories in an university
-- It contains the name of the university and the total number of user who said that 
-- this brand was their top for Accessories
DROP VIEW IF EXISTS `MostAccessoriesView`;
CREATE VIEW `MostAccessoriesView` AS
SELECT  collegerunway_db.Colleges.name,
        collegerunway_db.brands.brands as Accessories,
        COUNT(*) as Total
FROM collegerunway_db.UserTables 
LEFT JOIN collegerunway_db.Colleges 
ON collegerunway_db.UserTables.CollegeId = collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.Accessories
GROUP BY  collegerunway_db.Colleges.name, collegerunway_db.brands.brands;


 


 