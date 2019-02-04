var db = require("../models");

module.exports = function(app) {
  // Get all colleges and universities name
  app.get("/api/colleges", function(req, res) {
    db.Universities.findAll({}).then(function(dbColleges) {
      res.json(dbColleges);
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
