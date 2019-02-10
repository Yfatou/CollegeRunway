module.exports = function(sequelize, DataTypes) {
  var SeasonTable = sequelize.define("SeasonTable", {
    seasonname: DataTypes.STRING,
    seasonTableId: DataTypes.INTEGER
  });
  

  return SeasonTable;
};