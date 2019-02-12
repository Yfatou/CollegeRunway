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

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });


   // index route loads view.html
   app.get("/Spring/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/spring.html"));
  });


    // index route loads view.html
    app.get("/Summer/:id", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/summer.html"));
    });

    
      // index route loads view.html
  app.get("/Autumn/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/autumn.html"));
  });


    // index route loads view.html
    app.get("/Winter/:id", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/winter.html"));
    });
  

        // index route loads view.html
        app.get("/resultspage/:collegeid", function(req, res) {
          res.sendFile(path.join(__dirname, "../views/resultspage.html"));
        });
      

  // // cms route loads cms.html
  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};