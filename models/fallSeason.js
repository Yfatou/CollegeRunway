module.exports = function(sequelize, DataTypes) {
  var Fall = sequelize.define("Fall", {
    bottom: DataTypes.STRING,
    tops: DataTypes.STRING,
    shoes: DataTypes.STRING,
    accessories: DataTypes.STRING
  });
  return Fall;
};