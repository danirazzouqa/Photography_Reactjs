import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavLinksBar from './NavLinksBar';

function TakeQuiz() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch category data from the backend
    axios
      .get('http://localhost:4000/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className='w-full h-screen bg-slate-100'>
     <NavLinksBar />

    <div className="container  mx-auto  p-4">
     
     <h2 className="text-3xl font-bold my-8 ml-4  ">
        Gallary
      </h2>
      <div className="grid grid-cols-4 gap-5 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg text-center shadow-2xl   bg-transparent w-[300px] px-0 relative"
          >
            {/* Display the image for the category */}
            <div className="relative group">
              <img
                src={`http://localhost:4000/uploads/${category.imageFileName}`}
                alt={category.name}
                className="w-[300px] h-[400px] rounded-lg mx-auto object-cover"
              />
              <h3 className="text-2xl font-bold  absolute top-[50%] left-0 right-0  text-white text-center opacity-0 group-hover:opacity-100 p-2 transition-opacity">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TakeQuiz;
