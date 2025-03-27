import React, { useState } from "react";
import axios from "axios";

const RiskAssessment = () => {
  const [data, setData] = useState([0, 0, 0]);
  const [riskScore, setRiskScore] = useState("");

  const handleRiskAssessment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/assess-risk", {
        data,
      });

      setRiskScore(response.data.riskScore);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Risk Assessment</h2>
      <input
        type="text"
        placeholder="Data (comma-separated)"
        value={data.join(",")}
        onChange={(e) =>
          setData(e.target.value.split(",").map((num) => parseFloat(num)))
        }
      />
      <button onClick={handleRiskAssessment}>Assess Risk</button>

      {riskScore && <p>Risk Score: {riskScore}</p>}
    </div>
  );
};

export default RiskAssessment;
