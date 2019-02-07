var db = require("../models");

module.exports = function (app) {
  // Get all the data from the brands table
  app.get("/api/brands", function (req, res) {
    db.Brands.findAll({}).then(function (BrandsData) {
      res.json(BrandsData);
    });
  });

  // app.get("/api/brands/:colleges", function (req, res) {
  //   db.Brands.findOne({ where: { colleges: req.params.colleges } }).then(function (BrandsData) {
  //     res.json(BrandsData);
  //   });
  // });

  // app.get("/api/brands/:colleges", function (req, res) {
  //   db.Brands.findOne({ where: { colleges: req.params.colleges } }).then(function (BrandsData) {
  //     res.json(BrandsData);
  //   });
  // });

  app.get("/api/brands/:colleges/:seasons/:categories", function (req, res) {
    // var colleges = req.params.colleges.toLowerCase();
    // var seasons = req.params.seasons.toLowerCase();
    // var category = req.params.category.toLowerCase();
    db.Brands.findOne({where: {colleges:req.params.colleges.toLowerCase(), seasons: req.params.seasons.toLowerCase(), categories: req.params.categories.toLowerCase()}}).then(function(BrandsData) {
    res.send(BrandsData);
  });

});

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};