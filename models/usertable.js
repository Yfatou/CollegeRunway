module.exports = function(sequelize, DataTypes) {
  var UserTable = sequelize.define("UserTable", {
Tops: DataTypes.INTEGER,
Bottoms: DataTypes.INTEGER,
Shoes: DataTypes.INTEGER,
Accessories:  DataTypes.INTEGER,
seasonTableId:  DataTypes.INTEGER,
CollegeId:  DataTypes.INTEGER
  });
  // UserTable.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   UserTable.belongsTo(models.Brands, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  

 

 
  
  return UserTable;
};