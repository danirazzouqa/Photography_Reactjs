import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavLinksBar from './NavLinksBar';
import { Link } from 'react-router-dom';

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
    <div className='w-full h-full bg-slate-100 '>
     <NavLinksBar />

    <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8 ">
     
     <h2 className="w-full h-full text-3xl font-bold my-8 ml-4   ">
        Gallary
      </h2>
      <div className="w-full grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20  gap-y-10 md:gap-y-8   ">
        {categories.map((category, index) => (
         <div key={index} className="rounded-lg text-center w-[300px] mx-auto">
         <Link to={`/Gallery/${category.name}`}>
           <div className="relative group flex flex-col">
             <img
               src={`http://localhost:4000/uploads/${category.imageFileName}`}
               alt={category.name}
               className="w-[300px] h-[450px] rounded-lg object-cover shadow-2xl"
             />
           </div>
           <h3 className="text-2xl md:text-lg lg:text-xl xl:text-2xl font-bold text-center p-2">
             {category.name}
           </h3>
         </Link>
       </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TakeQuiz;
