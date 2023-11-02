const express = require('express');
const router = express.Router();
const Image = require('../models/imageModel.jsx'); // Import your Image model

router.get('/',  async (req, res) => {
    const { categoryName } = req.query;
    try {
      // Query the database for images with the specified category
      const images = await Image.find({category: categoryName});
  
      if (images.length > 0) {
        res.json(images);
      } else {
        res.status(404).json({ error: 'Images not found for the specified category' });
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'An error occurred while fetching images' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const { categoryName } = req.query;
      console.log('Category Name:', categoryName);
  
      // ... rest of the code
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'An error occurred while fetching images' });
    }
  });
  
  module.exports = router;