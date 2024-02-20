const Print = require('../models/PrintsModel.jsx');

// Controller function for uploading print details
const uploadPrint = async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageFileName = req.file.filename; // Get the filename of the uploaded image
    const print = new Print({ name, description, imageFileName });
    await print.save();

    // Log the print object to verify its structure
    console.log('Print object:', print);

    res.status(201).json({ message: 'Print details uploaded successfully' });
  } catch (error) {
    console.error('Error uploading print details:', error);
    res.status(500).json({ message: 'Error uploading print details. Please try again.' });
  }
};

module.exports = { uploadPrint };
