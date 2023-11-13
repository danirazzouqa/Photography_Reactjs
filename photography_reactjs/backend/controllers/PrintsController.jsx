const Print = require('../models/PrintsModel.jsx')
const mongoose = require('mongoose')


const PostPrints = async (req, res) => {
  try {
    const { name } = req.body;
    const { description } = req.body;
    const imageFileName = req.file ? req.file.filename : ''; // Get the uploaded image file name

    const print = new Print({ name, description, imageFileName });
    await print.save();

    res.status(201).json(print);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'An error occurred while creating the category' });
  }
}

  
  // Route to get a list of categories
  const getPrints = async (req, res) => {
    try {
      // Fetch all categories including the "image" field
      const prints = await Print.find({}, { _id: 0, __v: 0  });
  
      if (prints.length > 0) {
        res.json(prints);
      } else {
        res.status(404).json({ error: 'Categories not found' });
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'An error occurred while fetching categories' });
    }
  }
  
  


  module.exports = {
    PostPrints,getPrints,
  }