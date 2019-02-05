module.exports = function (sequelize, DataTypes) {
  var Brands = sequelize.define("Brands", {
    colleges: DataTypes.STRING,
    seasons: DataTypes.STRING,
    brands: DataTypes.STRING,
    categories: DataTypes.STRING
  });
  return Brands;
};