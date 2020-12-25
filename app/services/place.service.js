const placedao = require("../storage/place.dao")
const sharp = require('sharp')

exports.create = async (placedto) => {
  //Validate request
  if (!placedto.name) {
    throw new Error("Content can not be empty!")
  }

  let buffer = null
  if (placedto.image) {
    buffer = placedto.image
    //await sharp(placedto.image.buffer).resize({width: 250, height: 250}).png().toBuffer()
  }

  const place = {
    name: placedto.name,
    // category: placedto.category,
    longitude: placedto.longitude,
    latitude: placedto.latitude,
    image: buffer
  };

  // Save place in the database
  return placedao.create(place)
};
