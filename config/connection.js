// Set up MySQL connection.
// This connection will be used by the orm.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "tqa0dxgjcrfpthmc",
    password: "nmc45uqzefyhjohp",
    database: "rzyhpxnmo753sg2x"
  });
};

//= mysql.createConnection({
//host: "localhost",
//port: 3306,
//user: "project2",
//password: "collegerunway",
//database: "collegerunway_db"
//});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
