'use strict';

const fs = require('fs');
const path = require('path');
let Sequelize = require('sequelize');
const env = process.env.NODE_ENV;

const config = require('../config/db')[env];
const basename = path.basename(__filename);
// const basename = path.basename(module.filename);
let db = {};


let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function (file) {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    // var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
