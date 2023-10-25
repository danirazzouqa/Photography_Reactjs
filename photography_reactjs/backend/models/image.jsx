const mongoose = require('mongoose');

const Schema = mongoose.Schema

const imageSchema = new Schema({
  name: {
    type : String ,
    required : true

  } ,
  imageFileName: {
    type : String,
    required : true
  } ,
  category: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Category' }
  // ... other fields
}, {timestamps : true})



module.exports = mongoose.model('Image',imageSchema)
