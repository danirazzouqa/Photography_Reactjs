const { sync } = require('glob')
const Image = require('../models/image.jsx')
const mongoose = require('mongoose')

//get all images
const getImages = async (req, res) => {
const images = await Image.find({}).sort({createdAt: -1})
    res.status(200).json(images)
}



//get a single image
const getImage = async (req , res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such image'})
    }
    const image = await Image.findById(id)
    if (!image) {
        return res.status(404).json({error: 'no such image'})
    }
        res.status(200).json(image)
    }

//post an image
// Upload an image
   const uploadImage = async (req, res) => {
    try {
      const { name, category } = req.body;
      const imageFileName = req.file.filename;
  
      // Handle image upload here, making sure to associate the image with the specified category.
  
      // You can save the image details to your database. Assuming you have an Image model:
      const newImage = new Image({ name, imageFileName, category });
      const savedImage = await newImage.save();
  
      res.status(201).json(savedImage);
    } catch (error) {
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