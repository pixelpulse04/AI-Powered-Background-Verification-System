import React, { useState } from "react";
import axios from "axios";

const NLPValidation = () => {
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleValidation = async () => {
    try {
      const response = await axios.post("http://localhost:5000/validate", {
        text,
        keywords: keywords.split(","),
      });

      setIsValid(response.data.isValid);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>NLP Document Validation</h2>
      <textarea
        placeholder="Enter document text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Keywords (comma-separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button onClick={handleValidation}>Validate</button>

      {isValid !== null && (
        <p>Validation Result: {isValid ? "Valid" : "Invalid"}</p>
      )}
    </div>
  );
};

export default NLPValidation;
