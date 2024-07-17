import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavLinksBar from '../NavLinksBar';
import { AuthContext } from '../../context/AuthContext';

function PrintPage() {
  const { printName } = useParams();
  console.log('Current printName:', printName);
  const [selectedPrint, setSelectedPrint] = useState();
  const { user } = useContext(AuthContext);
  const role = user?.role;

  const sizes = [
    { name: '8x10 inches'},
    { name: '12x18 inches'},
    { name: '16x20 inches'},
  ];

  useEffect(() => {
    axios
      .get(`https://photography-reactjs.onrender.com/prints?printName=${printName}`)
      .then((response) => {
        setSelectedPrint(response.data);
      })
      .catch((error) => {
        console.error('Error fetching print:', error);
      });
  }, [printName]);

  const handleDeletePrint = () => {
    if (role === 'admin' && selectedPrint) {  
      axios
        .delete(`https://photography-reactjs.onrender.com/prints/${selectedPrint._id}`)
        .then((response) => {
          setSelectedPrint(null);
        })
        .catch((error) => {
          console.error('Error deleting print:', error);
        });
    }
  };

  return (
    <div className="w-full h-full bg-slate-100">
      <NavLinksBar />
      <div className="container mx-auto text-center px-4 md:px-6 lg:px-8 py-8 ">
        <h2 className="w-full h-full text-4xl font-serif font-semibold my-8">Prints / {printName}</h2>
        <a className="text-blue-500 py-8 block" href="/Prints">
          Back to All Prints
        </a>
        {role === 'admin' && selectedPrint && (
          <div className="mb-4">
            <button onClick={handleDeletePrint} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Delete Print</button>
          </div>
        )}

        <div className="flex justify-center items-center mt-10">
          <div className="max-w-4xl  p-12 rounded-lg w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14">
            {selectedPrint && (
              <div className="w-full md:w-1/2">
                <img
                  src={`https://photography-reactjs.onrender.com/uploads/${selectedPrint.imageFileName}`}
                  alt=""
                  className="rounded-lg object-cover w-full h-auto md:h-[500px]"
                />
              </div>
            )}
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-2xl font-bold text-center  p-4">{printName}</h1>
              <p className="text-gray-500 text-center  mb-4">
                {selectedPrint?.description}
              </p>

              <div className="mb-4">
                <label htmlFor="size" className="text-gray-600 font-bold ">
                  Select Size:
                </label>
                <select
                  id="size"
                  className="block text-center mb-6 mt-2 mx-auto  rounded-md border-b-2 border-black "
                >
                  {sizes.map((size) => (
                    <option key={size.name} value={size.name}>
                      {size.name}
                    </option>
                  ))}
                </select>
                <a href="/contact" className='mx-auto bg-gray-300 text-black shadow-black shadow-lg px-4 py-2 rounded-md'>Get Price</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintPage;
