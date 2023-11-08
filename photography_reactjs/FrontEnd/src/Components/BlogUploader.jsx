import React, { useState } from 'react';
import axios from 'axios';

function BlogPostForm() {
  const [file, setFile] = useState(null);
  const [story, setStory] = useState('');
  const [title, setTitle] = useState(''); // Add state for the header or title

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleStoryChange = (e) => {
    setStory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Update the header state when user inputs the title
  };

  const handleFormSubmit = async () => {
    if (!file || !story || !title) {
      console.log('Please select an image, write a story, and provide a title.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('story', story);
    formData.append('title', title); // Include the header in the form data

    try {
      const response = await axios.post('http://localhost:4000/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog post created:', response.data);
      // Reset the form or navigate to the blog page
    } catch (error) {
      console.error('Error creating a blog post:', error);
    }
  };

  return (
    <div className='container justify-center items-center text-center mt-12'>
      <h2>Create a Blog Post</h2>
      <input className='mb-12 justify-between items-center text-center' type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className='w-[600px] mb-4'
      />
      <textarea
        placeholder="Write your story here..."
        value={story}
        onChange={handleStoryChange}
        className='w-[600px] h-[200px]'
      ></textarea>
      <button className='px-6' onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}

export default BlogPostForm;
