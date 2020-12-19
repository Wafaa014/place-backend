const db = require("../models");
const Place = db.places;
const Op = db.Sequelize.Op;

const sharp = require('sharp')

// Create and Save a new place
exports.create = async (req, res) => {
  // Validate request
  // if (!req.body.name) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
  
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250}).png().toBuffer()
  console.log(buffer)
  // Create a place
  const place = {
    // name: req.body.name,
    // longitude: req.body.longitude,
    // latitude: req.body.latitude,
    image: buffer
  };

  // Save place in the database
  Place.create(place)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the place."
      });
    });
};

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
