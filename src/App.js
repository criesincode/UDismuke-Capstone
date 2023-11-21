import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import TopsBottoms from "./pages/TopsBottoms/TopsBottoms"
import "./App.scss"



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<HomePage />} />
          <Route path="/outfit" element={<TopsBottoms />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
