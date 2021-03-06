import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.js';
import Home from '../src/components/pages/Home.js';
import Lesson from '../src/components/pages/Lesson.js';
import LessonComplete from '../src/components/pages/LessonComplete.js'
import User from '../src/components/pages/User.js'
import Upload from '../src/components/pages/Upload.js'


const style = {
  height: "100%",
  backgroundColor: "silver"
}

function App() {
  return (
    <Router>
    <div style={style}>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Lesson" component={Lesson}/>
      <Route exact path="/LessonComplete" component={LessonComplete}/>
      <Route exact path="/User" component={User}/>
      <Route exact path="/Upload" component={Upload}/>
      <Footer/>
    </div>
      </Router>
  );
}

export default App;
