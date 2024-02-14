import React, { useState } from 'react';
import axios from 'axios';

function PrintUploader() {
  const [name, setName] = useState('');
  const [imageFileName, setImageFileName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

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

  const resetForm = () => {
    setName('');
    setImageFileName('');
    setDescription('');
    setImageFile(null);
    setUploadStatus('');
    setIsLoading(false);
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
          resetForm();
        })
        .catch(error => {
          setUploadStatus(error.response?.data?.message || 'Error uploading print details. Please try again.');
          setIsLoading(false);
        });
    } else {
      setUploadStatus('Please fill in all required fields and select an image file.');
    }
  };

  return (
    <div className="w-full h-full">
      <div className="container w-full h-full mx-auto p-4 md:p-6 lg:p-8">
        <h2 className="w-full h-full text-4xl font-serif font-semibold my-8">
          Upload Print
        </h2>
        <div className="flex justify-center items-center mt-10">
          <div className="max-w-4xl bg-white p-12 rounded-lg w-full">
            <div className="flex space-x-14">
              <div className="w-1/2 p-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  className="block w-full mt-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  placeholder="Image File Name"
                  value={imageFileName}
                  onChange={handleImageFileNameChange}
                  className="block w-full mt-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="block w-full mt-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <input
                  type="file"
                  onChange={handleImageFileChange}
                  className="block w-full mt-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <button onClick={handlePrintUpload} disabled={isLoading} className="block w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600">
                  {isLoading ? 'Uploading...' : 'Upload Print Details'}
                </button>
                {uploadStatus && <p className="mt-2 text-red-500">{uploadStatus}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintUploader;
