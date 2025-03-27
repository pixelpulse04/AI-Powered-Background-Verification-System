import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCRScanner = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleScan = () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const imgData = event.target.result;

      Tesseract.recognize(imgData, "eng", {
        logger: (m) => console.log(m),
      })
        .then(({ data: { text } }) => {
          setText(text);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>OCR Document Scanner</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleScan}>Scan</button>

      {loading && <p>Loading...</p>}
      {text && (
        <div>
          <h3>Scanned Text:</h3>
          <pre>{text}</pre>
        </div>
      )}
    </div>
  );
};

export default OCRScanner;
