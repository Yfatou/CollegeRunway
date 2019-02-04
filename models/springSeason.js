module.exports = function(sequelize, DataTypes) {
  var Spring = sequelize.define("Spring", {
    bottom: DataTypes.STRING,
    tops: DataTypes.STRING,
    shoes: DataTypes.STRING,
    accessories: DataTypes.STRING
  });
  return Spring;
};