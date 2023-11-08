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

module.exports = {
  BlogGet, BlogPost
};
