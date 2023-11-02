import React, { useState } from 'react';
import axios from 'axios';

function ImgUploader() {
  const [file, setFile] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [originalFileName, setOriginalFileName] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleOriginalFileNameChange = (e) => {
    setOriginalFileName(e.target.value);
  };
  

  const handleFileUpload = () => {
    if (file && categoryName && originalFileName) {
      // Create a new FormData object
      const formData = new FormData();

      // Append the file, category name, and original file name to the FormData
      formData.append('file', file);
      formData.append('categoryName', categoryName);
      formData.append('originalFileName', originalFileName);

      // Send the FormData to the server for storage
      axios
        .post('http://localhost:4000/upload', formData)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.log('Please fill in all required fields.');
    }
  };

  return (
    <div className="ImgUploader absolute left-[20%] top-[20%]">
      <h1>Image Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Category Name"
        onChange={handleCategoryChange}
      />
      <input
        type="text"
        placeholder="Original File Name"
        value={originalFileName}
        onChange={handleOriginalFileNameChange} // Capture the user's input for original file name
      />
      <button onClick={handleFileUpload}>Upload Image</button>
    </div>
  );
}

export default ImgUploader;
