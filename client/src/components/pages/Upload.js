import React from "react";
import Navbar from "../Navbar/Navbar";

function Upload() {
    return (
        <div>
            <Navbar />
            <div class='container'>
            <p>Select a file: </p>
            <input type="file" name="myFile"/>
            </div>
        </div>
    )
}

export default Upload;