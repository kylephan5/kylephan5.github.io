import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const [currently, setCurrently] = useState();
    
  function WhatAmIDoing(i) {
      let tasks = ["resting for a good day tomorrow 🤓", "playing Catan 🎲", "stuffing my face with food 🍲", "watching the Clippers 🏀", "learning Swift 📱", "in NYC!!! 🏙️", "resting for a good day tomorrow 🤓"];
      setCurrently(() => tasks[i]);
  }
  var d = new Date();
  window.onload = ()=>WhatAmIDoing(Math.ceil(d.getHours()/4));
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>  
          <Route path='/' element={<Home currently={currently}/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
