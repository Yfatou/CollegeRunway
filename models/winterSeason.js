module.exports = function(sequelize, DataTypes) {
  var Winter = sequelize.define("Winter", {
    bottom: DataTypes.STRING,
    tops: DataTypes.STRING,
    shoes: DataTypes.STRING,
    accessories: DataTypes.STRING
});
  return Winter;
};