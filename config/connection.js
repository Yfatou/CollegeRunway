var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "d3wfsdx1gpktsvdq", 
    password: "z9zrchtysfo31pwa",
    database: "zhlrnag6rlrvremc"

}); 

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;