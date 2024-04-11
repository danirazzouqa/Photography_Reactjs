const express = require('express');
const router = express.Router();
const printController = require('../controllers/PrintsController.jsx');
const multer = require('multer');
const Print = require('../models/PrintsModel.jsx');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.originalname + '-' + uniqueSuffix); 
  }
});

const upload = multer({ storage: storage });

// Route for uploading print details
router.post('/', upload.single('imageFile'), printController.uploadPrint);

// Route for fetching prints
router.get('/', async (req, res) => {
    try {
      const printName = req.query.printName;
      if (printName) {
        // If printName is provided, fetch the specific print by name
        const selectedPrint = await Print.findOne({ name: printName }); 
        if (!selectedPrint) {
          return res.status(404).json({ error: 'Print not found' });
        }
        return res.status(200).json(selectedPrint);
      } else {
        // If no printName is provided, fetch all prints
        const allPrints = await Print.find();
        return res.status(200).json(allPrints);
      }
    } catch (error) {
      console.error('Error fetching print:', error);
      res.status(500).json({ error: 'An error occurred while fetching print' });
    }
  });

// Route for deleting a print by ID
router.delete('/:id', async (req, res) => {
    try {
      const printId = req.params.id;
      const deletedPrint = await Print.findByIdAndDelete(printId);
      if (!deletedPrint) {
        return res.status(404).json({ error: 'Print not found' });
      }
      return res.status(200).json({ message: 'Print deleted successfully' });
    } catch (error) {
      console.error('Error deleting print:', error);
      res.status(500).json({ error: 'An error occurred while deleting print' });
    }
  });

module.exports = router;
