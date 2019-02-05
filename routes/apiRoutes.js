var db = require("../models");

module.exports = function(app) {
  // Get all the data from the brands table
  app.get("/api/brands", function(req, res) {
    db.Brands.findAll({}).then(function(BrandsData) {
      res.json(BrandsData);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
