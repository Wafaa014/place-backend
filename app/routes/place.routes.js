const path = require('path');
const places = require("../controllers/place.controller.js");
// const categories = require("../controllers/category.controller.js");
const multer = require('multer')

module.exports = app => {  
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
         cb(null, './app/public/images/')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname) //+ path.extname(file.originalname)Date.now() 
       } });
       
    const upload = multer({ storage: storage });
     

    var router = require("express").Router();
  
    // Create a new place
    router.post("/",  upload.single('file'), places.create);

    // // Create a new category
    // router.post("/category",  upload.single('file'), categories.create);
  
    // Retrieve all places
    router.get("/", places.findAll);

    app.use('/api/places', router);
};