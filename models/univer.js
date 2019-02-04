module.exports = function (sequelize, DataTypes) {
    var University = sequelize.define("University", {
        name: DataTypes.STRING,
    });
    return University;
};