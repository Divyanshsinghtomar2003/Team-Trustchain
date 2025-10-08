// src/App.js
import React from "react";
import Home from "./home";  // Home.jsx import
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./signup";
import Login from "./login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/customer-dashboard" element={<h2>Welcome to Customer Dashboard</h2>}/>
        <Route path="/bank-dashboard" element={<h2>Welcome to Bank Dashboard</h2>}/>
        <Route path="/rbi-dashboard" element={<h2>Welcome to RBI Dashboard</h2>}/>
      </Routes>
    </Router>
  );
}

export default App;
