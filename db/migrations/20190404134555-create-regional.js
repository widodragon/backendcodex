'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Regionals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      regionals_id: {
        type: Sequelize.INTEGER,        
        references: {
          model: 'Main_regionals',
          key: 'id'
        },
      },
      witel: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Regionals');
  }
};