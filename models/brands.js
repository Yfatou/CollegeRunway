// ************************************************************************************
// Definition of the Sequelize model Brands
// This model will contain all the brand name and a custom foreign key for each
// Using the Sequelize association to build a foreign key does not work
// The custom foreign key brandid will be the one used in the look up table: userTable
// ************************************************************************************
// DISCLAIMER: Thank you to Phil for helping our group

module.exports = function(sequelize, DataTypes) {
  var Brands = sequelize.define("Brands", {
    brands: DataTypes.STRING,
    brandid: DataTypes.INTEGER
  });

  return Brands;
};