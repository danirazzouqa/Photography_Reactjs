const express = require('express');
const router = express.Router();
const {PostPrints,getPrints} = require('../controllers/PrintsController.jsx')
const upload = require('../multer-config.jsx');

// Route to create a new category
router.get('/', getPrints )

//post a new image
router.post('/', upload.single('file') , PostPrints)


module.exports = router;
