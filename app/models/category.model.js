
module.exports = (sequelize, Sequelize) => {

    const Category = sequelize.define("categories", {
      category_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: Sequelize.STRING
      }
    });

    //get rid of metadata
    return Category;
  };