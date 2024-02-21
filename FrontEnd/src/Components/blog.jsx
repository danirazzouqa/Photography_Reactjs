import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NavLinksBar from './NavLinksBar';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = useContext(AuthContext);
  const role = user?.role;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('https://photography-reactjs.onrender.com/blogs')
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleDeletePost = (id) => {
    if (role === 'admin') {
      axios.delete(`https://photography-reactjs.onrender.com/blogs/${id}`)
        .then((response) => {
          fetchPosts();
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    }
  };

  const handleBlogPostSubmit = async (formData) => {
    try {
      const response = await axios.post('https://photography-reactjs.onrender.com/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog post created:', response.data);
      fetchPosts();
    } catch (error) {
      console.error('Error creating a blog post:', error);
    }
  };

  const BlogPostForm = () => {
    const [file, setFile] = useState(null);
    const [story, setStory] = useState('');
    const [title, setTitle] = useState('');

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleStoryChange = (e) => {
      setStory(e.target.value);
    };

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };

    const handleFormSubmit = async () => {
      if (!file || !story || !title) {
        console.log('Please select an image, write a story, and provide a title.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('story', story);
      formData.append('title', title);

      try {
        await handleBlogPostSubmit(formData);
      } catch (error) {
        console.error('Error creating a blog post:', error);
      }
    };

    return (
      <div className='w-full mt-12 mx-auto max-w-4xl lg:max-w-6xl px-4'>
        <h2 className='font-serif font-semibold mb-4 text-center'>Create a Blog Post</h2>
        <input className='block mx-auto mb-12 text-center' type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className='block w-full mb-4'
        />
        <textarea
          placeholder="Write your story here..."
          value={story}
          onChange={handleStoryChange}
          className='block w-full h-[200px] mb-4 resize-none'
        ></textarea>
        <button className='block mx-auto px-6' onClick={handleFormSubmit}>Submit</button>
      </div>
    );
  };

  return (
    <div className='w-full bg-slate-100 text-center overflow-x-hidden'>
      <NavLinksBar />
      <div className="mx-auto max-w-4xl lg:max-w-6xl px-4 py-8">
        <h2 className="text-4xl font-serif font-semibold my-8">Blogs</h2>
        {role === 'admin' && <BlogPostForm />}
        <div>
          {blogPosts.map((post, index) => (
            <div key={post._id} className={`flex flex-col md:flex-row border-b-2 border-gray-200 p-6 mb-8 text-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div
                className={`h-[400px] md:w-1/2 my-8 md:mt-0`}
                onClick={() => openImageModal(post.image)}
              >
                <img className='w-full h-full rounded-lg shadow-xl cursor-pointer object-cover mb-2' src={`https://photography-reactjs.onrender.com/uploads/${post.image}`} alt="Blog Post" />
                {role === 'admin' && (
                  <button
                    className="bg-red-500 text-white px-4 py-2 mb-2 rounded-md"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeletePost(post._id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className='w-full h-full md:w-1/2 px-4'>
                <h2 className='font-bold text-2xl font-serif py-4 text-center'>{post.title}</h2>
                <p className='font-sans text-gray-500 text-center'>{post.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="max-w-7xl max-h-2xl h-screen p-4 bg-transparent">
            <img
              src={`https://photography-reactjs.onrender.com/uploads/${selectedImage}`}
              alt={selectedImage}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImageModal}
              className="text-white hover:text-red-700 text-2xl absolute top-4 right-4 cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
