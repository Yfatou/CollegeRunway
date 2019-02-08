module.exports = function(sequelize, DataTypes) {
  var SeasonTable = sequelize.define("SeasonTable", {
    seasonname: DataTypes.STRING
  });
  SeasonTable.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    SeasonTable.belongsTo(models.Colleges, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return SeasonTable;
};
