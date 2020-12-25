'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('places', {
       id: {
         type: Sequelize.BIGINT,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },
       name: {
         type: Sequelize.STRING
       },
       latitude: {
         type: Sequelize.DOUBLE
       },
       longitude: {
         type: Sequelize.DOUBLE
       },
       image: {
         type: Sequelize.BLOB('long')
       }
     });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('places');
  }
};
