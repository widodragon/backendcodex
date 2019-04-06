'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regionals = sequelize.define('Main_regional', {
    name: DataTypes.STRING,
    idle: DataTypes.INTEGER,
    used: DataTypes.INTEGER,
    broken: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  Regionals.associate = function(models) {
    Regionals.hasMany(models.Regional,{
      as:'regional',
      foreignKey:'regionals_id',
      onDelete: 'CASCADE'
    });
  };
  return Regionals;
};