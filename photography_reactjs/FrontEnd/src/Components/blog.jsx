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
    axios.get('http://localhost:4000/blogs')
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
      axios.delete(`http://localhost:4000/blogs/${id}`)
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
      const response = await axios.post('http://localhost:4000/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog post created:', response.data);
      fetchPosts(); // Fetch the updated list of blog posts after submission
    } catch (error) {
      console.error('Error creating a blog post:', error);
    }
  };

  // Define the BlogPostForm directly within the Blog component
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
        await handleBlogPostSubmit(formData); // Call the handleBlogPostSubmit function defined in the Blog component
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
  };

  return (
    <div className='w-full h-full bg-slate-100'>
      <NavLinksBar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 ">
        <h2 className="w-full h-full text-4xl font-serif font-semibold my-8">Blogs</h2>
        {role === 'admin' && <BlogPostForm />} {/* Render BlogPostForm for admin users */}
        <div className="">
          {blogPosts.map((post, index) => (
            <div key={post._id} className={`flex flex-col md:flex-row border-b-2 border-gray-200 p-6  mb-8 text-center   ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div
                className={`h-[400px] md:w-1/2 my-8 md:mt-0`}
                onClick={() => openImageModal(post.image)}
              >
                <img className='w-full h-full rounded-lg shadow-xl cursor-pointer object-cover 
                ' src={`http://localhost:4000/uploads/${post.image}`} 
                alt="Blog Post" />
                {role === 'admin' && (
                 <button
                 className="text-red-600 p-2 hover:text-red-800"
                 onClick={(event) => {
                   event.stopPropagation(); // Prevent click event propagation
                   handleDeletePost(post._id);
                 }}
               >
                 Delete
               </button>
                )}
              </div>
              <div className='w-full h-full md:w-1/2 px-4 '>
                <h2 className='font-bold text-2xl font-serif py-4 text-center '>{post.title}</h2>
                <p className='font-sans text-gray-500 text-center '>{post.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="max-w-7xl max-h-2xl h-screen p-4 bg-transparent">
            <img
              src={`http://localhost:4000/uploads/${selectedImage}`}
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
