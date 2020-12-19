module.exports = (sequelize, Sequelize) => {
    const Place = sequelize.define("place", {
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
  
    return Place;
  };