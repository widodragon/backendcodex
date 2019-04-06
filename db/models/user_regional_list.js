'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_regional_list = sequelize.define('User_regional_list', {
    name: DataTypes.STRING,
    id_regional_user: DataTypes.INTEGER,
    post: DataTypes.INTEGER,
    inet: DataTypes.INTEGER,
    service: DataTypes.STRING
  }, {});
  User_regional_list.associate = function(models) {
    // associations can be defined here
  };
  return User_regional_list;
};