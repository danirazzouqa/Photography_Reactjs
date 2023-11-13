import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavLinksBar from '../NavLinksBar';


function PrintPage() {
  const { printName } = useParams();
  const [selectedPrint, setSelectedPrint] = useState(null); // New state for the selected print

  const sizes = [
    { name: '8x10 inches', price: 20.0 },
    { name: '12x18 inches', price: 30.0 },
    { name: '16x20 inches', price: 40.0 },
  ];

  useEffect(() => {
    // Fetch the selected print
    axios
      .get(`http://localhost:4000/prints?printName=${printName}`)
      .then((response) => {
        const [selectedPrint] = response.data;
        console.log('Selected Print:', selectedPrint);
        setSelectedPrint(selectedPrint); // Update the selected print state
      })
      .catch((error) => {
        console.error('Error fetching print:', error);
      });
  }, [printName]);

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [totalPrice, setTotalPrice] = useState(selectedSize.price);

  const handleSizeChange = (event) => {
    const selected = sizes.find((size) => size.name === event.target.value);
    setSelectedSize(selected);
    setTotalPrice(selected.price);
  };

  return (
    <div className="w-full h-full">
      <NavLinksBar />
      <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8">
        <h2 className="w-full h-full text-4xl font-serif font-semibold my-8">
          Prints / {printName}
        </h2>
        <a className="text-blue-500 py-8" href="/Prints">
          Back to All Prints
        </a>
        <div className="flex justify-center items-center mt-10">
          <div className="max-w-4xl bg-white p-12 rounded-lg w-full">
          <div className="flex space-x-14">
                {selectedPrint && (
                    <div className="w-1/2 " >
                    <img
                        src={`http://localhost:4000/uploads/${selectedPrint.imageFileName}`}
                        alt=""
                        className="rounded-lg object-cover w-full"
                    />
                    </div>
                )}
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold text-center p-4">{printName}</h1>
                    <p className="text-gray-500 text-center mb-14">
                    {selectedPrint?.description}
                    </p>

                    <div className="mb-4">
                    <label htmlFor="size" className="text-gray-600">
                        Select Size:
                    </label>
                    <select
                        id="size"
                        value={selectedSize.name}
                        onChange={handleSizeChange}
                        className="block w-full mt-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        {sizes.map((size) => (
                        <option key={size.name} value={size.name}>
                            {size.name} - ${size.price.toFixed(2)}
                        </option>
                        ))}
                    </select>
                    </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintPage;
