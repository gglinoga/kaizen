import React from "react";
import { MDBContainer } from "mdbreact";

const style = {
    container: {
        display: "flex",
        flexWrap: "nowrap",
        margin: "10px",
    },
    card: {
        width: "300px",
        height: "150px",
        backgroundColor: "white",
        padding: "10px",
    }
}

const Course = props => (
    <MDBContainer>
    <div class="container" style={style.container}>
    <div class="row" style={style.card}>
            <p>Title: {props.course.title}</p>
            <p>Description: {props.course.description}</p>
            <p>Number of Lessons: {props.course.numLessons}</p>
    </div>
    </div>
    </MDBContainer>
);

export default Course;