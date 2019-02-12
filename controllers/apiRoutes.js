// *********************************************************************//
// apiRoutes.js - Definition and creation of a set of routes
// These routes will be used for displaying and saving data to the db
// *********************************************************************//

// Dependencies
// =============================================================

// Import the models to use the database functions
var db = require("../models");

// Import the results to use the function allowing us to query the views
var resultsView = require("../config/results.js");

module.exports = function(app) {
  // Display the result for a brand
  app.get("/api/results/:brand", function(req, res) {
    resultsView.all(req.params.brand, function(data) {
      console.log(data);
      res.json(data);
    });
  });

  // Update the choices of the user from the Spring page in the userTable
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Spring/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } }).then(
      function(dbPost) {
        res.json(dbPost);
      }
    );
  });

  // Update the choices of the user from the Summer page in the userTable
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Summer/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } }).then(
      function(dbPost) {
        res.json(dbPost);
      }
    );
  });

  // Update the choices of the user from the Autumn page in the userTable
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Autumn/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } }).then(
      function(dbPost) {
        res.json(dbPost);
      }
    );
  });

  // Update the choices of the user from the Winter page in the userTable
  // The user id from the homepage will be used as the query parameter
  app.put("/api/Winter/:id", function(req, res) {
    console.log(req.body);
    db.UserTable.update(req.body, { where: { id: req.params.id } }).then(
      function(dbPost) {
        res.json(dbPost);
      }
    );
  });

  // Add the college choosen by the user in the user table
  app.post("/api/addcollege", function(req, res) {
    console.log(req.body);

    // Delete all the data if exists
    db.Colleges.destroy({ where: {} });
    // Insert the informations entered by the user
    db.Colleges.bulkCreate(req.body, { returning: true });
  });

  // Add the season choosen by the user in the user table
  app.post("/api/addseason", function(req, res) {
    console.log(req.body);

    // Delete all the data if exists
    db.SeasonTable.destroy({ where: {} });
    // Insert the informations entered by the user
    db.SeasonTable.bulkCreate(req.body, { returning: true });
  });

  // Add the informations enretered by the user on the season page - favorite brands - in the user table
  app.post("/api/addbrand", function(req, res) {
    console.log(req.body);

    // Delete all the data if exists
    db.Brands.destroy({ where: {} });
    // Insert the informations entered by the user
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
