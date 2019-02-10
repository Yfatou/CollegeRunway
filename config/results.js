// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");

var resultsView = {
  all: function(viewname, cb) {
    orm.all(viewname, function(res) {
      cb(res);
    });
  } 
  
};

// Export the database functions for the controller (catsController.js).
module.exports = resultsView;
