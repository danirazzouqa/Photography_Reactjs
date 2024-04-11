import React, { useState } from 'react';
import axios from 'axios';

function ImgUploader() {
  const [files, setFiles] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.every(file => file.type.startsWith('image/'))) {
      setFiles(selectedFiles);
      setUploadStatus('');
    } else {
      setUploadStatus('Please select only image files.');
      setFiles([]);
    }
  };
  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };

  const resetForm = () => {
    setFiles(null);
    setCategoryName('');
    setUploadStatus('');
    setIsLoading(false);
  };

  const handleFileUpload = () => {
    if (files.length > 0 && categoryName) {
      setIsLoading(true);
      const formData = new FormData();

      files.forEach(file => {
        formData.append('files', file);
      });
      formData.append('categoryName', categoryName);

      axios.post('http://localhost:4000/upload', formData)
        .then(response => {
          setUploadStatus('Images uploaded successfully!');
          resetForm();
        })
        .catch(error => {
          setUploadStatus(error.response?.data?.message || 'Error uploading files. Please try again.');
          setIsLoading(false);
        });
    } else {
      setUploadStatus('Please fill in all required fields and select at least one image.');
    }
  };

  return (
    <div className="ImgUploader absolute left-[20%] top-[20%] p-4 bg-white shadow-lg rounded">
      <h1>Image Uploader</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={handleCategoryChange}
      />
      <button onClick={handleFileUpload} disabled={isLoading}>
        {isLoading ? 'Uploading...' : 'Upload Images'}
      </button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default ImgUploader;