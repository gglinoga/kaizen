import React from "react";
import { MDBContainer } from "mdbreact";

const style = {

    card: {
        width: "200px",
        height: "175px",
        padding: "30px",
        fontFamily: "'Questrial', sans-serif",
        color: "white",
        margin: "5px 30px",
        backgroundImage: "linear-gradient(to bottom, blue, red)",
        border: "grey 2px solid",
        display: "inline-block"

    },
}

const Course = props => (
    // <MDBContainer>
    <td>
    <div style={style.card} onClick={props.loginEvent}>
            <p>{props.title}</p>
            {/* <p>{props.course.description}</p> */}
            {/* <p>No. Lessons: {props.course.numLessons}</p> */}
    </div>
    </td>
    // </MDBContainer>
);

export default Course;