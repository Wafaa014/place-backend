const db = require("../models");
const Place = db.places;
const Op = db.Sequelize.Op;
const service = require("../services/place.service")

exports.create = async (req,res) => {

     const place = {
      name: req.body.name,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      image: req.file
    };

    try {
      let result = await service.create(place)
      res.status(200).send(result)
    }
    catch (e) {
      res.status(500).send(e)
      console.log(e)
    }
}

// Retrieve all places from the database.
exports.findAll = (req, res) => {
    Place.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving places."
      });
    });
};
