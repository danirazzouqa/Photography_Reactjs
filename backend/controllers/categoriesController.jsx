const Category = require('../models/categoryModel.jsx')
const mongoose = require('mongoose')


const PostCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const imageFileName = req.file ? req.file.filename : ''; 

    const category = new Category({ name, imageFileName });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'An error occurred while creating the category' });
  }
}

  
  // Route to get a list of categories
  const getCategories = async (req, res) => {
    try {
      // Fetch all categories including the "image" field
      const categories = await Category.find({}, { _id: 0, __v: 0 });
  
      if (categories.length > 0) {
        res.json(categories);
      } else {
        res.status(404).json({ error: 'Categories not found' });
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'An error occurred while fetching categories' });
    }
  }
  
  // Route to get a single category by its ID
const getCategory = async (req, res) => {
    try {
      const { categoryId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(404).json({ error: 'No such category' });
      }
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'No such category' });
      }
      res.status(200).json(category);t
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the category' });
    }
  }
  


  module.exports = {
    PostCategories,getCategories,getCategory
  }