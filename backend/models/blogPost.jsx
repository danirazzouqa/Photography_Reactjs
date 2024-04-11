const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    story: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title:{
      type :String,
      required: true,
    } 
   
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);


