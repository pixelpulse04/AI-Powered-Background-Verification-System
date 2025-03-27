import React from "react";

const Feedback = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Feedback</h2>
      <textarea className="w-full p-4 border rounded mt-4" rows="4" placeholder="Write your feedback..."></textarea>
    </div>
  );
};

export default Feedback;
