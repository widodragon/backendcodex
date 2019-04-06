'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regional = sequelize.define('Regional', {
    regionals_id: DataTypes.INTEGER,
    witel: DataTypes.STRING,
    idle: DataTypes.INTEGER,
    used: DataTypes.INTEGER,
    broken: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  Regional.associate = function(models) {
    // Regional.belongsTo(models.Main_regional);
  };
  return Regional;
};