module.exports = function(sequelize, DataTypes) {
  var Brands = sequelize.define("Brands", {
    brands: DataTypes.STRING,
     brandid:  DataTypes.INTEGER
  });
  // Brands.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //  Brands.hasMany(models.UserTable, {
  //     onDelete: "cascade"
  //   });
  // };
 
  return Brands;
};