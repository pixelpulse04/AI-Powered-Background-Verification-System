import React from "react";
import Sidebar from "../components/Sidebar";
import EmployerDashboard from "../components/EmployerDashboard";
import DocumentUpload from "../components/DocumentUpload";
import StatusTracker from "../components/StatusTracker";
import Feedback from "../components/Feedback";

const EmployerPortal = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Employer Portal</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <EmployerDashboard />
          <DocumentUpload />
          <StatusTracker />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default EmployerPortal;
