'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('places', 'rating',
      {
        type: Sequelize.INTEGER,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('places', 'rating');
  }
};
