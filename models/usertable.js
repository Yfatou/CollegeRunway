// ************************************************************************************
// Definition of the Sequelize model UserTable
// This model will be a look up table; it will be the central table
// It will contain all the informations entered by the user
// It will be used to create all the views
// This model will contain the brands choosed by the user for each clothing items
// and the college and season that the user entered
// Using the Sequelize association to build a foreign key does not work
// ************************************************************************************
// DISCLAIMER: Thank you to Phil for helping our group
module.exports = function(sequelize, DataTypes) {
  var UserTable = sequelize.define("UserTable", {
    Tops: DataTypes.INTEGER,
    Bottoms: DataTypes.INTEGER,
    Shoes: DataTypes.INTEGER,
    Accessories: DataTypes.INTEGER,
    seasonTableId: DataTypes.INTEGER,
    CollegeId: DataTypes.INTEGER
  });

  return UserTable;
};