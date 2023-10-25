const express = require('express');
const {uploadImage,getImage,getImages,updateimage,deleteImage} = require('../controllers/imageController.jsx')

const router = express.Router();

//get all images
router.get('/', getImages )

//get a single image
router.get('/:id', getImage)

//post a new image
router.post('/', uploadImage)

//delete image
router.delete('/:id', deleteImage)

//update image
router.patch('/:id', updateimage)

module.exports = router 