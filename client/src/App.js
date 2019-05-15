import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Description from './components/Description/Description.js';
import Footer from './components/Footer/Footer.js';
import Lessons from './components/Lessons/Lessons';


let puppies = './images/puppies.jpeg';

const style = {
  backgroundColor: "#ee940d",
  height: "100%"
}

function App() {
  return (
    <div style={style}>
      <Navbar/>
      <Description/>
      <Lessons
        name
        />
      <Footer/>
    </div>
  );
}

export default App;
