import React, { useState } from "react";
import axios from "axios";

const APIVerification = () => {
  const [candidateId, setCandidateId] = useState("");
  const [history, setHistory] = useState({});
  const [employment, setEmployment] = useState({});

  const handleCheck = async () => {
    const historyRes = await axios.get(
      `http://localhost:5000/api/criminal/${candidateId}`
    );
    const employmentRes = await axios.get(
      `http://localhost:5000/api/employment/${candidateId}`
    );

    setHistory(historyRes.data);
    setEmployment(employmentRes.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>API Verification</h2>
      <input
        type="text"
        placeholder="Candidate ID"
        value={candidateId}
        onChange={(e) => setCandidateId(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>

      <div>
        <h3>Criminal History:</h3>
        <pre>{JSON.stringify(history, null, 2)}</pre>

        <h3>Employment History:</h3>
        <pre>{JSON.stringify(employment, null, 2)}</pre>
      </div>
    </div>
  );
};

export default APIVerification;
