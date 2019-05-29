import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Uploadform from "../../components/Uploadform/Uploadform";

class Upload extends Component {


render() {
    return (
        <div>
            <Navbar />
            <div className='container'>
            <Uploadform />
      
            </div>
        </div>
    )}
}

export default Upload;  