// *************************************************************************//
// htmlRoutes.js - Definition and creation of a set of routes
// These routes will be used for sending users to the various html pages
// *************************************************************************//

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // This route loads the homepage index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // This route loads the season page spring.html
  app.get("/Spring/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/spring.html"));
  });

  // This route loads the season page summer.html
  app.get("/Summer/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/summer.html"));
  });

  // This route loads the season page autumn.html
  app.get("/Autumn/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/autumn.html"));
  });

  // This route loads the season page winter.html
  app.get("/Winter/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/winter.html"));
  });

  // This route loads the result page resultpage.html
  app.get("/resultspage/:collegeid", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/resultspage.html"));
  });
};
