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

