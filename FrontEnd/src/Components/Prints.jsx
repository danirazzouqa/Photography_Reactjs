import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavLinksBar from './NavLinksBar';
import { AuthContext } from '../context/AuthContext';

function Prints() {
  const [prints, setPrints] = useState([]);
  const [name, setName] = useState('');
  const [imageFileName, setImageFileName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const role = user?.role;

  const fetchPrints = useCallback(() => {
    axios
      .get('http://localhost:4000/prints')
      .then((response) => {
        setPrints(response.data);
      })
      .catch((error) => {
        console.error('Error fetching prints:', error);
      });
  }, []);

  useEffect(() => {
    fetchPrints();
  }, [fetchPrints]);

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
    if (role === 'admin' && name && imageFileName && description && imageFile) {
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
          setPrints(prevPrints => [...prevPrints, response.data]);
          setIsLoading(false);
        })
        .catch(error => {
          setUploadStatus(error.response?.data?.message || 'Error uploading print details. Please try again.');
          setIsLoading(false);
        });
    } else {
      setUploadStatus('You do not have permission to upload prints or missing fields.');
    }
  };

  const handleDeletePrint = (printId) => {
    if (role === 'admin') {
      axios
        .delete(`http://localhost:4000/prints/${printId}`)
        .then(() => {
          setPrints(prevPrints => prevPrints.filter(print => print._id !== printId));
        })
        .catch((error) => {
          console.error('Error deleting print:', error);
        });
    }
  };

  return (
    <div className='w-full h-full bg-slate-100 overflow-x-hidden '>
      <NavLinksBar />
      <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8 ">
        <h2 className="w-full h-full text-3xl font-bold my-8 ml-4">
          Prints
        </h2>

        
        {role === 'admin' && (
          <div className='container justify-center items-center text-center mx-auto mt-12 space-x-4 '>
            <h2 className='mb-4 font-semibold'>Create a Print</h2>
            <input
            name='name'
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className='w-[500px] mb-4 '
            />
            <input
            name='imageFileName'
              type="text"
              placeholder="Image File Name"
              value={imageFileName}
              onChange={handleImageFileNameChange}
              className='w-[500px] mb-4'
            />
            <textarea
            name='description'
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
            <button className='px-6 bg-gray-300 rounded-md mb-4' onClick={handlePrintUpload} disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Upload Print'}
            </button>
            {uploadStatus && <p className="mt-2 text-red-500">{uploadStatus}</p>}
          </div>
        )}

        <div className="w-full grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 gap-y-10 md:gap-y-8">
          {prints.map((print) => (
            <div key={print._id} className="rounded-lg text-center mx-auto">
              <Link to={`/Prints/${print.name}`}>
                <div data-testid="print-item" className="group flex flex-col">
                  <img
                    src={`http://localhost:4000/uploads/${print.imageFileName}`}
                    alt={print.name}
                    className="w-[350px] h-[450px] rounded-lg object-cover shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl md:text-lg lg:text-xl xl:text-2xl font-bold text-center p-2">
                  {print.name}
                </h3>
              </Link>
              
              {role === 'admin' && (
                <button onClick={() => handleDeletePrint(print._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete Print</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prints;
