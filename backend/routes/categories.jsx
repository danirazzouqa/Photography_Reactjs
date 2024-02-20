const express = require('express');
const router = express.Router();
const {PostCategories,getCategories,getCategory} = require('../controllers/categoriesController.jsx')
const upload = require('../multer-config.jsx');

// Route to create a new category
router.get('/', getCategories )

//get a single image
router.get('/:id', getCategory)

//post a new image
router.post('/', upload.single('file') , PostCategories)


module.exports = router;
