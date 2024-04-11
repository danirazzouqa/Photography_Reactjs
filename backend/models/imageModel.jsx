const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  category: String,
  originalFileName: String,
  imageFileName: String, 
},{ timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
