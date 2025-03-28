import React, { useEffect, useState } from "react";

const StatusTracker = () => {
  const [status, setStatus] = useState("In Progress");

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus("Verified");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-lg bg-green-200">
      <h2 className="text-2xl">Status: {status}</h2>
    </div>
  );
};

export default StatusTracker;
