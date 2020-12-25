module.exports = (sequelize, Sequelize) => {
    const Place = sequelize.define("places", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // category:{
      //   type: Sequelize.STRING,
      //   allowNull: false

      // },
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
    //  //associations between tables
    // Place.associate = function (models) {
    //   Place.belongsTo(models.categories, {as: 'category', foreignKey: 'category_id'});
    // };
   

    //get rid of metadata
    return Place;
  };

 
