'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Regional_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datel: {
        type: Sequelize.STRING
      },
      id_detail: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regional_details',
          key: 'id'
        },
      },
      feeder: {
        allowNull: false,
        type: Sequelize.STRING
      },
      distribusi: {
        type: Sequelize.STRING
      },
      odp: {
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
    }).then(() => queryInterface.addConstraint('Regional_users', ['feeder'],{
      type: 'unique',
      name: 'custom_unique_constraint_name'
    }))
    .then(() => {
        // perform further operations if needed
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Regional_users');
  }
};