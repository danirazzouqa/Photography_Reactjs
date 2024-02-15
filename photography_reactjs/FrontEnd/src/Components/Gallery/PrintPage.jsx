import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavLinksBar from '../NavLinksBar';
import { AuthContext } from '../../context/AuthContext';

function PrintPage() {
  const { printName } = useParams();
  console.log('Current printName:', printName);
  const [selectedPrint, setSelectedPrint] = useState();
  const [uploadStatus, setUploadStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [imageFileName, setImageFileName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const { user } = useContext(AuthContext);
  const role = user?.role;

  const sizes = [
    { name: '8x10 inches'},
    { name: '12x18 inches'},
    { name: '16x20 inches'},
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:4000/prints?printName=${printName}`)
      .then((response) => {
        setSelectedPrint(response.data);
      })
      .catch((error) => {
        console.error('Error fetching print:', error);
      });
  }, [printName]);

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [setTotalPrice] = useState(selectedSize.price);

  const handleSizeChange = (event) => {
    const selected = sizes.find((size) => size.name === event.target.value);
    setSelectedSize(selected);
    setTotalPrice(selected.price);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageFileNameChange = (e) => {
    setImageFileName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handlePrintUpload = () => {
    if (name && imageFileName && description && imageFile) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('imageFileName', imageFileName);
      formData.append('description', description);
      formData.append('imageFile', imageFile);

      axios.post('http://localhost:4000/prints', formData)
        .then(response => {
          setUploadStatus('Print details uploaded successfully!');
          setName('');
          setImageFileName('');
          setDescription('');
          setImageFile(null);
          setSelectedPrint(response.data); // Update selectedPrint state with the newly uploaded print
          setIsLoading(false);
        })
        .catch(error => {
          setUploadStatus(error.response?.data?.message || 'Error uploading print details. Please try again.');
          setIsLoading(false);
        });
    } else {
      setUploadStatus('Please fill in all required fields and select an image file.');
    }
  };

  const handleDeletePrint = () => {
    if (role === 'admin' && selectedPrint) {
      axios
        .delete(`http://localhost:4000/prints/${selectedPrint._id}`)
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
        {role === 'admin' && (
          <div className='container justify-center items-center text-center mx-auto mt-12 space-x-4 '>
            <h2>Create a Print</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className='w-[500px] mb-4 '
            />
            <input
              type="text"
              placeholder="Image File Name"
              value={imageFileName}
              onChange={handleImageFileNameChange}
              className='w-[500px] mb-4'
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              className='w-[500px] h-[200px] mb-4 mx-auto'
            />
            <input
              type="file"
              onChange={handleImageFileChange}
              className='mb-4'
            />
            <button className='px-6 bg-gray-300 rounded-md' onClick={handlePrintUpload} disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Upload Print'}
            </button>
            {uploadStatus && <p className="mt-2 text-red-500">{uploadStatus}</p>}
          </div>
        )}

        <div className="flex justify-center items-center mt-10 h-screen">
          <div className="max-w-4xl  p-12 rounded-lg w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14">
            {selectedPrint && (
              <div className="w-full md:w-1/2">
                <img
                  src={`http://localhost:4000/uploads/${selectedPrint.imageFileName}`}
                  alt=""
                  className="rounded-lg object-cover w-full h-[500px]"
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
                  value={selectedSize.name}
                  onChange={handleSizeChange}
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
