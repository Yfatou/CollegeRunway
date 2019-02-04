module.exports = function(sequelize, DataTypes) {
    var Universities = sequelize.define("Universities", {
      name: DataTypes.STRING,
    });
    return Universities;
  };
  
