import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaTimes  } from 'react-icons/fa';
import NavLinksBar from '../NavLinksBar';

function GalleryPage() {
  const { categoryName } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/images?categoryName=${categoryName}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [categoryName]);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full h-full">
      <NavLinksBar />
      <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8">
        <h2 className="w-full h-full text-4xl font-serif font-semibold my-8 ml-">
          Gallery / {categoryName}
        </h2>
        <a className="text-blue-500 py-8" href="/Gallery">
          Back to All Gallery
        </a>
        <div className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            image.originalFileName ? (
              <div
                key={index}
                className={`h-[650px] my-8`}
                onClick={() => openImageModal(image)} // Open modal on click
              >
                <img
                  src={`http://localhost:4000/uploads/${image.originalFileName}`}
                  alt={image.originalFileName}
                  className="w-full h-full object-cover rounded-lg shadow-2xl cursor-pointer"
                />
              </div>
            ) : null
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="max-w-7xl max-h-2xl  h-screen p-4  bg-transparent ">
            <img
              src={`http://localhost:4000/uploads/${selectedImage.originalFileName}`}
              alt={selectedImage.originalFileName}
              className="w-full h-full object-contain rounded-lg "
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

export default GalleryPage;
