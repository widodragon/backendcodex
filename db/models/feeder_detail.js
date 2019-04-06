'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feeder_detail = sequelize.define('Feeder_detail', {
    id_regional_user: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Feeder_detail.associate = function(models) {
    // associations can be defined here
  };
  return Feeder_detail;
};