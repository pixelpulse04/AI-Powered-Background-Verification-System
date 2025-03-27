import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Pages
import EmployerPortal from "./pages/EmployerPortal";
import CandidatePortal from "./pages/CandidatePortal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// Importing Components
import Navbar from "./components/Navbar"; // Ensure correct casing
import Footer from "./components/Footer";   // Ensure correct casing

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/employer" element={<EmployerPortal />} />
            <Route path="/candidate" element={<CandidatePortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
