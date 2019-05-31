import React from "react";

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

    img: {
        width: "80px",
        contentAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
}

const Course = props => (
    <div style={style.card} onClick={()=>props.handleClick(props.id)}>
            <p>{props.title}</p>
            <img style={style.img} src={props.img}></img>
            {/* <p>{props.course.description}</p> */}
            {/* <p>No. Lessons: {props.course.numLessons}</p> */}
    </div>
);

export default Course;