import React from "react";
import { MDBContainer } from "mdbreact";

const style = {
    container: {
        display: "flex",
    },

    card: {
        width: "200px",
        height: "175px",
        padding: "30px",
        fontFamily: "'Questrial', sans-serif",
        backgroundColor: "royalblue",
        color: "white",
        margin: "5px 5px"
    },
}

const Course = props => (
    <MDBContainer>

    <div class="container" style={style.container}>
    <div style={style.card}>
            <p>{props.course.title}</p>
            {/* <p>Description: {props.course.description}</p> */}
            {/* <p>Number of Lessons: {props.course.numLessons}</p> */}
    </div>
    </div>
    </MDBContainer>
);

export default Course;