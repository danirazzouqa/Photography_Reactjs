const mongoose = require('mongoose');

const PrintSchema = new mongoose.Schema({
  name: String,
  imageFileName: String, 
  description : String ,
}, {timestamps : true});


module.exports = mongoose.model('Print', PrintSchema);
