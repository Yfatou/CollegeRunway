module.exports = function(sequelize, DataTypes) {
  var Colleges = sequelize.define("Colleges", {
    name: DataTypes.STRING
  });

  Colleges.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Colleges.hasMany(models.Brands, {
      onDelete: "cascade"
    });
  };

  return Colleges;
};
