const mongoose = require('mongoose');

const printSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageFileName: { type: String, required: true },
});

const Print = mongoose.model('Print', printSchema);

module.exports = Print;
