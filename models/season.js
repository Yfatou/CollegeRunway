module.exports = function(sequelize, DataTypes) {
  var SeasonTable = sequelize.define("SeasonTable", {
    seasonname: DataTypes.STRING
  });
  SeasonTable.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    SeasonTable.hasMany(models.UserTable, {
      onDelete: "cascade"
    });
  };

  return SeasonTable;
};
