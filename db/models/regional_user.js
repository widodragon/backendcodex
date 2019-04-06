'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regional_user = sequelize.define('Regional_user', {
    datel: DataTypes.STRING,
    id_detail: DataTypes.INTEGER,
    feeder: DataTypes.STRING,
    distribusi: DataTypes.STRING,
    odp: DataTypes.STRING
  }, {});
  Regional_user.associate = function(models) {
    // associations can be defined here
  };
  return Regional_user;
};