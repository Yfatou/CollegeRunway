// *********************************************************************//
// apiRoutes.js - Definition and creation of a set of routes
// These routes will be used for displaying and saving data to the db
// *********************************************************************//

// Dependencies
// =============================================================

// Import the models to use the database functions
var db = require("../models");

// Import the results to use the function allowinng us to query the views
var resultsView = require("../config/results.js");

module.exports = function(app) {

  // Get all the data from the brands table
  app.get("/api/results/:brand", function(req, res) {
    resultsView.all(req.params.brand, function(data) {
      console.log(data);
      res.json(data);
    });
  });

  // Update the choices of the user from the Spring page
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Spring/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Update the choices of the user from the Summer page
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Summer/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Update the choices of the user from the Autumn page
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Autumn/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Update the choices of the user from the Winter page
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Winter/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Add the usetr information inyto the user table
  app.post("/api/addcollege", function(req, res) {
    console.log(req.body);

    // Delete all the data
    db.Colleges.destroy({ where: {} });

    db.Colleges.bulkCreate(req.body, { returning: true });
  });


  app.post("/api/addseason", function(req, res) {
    console.log(req.body);

    db.SeasonTable.destroy({ where: {} });
    db.SeasonTable.bulkCreate(req.body, { returning: true });
  });

  app.post("/api/addbrand", function(req, res) {
    console.log(req.body);

    db.Brands.destroy({ where: {} });
    db.Brands.bulkCreate(req.body, { returning: true });
  });

  app.post("/api/adduser", function(req, res) {
    console.log(req.body);
    db.UserTable.create(req.body).then(function(dbUserTable) {
      console.log(dbUserTable);
      res.json(dbUserTable);
    });
  });

  app.get("/api/college/:userid", function(req, res) {
    db.UserTable.findOne({ where: { id: req.params.userid } }).then(function(Data) {
      res.json(Data);
    });
  });
};