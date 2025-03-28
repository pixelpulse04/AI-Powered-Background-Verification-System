import React from "react";
// import Navbar from "./Navbar";

const CandidateDashboard = () => {
  return (
    <div className="p-6">
      {/* <Navbar /> */}
      <h1 className="text-3xl font-bold">Candidate Dashboard</h1>

      {/* Status Tracker */}
      <div className="mt-6 bg-blue-100 p-4 rounded-lg">
        <h2 className="text-2xl">Verification Status: In Progress</h2>
        <p className="text-lg">Estimated completion: 2 hours</p>
      </div>
    </div>
  );
};

export default CandidateDashboard;
