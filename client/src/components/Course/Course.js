import React from "react";
import { MDBContainer } from "mdbreact";

const style = {

    card: {
        width: "200px",
        height: "175px",
        padding: "30px",
        fontFamily: "'Questrial', sans-serif",
        color: "white",
        margin: "5px 5px",
        backgroundImage: "linear-gradient(to bottom, blue, red)",
        border: "grey 2px solid"

    },
}

const Course = props => (
    <MDBContainer>
    <div class="container">
    <div style={style.card} onClick={props.loginEvent}>
            <p>{props.title}</p>
            {/* <p>Description: {props.course.description}</p> */}
            {/* <p>Number of Lessons: {props.course.numLessons}</p> */}
    </div>
    </div>
    </MDBContainer>
);

export default Course;