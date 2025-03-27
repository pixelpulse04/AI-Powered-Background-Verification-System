import React, { useState } from "react";

const DocumentUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log("Uploading:", file);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Upload Documents</h2>
      <input type="file" onChange={handleFileChange} className="mt-4" />
      <button 
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Upload
      </button>
    </div>
  );
};

export default DocumentUpload;
