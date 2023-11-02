const express = require('express');
const router = express.Router();
const upload = require('../multer-config.jsx');
const mongoose = require('mongoose');
const Image = require('../models/imageModel.jsx');

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Create a schema for the uploaded image and save it to MongoDB
    const image = new Image({
      category: req.body.categoryName, // Assuming you pass the category name in the request body
      originalFileName: req.file.originalname,
    });

    const savedImage = await image.save();

    res.status(200).json({
      message: 'File uploaded successfully',
      filename: req.file.originalname,
      savedImage: savedImage,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'An error occurred while uploading the file' });
  }
});




module.exports = router;
