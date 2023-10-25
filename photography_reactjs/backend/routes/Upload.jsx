const express = require('express');
const router = express.Router();
const upload = require('../multer-config.jsx');


router.post('/', upload.single('file'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      res.status(200).json({ message: 'File uploaded successfully', filename: req.file.originalname });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'An error occurred while uploading the file' });
    }
  });

  module.exports = router 