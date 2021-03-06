const db = require("../models");
const Place = db.places;
const Op = db.Sequelize.Op;
const service = require("../services/place.service")

exports.create = async (req, res) => {

  const image_url = process.env.IMAGE_DIR+req.file.originalname
  const place = {
    name: req.body.name,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    image: image_url
  };

  try {
    let result = await service.create(place)
    res.status(200).send(result)
  } catch (e) {
    res.status(500).send(e)
    console.log(e)
  }
}

// Retrieve all places from the database.
exports.findAll = async (req, res) => {
  try {
    let result = await service.findAll()
    res.status(200).send(result)
  }
  catch (e) {
    res.status(500).send(e)
    console.log(e)
  }
};
