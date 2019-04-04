'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regionals = sequelize.define('Regionals', {
    idle: DataTypes.INTEGER,
    used: DataTypes.INTEGER,
    broken: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  Regionals.associate = function(models) {
    // associations can be defined here
  };
  return Regionals;
};