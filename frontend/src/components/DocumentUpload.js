import React, { useState } from "react";
import axios from "axios";

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [elaImage, setElaImage] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ["image/jpeg", "image/png", "image/bmp", "image/tiff"];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Invalid file format! Please upload a JPEG, PNG, BMP, or TIFF image.");
      setFile(null);
      return;
    }

    setError(null);
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a valid image file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/detect-forgery/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(response.data);
      setError(null);

      if (response.data.ela_image) {
        setElaImage(`data:image/png;base64,${response.data.ela_image}`);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Error uploading file. Ensure the backend is running and CORS is configured.");
    }
  };

  return (
    <div>
      <h2>Upload an Image for Forgery Detection</h2>

      <input type="file" accept="image/jpeg, image/png, image/bmp, image/tiff" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>Upload & Check Forgery</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h3>Forgery Status:</h3>
          <p>{result.is_forged ? "🚨 Image is Forged!" : "✅ Image is Authentic"}</p>
          {elaImage && <img src={elaImage} alt="ELA Result" style={{ maxWidth: "100%", marginTop: "10px" }} />}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
