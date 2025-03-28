import React from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

const EmployerDashboard = () => {
    return (
      <div className="flex">
        <div className="sidebar">
          {/* <Sidebar /> */}
        </div>
        <div className="content">
          {/* <Navbar /> */}
          <h1 className="text-3xl font-bold">Employer Dashboard</h1>
  
          {/* Status Cards */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Verified</h2>
              <p className="text-lg">120</p>
            </div>
  
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">In Progress</h2>
              <p className="text-lg">34</p>
            </div>
  
            <div className="bg-red-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Failed</h2>
              <p className="text-lg">12</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default EmployerDashboard;
