import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
