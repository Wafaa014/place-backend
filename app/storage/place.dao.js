const db = require("../models");
const Place = db.places;
const Op = db.Sequelize.Op;



exports.create = async (placedto) => {
    
    // Create a place
    const place = {
      name: placedto.name,
      longitude: placedto.longitude,
      latitude: placedto.latitude,
      image: placedto.image
    };
  
    // Save place in the database
    let result =  await Place.create(place)

    return Promise.resolve(result)
  };