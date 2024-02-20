const express = require('express');
const router = express.Router();
const upload = require('../multer-config.jsx');
const mongoose = require('mongoose');
const Image = require('../models/imageModel.jsx');

router.post('/', upload.array('files', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedImages = [];

    for (const file of req.files) {
      // Create a schema for each uploaded image and save it to MongoDB
      const image = new Image({
        category: req.body.categoryName, // Assuming you pass the category name in the request body
        originalFileName: file.originalname,
      });

      const savedImage = await image.save();
      uploadedImages.push(savedImage);
    }

    res.status(200).json({
      message: 'Files uploaded successfully',
      uploadedImages: uploadedImages,
    });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'An error occurred while uploading the files' });
  }
});

module.exports = router;
