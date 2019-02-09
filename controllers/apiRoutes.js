var db = require("../models");

module.exports = function(app) {
  // Get all the data from the brands table
  app.get("/api/brands", function(req, res) {
    db.BrandsTable.findAll({}).then(function(BrandsData) {
      res.json(BrandsData);
    });
  });

  app.get("/api/colleges", function(req, res) {
    db.College.findAll({}).then(function(dbColleges) {
      res.json(dbColleges);
    });
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

  // app.get("/api/brands/:colleges", function (req, res) {
  //   db.Brands.findOne({ where: { colleges: req.params.colleges } }).then(function (BrandsData) {
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