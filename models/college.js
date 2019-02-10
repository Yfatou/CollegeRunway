module.exports = function(sequelize, DataTypes) {
  var Colleges = sequelize.define("Colleges", {
    name: DataTypes.STRING,
    collegeid: DataTypes.INTEGER
  });
   
  return Colleges;
};