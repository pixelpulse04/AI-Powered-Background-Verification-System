import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/5 h-screen p-4">
      <ul>
        <li className="p-4 hover:bg-gray-600">
          <Link to="/employer">Dashboard</Link>
        </li>
        <li className="p-4 hover:bg-gray-600">
          <Link to="/candidates">Candidates</Link>
        </li>
        <li className="p-4 hover:bg-gray-600">
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
