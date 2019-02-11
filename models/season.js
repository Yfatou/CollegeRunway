// *****************************************************************************************
// Definition of the Sequelize model Seasons
// This model will contain the all the season name and a custom foreign key for each
// Using the Sequelize association to build a foreign key does not work
// The custom foreign key seasonTableId will be the one used in the look up table: userTable
// *****************************************************************************************
// DISCLAIMER: Thank you to Phil for helping our group
module.exports = function(sequelize, DataTypes) {
  var SeasonTable = sequelize.define("SeasonTable", {
    seasonname: DataTypes.STRING,
    seasonTableId: DataTypes.INTEGER
  });

  return SeasonTable;
};