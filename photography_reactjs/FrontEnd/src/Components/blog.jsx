import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavLinksBar from './NavLinksBar';
import { FaTimes } from 'react-icons/fa';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    axios.get('http://localhost:4000/blogs')
      .then((response) => {
        setBlogPosts(response.data); // Assuming the response data is an array of blog posts
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='w-full h-full bg-slate-100'>
      <NavLinksBar />
      <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="w-full h-full text-4xl font-serif font-semibold my-8">Blogs</h1>
        <div className="">
          {blogPosts.map((post, index) => (
            <div key={post._id} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} border-b-2 p-6`}>
              <div
                className={`h-[650px] mt-8`}
                onClick={() => openImageModal(post.image)}
              >
                <img className='w-[1200px] h-[400px] rounded-lg shadow-xl cursor-pointer object-cover' src={`http://localhost:4000/uploads/${post.image}`} alt="Blog Post" />
              </div>
              <div className='w-full h-full'>
                <h2 className='w-full justify-center text-center items-center font-bold text-2xl font-serif py-4'>{post.title}</h2>
                <p className='w-full font-sans text-gray-500 text-center p-8'>{post.story}</p>
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
