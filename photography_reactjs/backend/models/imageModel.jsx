// models/imageModel.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  category: String,
  originalFileName: String,
},{timestamps : true} );

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
