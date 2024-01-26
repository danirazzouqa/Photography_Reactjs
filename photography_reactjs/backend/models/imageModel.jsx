const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  category: String,
  originalFileName: String,
  imageFileName: String, // Name of the processed (WebP) image file
},{ timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
