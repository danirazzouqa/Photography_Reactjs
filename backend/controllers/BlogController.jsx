const BlogPostModel = require('../models/blogPost.jsx'); // Import your BlogPost model
const mongoose = require('mongoose')

const BlogPost = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { story , title } = req.body;

    // Create a schema for the blog post
    const blogPost = new BlogPostModel({
      story: story,
      image: req.file.filename,
      title : title // Assuming you're saving the uploaded file name
    });

    const savedBlogPost = await blogPost.save();

    res.status(201).json({ message: 'Blog post created', blogPost: savedBlogPost });
  } catch (error) {
    console.error('Error creating a blog post:', error);
    res.status(500).json({ error: 'An error occurred while creating the blog post' });
  }
};

// Route to get a list of blog posts
const BlogGet = async (req, res) => {
  try {
    const blogPosts = await BlogPostModel.find().sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching blog posts' });
  }
};

const BlogDelete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid blog post ID' });
  }

  try {
    // Delete the blog post by ID using BlogPostModel
    const deletedBlog = await BlogPostModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'An error occurred while deleting the blog post' });
  }
};

module.exports = {
  BlogGet, BlogPost , BlogDelete
};
