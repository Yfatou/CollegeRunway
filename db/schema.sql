 use  collegerunway_db;
  DROP VIEW IF EXISTS `MostTopsView`;
 CREATE VIEW `MostTopsView` AS
SELECT collegerunway_db.Colleges.name,collegerunway_db.brands.brands as Tops,COUNT(*) as Total
FROM collegerunway_db.UserTables left join 
collegerunway_db.Colleges on collegerunway_db.UserTables.CollegeId=collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.Tops
GROUP BY  collegerunway_db.Colleges.name,collegerunway_db.brands.brands;


  DROP VIEW IF EXISTS `MostBottomsView`;
 CREATE VIEW `MostBottomsView` AS
SELECT collegerunway_db.Colleges.name,collegerunway_db.brands.brands as bottoms,COUNT(*) as Total
FROM collegerunway_db.UserTables left join 
collegerunway_db.Colleges on collegerunway_db.UserTables.CollegeId=collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.bottoms
GROUP BY  collegerunway_db.Colleges.name,collegerunway_db.brands.brands;



  DROP VIEW IF EXISTS `MostShoesView`;
 CREATE VIEW `MostShoesView` AS
SELECT collegerunway_db.Colleges.name,collegerunway_db.brands.brands as shoes,COUNT(*) as Total
FROM collegerunway_db.UserTables left join 
collegerunway_db.Colleges on collegerunway_db.UserTables.CollegeId=collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.shoes
GROUP BY  collegerunway_db.Colleges.name,collegerunway_db.brands.brands;



  DROP VIEW IF EXISTS `MostAccessoriesView`;
 CREATE VIEW `MostAccessoriesView` AS
SELECT collegerunway_db.Colleges.name,collegerunway_db.brands.brands as Accessories,COUNT(*) as   Total
FROM collegerunway_db.UserTables left join 
collegerunway_db.Colleges on collegerunway_db.UserTables.CollegeId=collegerunway_db.Colleges.collegeid 
LEFT JOIN brands
ON collegerunway_db.brands.brandid = collegerunway_db.UserTables.Accessories
GROUP BY  collegerunway_db.Colleges.name,collegerunway_db.brands.brands;


 


 