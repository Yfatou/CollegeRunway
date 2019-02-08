module.exports = function(sequelize, DataTypes) {
  var Brands = sequelize.define("Brands", {
    brands: DataTypes.STRING,
    seasons: DataTypes.STRING,
    items: DataTypes.STRING
  });
  Brands.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Brands.belongsTo(models.Colleges, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Brands;
};
