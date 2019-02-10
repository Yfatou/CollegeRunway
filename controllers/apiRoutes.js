var db = require("../models");
var resultsView = require("../config/results.js");
module.exports = function(app) {
  // Get all the data from the brands table
 
  app.get("/api/results/:brand", function(req, res) {
    resultsView.all(req.params.brand, function(data) {
      console.log(data); 
      res.json(data);
       
    });
  });

  app.put("/api/Spring/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });


  });



  app.put("/api/Summer/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });



  app.put("/api/Autumn/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });


  });



  app.put("/api/Winter/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });

 

  app.post("/api/addcollege", function(req, res) {
    console.log(req.body);

    db.Colleges.destroy({where: {} });

    db.Colleges.bulkCreate(req.body, {returning: true});

   
  });

  app.post("/api/addseason", function(req, res) {
    console.log(req.body);

    db.SeasonTable.destroy({where: {} });
    db.SeasonTable.bulkCreate(req.body, {returning: true});
  });

  app.post("/api/addbrand", function(req, res) {
    console.log(req.body);

    db.Brands.destroy({where: {} });
    db.Brands.bulkCreate(req.body, {returning: true});
  });

  app.post("/api/adduser", function(req, res) {
    console.log(req.body);
    db.UserTable.create(req.body).then(function(dbUserTable) {

      console.log(dbUserTable);

      res.json(dbUserTable);
    });
  });
  // app.get("/api/brands/:colegeId", function (req, res) {
  //   db.Brand.findOne({ where: {
  //     collegeId: req.params.collegeId
  //   }
  //  }).then(function (BrandsData) {
  //     res.json(BrandsData);
  //   });
  // });



  //   app.get("/api/brands/:colleges/:seasons/:categories", function (req, res) {
  //     // var colleges = req.params.colleges.toLowerCase();
  //     // var seasons = req.params.seasons.toLowerCase();
  //     // var category = req.params.category.toLowerCase();
  //     db.Brands.findOne({where: {colleges:req.params.colleges.toLowerCase(), seasons: req.params.seasons.toLowerCase(), categories: req.params.categories.toLowerCase()}}).then(function(BrandsData) {
  //     res.send(BrandsData);
  //   });

  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
// };
}