// Import MySQL connection.
var connection = require("../config/connection.js");

//code from week 14 activity 17 Cats//

//the following functions help translate the data into something readable by mysql
// and create shorthand so we dont have to write out entire queries repeatedly// 
function printQuestionMarks(num) {
  var arr = [];
 for (var i = 0; i < num; i++) {
    arr.push("?");
  }
return arr.toString();
}

function objToSql(ob) {
 
var arr = [];
for (var key in ob) {
    var value = ob[key];
  if (Object.hasOwnProperty.call(ob, key)) {
       if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
       arr.push(key + "=" + value);
    }
  }
return arr.toString();
}


var orm = {

 
  //this method is for adding a burger into the table
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
 
  //this last method is for updating an exist burger// 
  //we will set the devoured value to true at the item in the
  //burger table with the corresponding id value// 
  updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
//since the table and column value are going to be static, there is no need to use empty variables.
//the only variable in the mysql query will be the "WHERE" parameter which is going to be
//the burger's id.// 
   
    console.log(queryString);
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};
module.exports = orm;