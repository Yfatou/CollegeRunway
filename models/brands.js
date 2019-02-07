module.exports = function(sequelize, DataTypes) {
  var Brand = sequelize.define("Brand", {
    brands: DataTypes.STRING,
    seasons: DataTypes.STRING,
    items: DataTypes.STRING
  });
  Brand.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Brand.belongsTo(models.College, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Brand;
};
