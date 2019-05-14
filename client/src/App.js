import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Description from './components/Description/Description.js';
import Footer from './components/Footer/Footer.js'
import Lessons from './components/Lessons/Lessons';

function App() {
  return (
    <div>
      <Navbar/>
      <Description/>
      <Footer/>
      <Lessons/>
    </div>
  );
}

export default App;
