module.exports = app => {
    const places = require("../controllers/place.controller.js");
    const multer = require('multer');
    const path = require('path');

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
         cb(null, './app/public/images/')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname) 
       } });
       
    const upload = multer({ storage: storage });
 

    var router = require("express").Router();
  
    // Create a new place
    router.post("/",  upload.single('file'), places.create);
  
    // Retrieve all places
    router.get("/", places.findAll);

    app.use('/api/places', router);
};