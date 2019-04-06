'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regional_detail = sequelize.define('Regional_detail', {
    datel: DataTypes.STRING,
    id_regional: DataTypes.INTEGER,
    idle: DataTypes.INTEGER,
    used: DataTypes.INTEGER,
    broken: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  Regional_detail.associate = function(models) {
    // associations can be defined here
  };
  return Regional_detail;
};