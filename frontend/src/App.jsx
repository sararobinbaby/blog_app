import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Correct import for routing
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {
  return (
    <Router>  {/* Wrap your routes inside the Router component */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/add" element={<Add />} />  {/* Add post page route */}
      </Routes>
    </Router>
  );
}

export default App;
