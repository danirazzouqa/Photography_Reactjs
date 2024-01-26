const { sync } = require('glob')
const Image = require('../models/image.jsx')
const mongoose = require('mongoose')
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

//get all images
const getImages = async (req, res) => {
    const images = await Image.find({}).sort({createdAt: -1});
    const imageUrls = images.map(image => {
      return {
        ...image.toObject(),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${image.imageFileName}`
      };
    });
    res.status(200).json(imageUrls);
  };



//get a single image
const getImage = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such image' });
    }
  
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ error: 'No such image' });
    }
  
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${image.imageFileName}`;
    res.status(200).json({ ...image.toObject(), imageUrl });
  };

//post an image
// Upload an image
const uploadImage = async (req, res) => {
  try {
    const { category } = req.body;
    const imageBuffer = req.file.buffer; // Assuming multer memory storage

    // Generate a unique filename
    const outputFileName = `${Date.now()}-${path.parse(req.file.originalname).name}.webp`;
    const outputPath = `path/to/save/${outputFileName}`;

    // Resize and optimize image using sharp
    await sharp(imageBuffer)
      .resize(800, 800, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFormat('webp', { quality: 80 })
      .toFile(outputPath);

    // Create a new database record for the image
    const newImage = new Image({
      category,
      originalFileName: req.file.originalname,
      imageFileName: outputFileName
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'An error occurred while uploading the image' });
  }
};

//delete an image
const deleteImage = async (req , res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such image'})
    }

    const image = await Image.findOneAndDelete({_id: id})

    if (!image) {
        return res.status(404).json({error: 'no such image'})
    }
        res.status(200).json(image)
}


//update image
const updateimage = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such image'})
    }

    const image = await Image.findOneAndUpdate({_id: id} ,{
        ...req.body
    })

    if (!image) {
        return res.status(404).json({error: 'no such image'})
    }
        res.status(200).json(image)

}


module.exports = {
    uploadImage, getImages, getImage ,deleteImage , updateimage
}