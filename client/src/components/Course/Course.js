import React from "react";

const style = {

    card: {
        width: "275px",
        height: "225px",
        padding: "30px",
        fontFamily: "'Questrial', sans-serif",
        color: "white",
        margin: "20px 30px 20px",
        backgroundImage: "linear-gradient(to bottom, blue, red)",
        // border: "grey 2px solid",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px grey",
        textAlign: "center", 
        fontSize: "24px"
        // display: "inline-block"
    },

    img: {
        maxWidth: "100px"
    }
}

const Course = props => (
    <div style={style.card} onClick={()=>props.handleClick(props.id)}>
            <p>{props.title}</p>
            <img src={props.img} style={style.img}></img>
            {/* <p>{props.course.description}</p> */}
            {/* <p>No. Lessons: {props.course.numLessons}</p> */}
    </div>
);

export default Course;