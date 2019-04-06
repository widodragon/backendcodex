'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_regional_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_regional_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Regional_users',
          key: 'id'
        },
      },
      post: {
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      inet: {
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      service: {
        defaultValue:"Indihome",
        type: Sequelize.STRING
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
    return queryInterface.dropTable('User_regional_lists');
  }
};