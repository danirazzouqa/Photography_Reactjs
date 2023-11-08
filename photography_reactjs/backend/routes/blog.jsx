const express = require('express');
const router = express.Router();
const multer = require('multer'); // For handling file uploads
const {BlogGet,BlogPost} = require('../controllers/BlogController.jsx');
const path = require('path');

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where you want to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route to create a new blog post
router.post('/', upload.single('file'), BlogPost);

// Route to get a list of blog posts
router.get('/', BlogGet);

module.exports = router;
