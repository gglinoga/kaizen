import React from "react";

const style = {
    width: "28%",
    margin: "auto",
}

const flexParent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "500px",
    flexWrap: "wrap",

}

const flexChild = {
    width: "300px",
    height: "150px",
    backgroundColor: "white",
    padding: "20px",
    margin: "2px"
}


const Lessons = props => (
    <div class="flex-container" style={flexParent}>
    <div style={flexChild}>Some quick example text to build on the card title and make up the bulk of the card's content</div>
    <div style={flexChild}>Some quick example text to build on the card title and make up the bulk of the card's content</div>
    <div style={flexChild}>Some quick example text to build on the card title and make up the bulk of the card's content</div>
    <div style={flexChild}>Some quick example text to build on the card title and make up the bulk of the card's content</div>
    <div style={flexChild}>Some quick example text to build on the card title and make up the bulk of the card's content</div>
    <div style={flexChild}>Some quick example text to build on the card title and make up the bulk of the card's content</div>


    </div>
);

export default Lessons;