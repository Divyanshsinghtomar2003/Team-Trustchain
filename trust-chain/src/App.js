// src/App.js
import React from "react";
import Home from "./home";  // Home.jsx import
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
