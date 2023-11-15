import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.scss"



function App() {
  return (
    <LandingPage />
  )
}

export default App;
