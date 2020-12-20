module.exports = app => {
    const places = require("../controllers/place.controller.js");
    const multer = require('multer')

    const upload = multer({})

    var router = require("express").Router();
  
    // Create a new place
    router.post("/",  upload.single('file'), places.create);
  
    // Retrieve all places
    router.get("/", places.findAll);

    app.use('/api/places', router);
};