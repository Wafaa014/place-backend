const models = require("../models/index");
const Place = models.places;
// const Category = models.categories;

const Op = models.Sequelize.Op;

exports.create = async (placedto) => {

  // const categ = await Category.findOne({ where: { type: placedto.category } });
  // Create a place
  const place = {
    name: placedto.name,
    longitude: placedto.longitude,
    latitude: placedto.latitude,
    image: placedto.image
  };

  // Save place in the database
  let result = await Place.create(place)

  return Promise.resolve(result)
};
