import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import NavLinksBar from '../NavLinksBar';
import { AuthContext } from '../../context/AuthContext';
import { v4 as uuidv4 } from 'uuid'; // 

function GalleryPage() {
  const { categoryName } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const { user } = useContext(AuthContext);
  const role = user?.role;

  const fetchImages = useCallback(() => {
    axios
      .get(`http://localhost:4000/images?categoryName=${categoryName}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [categoryName]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setUploadStatus('');
  };

  const handleFileUpload = () => {
    if (role === 'admin' && files.length > 0 && categoryName) {
      setIsLoading(true);
      const formData = new FormData();

      files.forEach((file) => {
        const uniqueFileName = `${uuidv4()}-${file.name}`; 
        formData.append('files', file, uniqueFileName); 
      });
      formData.append('categoryName', categoryName);

      axios
        .post('http://localhost:4000/upload', formData)
        .then((response) => {
          setUploadStatus('Images uploaded successfully!');
          fetchImages();
          setFiles([]);
          setIsLoading(false);
        })
        .catch((error) => {
          setUploadStatus(error.response?.data?.message || 'Error uploading files. Please try again.');
          setIsLoading(false);
        });
    } else {
      setUploadStatus('You do not have permission to upload images.');
    }
  };

  const handleDeleteImage = (id) => {
    if (role === 'admin') {
      axios
        .delete(`http://localhost:4000/images/${id}`)
        .then((response) => {
          fetchImages();
        })
        .catch((error) => {
          console.error('Error deleting image:', error);
        });
    }
  };

  return (
    <div className="w-full h-full">
      <NavLinksBar />
      <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8">
        <h2 className="w-full h-full text-4xl font-serif font-semibold my-8">
          Gallery / {categoryName}
        </h2>
        <a className="text-blue-500 mb-4 flex" href="/Gallery">
          Back to All Gallery
        </a>
        {role === 'admin' && (
          <div className='mb-4'>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleFileUpload} disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Upload Images'}
            </button>
            {uploadStatus && <p>{uploadStatus}</p>}
          </div>
        )}
        <div className="grid gap-y-16 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mb-8">
          {images.map((image, index) => (
            <div key={index} className="">
              <img
                src={`http://localhost:4000/uploads/${image.originalFileName}`}
                alt={image.originalFileName}
                className="w-full h-full object-cover rounded-lg shadow-2xl cursor-pointer mb-2"
                onClick={() => openImageModal(image)}
              />
              {role === 'admin' && (
                <button
                  className="bg-red-500 text-white px-4 py-2  rounded-md"
                  onClick={() => handleDeleteImage(image._id)} 
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="max-w-7xl max-h-2xl h-screen p-4 bg-transparent">
              <img
                src={`http://localhost:4000/uploads/${selectedImage.originalFileName}`}
                alt={selectedImage.originalFileName}
                className="w-full h-full object-contain rounded-sm"
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
    </div>
  );
}

export default GalleryPage;
