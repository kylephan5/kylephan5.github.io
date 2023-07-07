import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function App() {
  const [currently, setCurrently] = useState("playing ping pong 🏓");
    
  function WhatAmIDoing(i) {
      let tasks = ["resting for a good day tomorrow 🤓", "playing Catan 🎲", "stuffing my face with food 🍲", "watching the Clippers 🏀", "learning Swift 📱", "in NYC!!! 🏙️", "resting for a good day tomorrow 🤓"];
      setCurrently(() => tasks[i]);
  }
  var d = new Date();
  // window.onpageshow = () => WhatAmIDoing(Math.ceil(d.getHours()/4));

  useEffect(() => {
    WhatAmIDoing(Math.ceil(d.getHours()/4))
  }, [])

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>  
          <Route path='/' element={<Home currently={currently}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contactme' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
