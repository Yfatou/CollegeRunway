module.exports = function(sequelize, DataTypes) {
  var Summer = sequelize.define("Summer", {
    bottom: DataTypes.STRING,
    tops: DataTypes.STRING,
    shoes: DataTypes.STRING,
    accessories: DataTypes.STRING
});
  return Summer;
};