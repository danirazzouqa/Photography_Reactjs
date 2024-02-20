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
    // You can add more fields to your blog post schema, such as title, author, date, etc.
  },
  {
    timestamps: true, // Automatically adds "createdAt" and "updatedAt" timestamps to your documents
  }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);


