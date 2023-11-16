import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import CuratedFit from "./pages/CuratedFit/CuratedFit"
import "./App.scss"



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<HomePage />} />
        <Route path="/outfit" element={<CuratedFit />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
