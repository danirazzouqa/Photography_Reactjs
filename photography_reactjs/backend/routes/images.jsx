const express = require('express');
const router = express.Router();
const Image = require('../models/imageModel.jsx'); // Import your Image model
const mongoose = require('mongoose');

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

  // Delete an image by ID
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid image ID' });
    }
  
    try {
      // Delete the image by ID
      const deletedImage = await Image.findByIdAndDelete(id);
  
      if (!deletedImage) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Error deleting image:', error);
      res.status(500).json({ error: 'An error occurred while deleting the image' });
    }
  });
  
  module.exports = router;