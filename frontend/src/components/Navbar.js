import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Background Verification</h1>
      <div>
        <Link to="/" className="mx-4">Login</Link>
        <Link to="/signup" className="mx-4">Signup</Link>
        <Link to="/employer" className="mx-4">Employer</Link>
        <Link to="/candidate" className="mx-4">Candidate</Link>
      </div>
    </nav>
  );
};

export default Navbar;
