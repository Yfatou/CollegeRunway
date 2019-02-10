Create database collegerunway_db;
USE collegerunway_db;

CREATE TABLE Colleges (

  id int NOT NULL AUTO_INCREMENT,
  `college_name` varchar(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO Colleges (college_name)
VALUES 
("Stanford"),
 ("Harvard"),
("Northwestern"),
 ("Yale University"),
 ("UIC")




 CREATE TABLE Brands (

  id int NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO Brands (brand_name)
VALUES 
("Forever 21"),
 ("Adidas"),
("Nike"),
 ("Hollister"),
 ("H&M")




CREATE TABLE Seasons (

  id int NOT NULL AUTO_INCREMENT,
  `season_name` varchar(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO seasons (season_name)
VALUES 
("Winter"),
 ("Summer"),
("Fall"),
 ("Autumn")


 CREATE TABLE Users (

  id int NOT NULL AUTO_INCREMENT,
  collegesid int Not null,
  seasonsid int not null,
  brandsid int not null,
  shirtsid int not null,
  pantsid int not null,
  shoesid int not null,
  accessoriesid int not null,
  PRIMARY KEY (id),


foreign KEY (collegesid) references Colleges(id),
foreign key (seasonsid) references Seasons(id),
foreign key (shirtsid) references Brands(id),
foreign key (pantsid) references Brands(id),
foreign key (shoesid) references Brands(id),
foreign key (accessoriesid) references Brands(id)
);