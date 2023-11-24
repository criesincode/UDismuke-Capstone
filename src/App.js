import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Tops from "./pages/Tops/Tops"
import Bottoms from "./pages/Bottoms/Bottoms";
import Shoes from "./pages/Shoes/Shoes";
import CuratedFit from "./pages/CuratedFit/CuratedFit";
import "./App.scss"




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Tops" element={<Tops />} />
          <Route path="/Bottoms" element={<Bottoms />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/CuratedFit" element={<CuratedFit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
