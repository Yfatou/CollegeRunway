module.exports = function(sequelize, DataTypes) {
  var College = sequelize.define("College", {
    name: DataTypes.STRING
  });

  College.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    College.hasMany(models.Brand, {
      onDelete: "cascade"
    });
  };

  return College;
};
