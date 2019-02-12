// ***************************************************************************************
// Definition of the Sequelize model Colleges
// This model will contain all the college name and a custom foreign key for each
// Using the Sequelize association to build a foreign key does not work
// The custom foreign key collegeid will be the one used in the look up table: userTable
// ***************************************************************************************
// DISCLAIMER: Thank you to Phil for helping our group
module.exports = function(sequelize, DataTypes) {
  var Colleges = sequelize.define("Colleges", {
    name: DataTypes.STRING,
    collegeid: DataTypes.INTEGER
  });

  return Colleges;
};
