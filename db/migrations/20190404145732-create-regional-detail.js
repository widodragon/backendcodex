'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Regional_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datel: {
        type: Sequelize.STRING
      },
      id_regional: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regionals',
          key: 'id'
        },
      },
      idle: {
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      used: {
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      broken: {
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      total: {
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Regional_details');
  }
};