// ===========================================================================//
// Need an ORM too in order to query views
// Sequelize can not query views
// ===========================================================================//

// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");

// To select all the data in a view
var resultsView = {
  all: function(viewname, cb) {
    orm.all(viewname, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = resultsView;
