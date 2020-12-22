module.exports = (sequelize, Sequelize) => {
    const Place = sequelize.define("places", {
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
      },
      rating: {
        type: Sequelize.INTEGER,
      }
    });

    //get rid of metadata
    return Place;
  };

  //associations between tables
