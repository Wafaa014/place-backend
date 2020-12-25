'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'places',
      'category_id',
      {
        type:Sequelize.BIGINT,
        references:{
          model:'categories',
          key:"category_id"
        },
        onDelete:'cascade'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
