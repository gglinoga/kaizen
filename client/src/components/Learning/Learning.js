import React from "react";

const style = {

    courseName: {
        fontFamily: "'Questrial', sans-serif",
        textAlign: "center",
        fontSize: "24px",
        display: "table",
        margin: "auto",
        marginBottom: "10px"

    },

    lessonMaterial: {
        textAlign: "justify"
    },

    img: {
        width: "100%",
    },
}

const Learning = props => (
    <div className="container" className="header">
        <div className="row">
        <div className="courseName" style={style.courseName}>{props.courseName}</div>
        </div>
        <div className="row">
            <div className="col-6">
            <p className="lessonMaterial" style={style.lessonMaterial}>{props.lessonMaterial}</p>
            </div>
            <div className="col-6">
            <img className="lessonPic" style={style.img} src={props.lessonPic} alt=""></img>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col">
            <form>
                <h4>Quiz</h4>
                <p><b>{props.quizQuestion}</b></p>
                <input type="radio" name="quiz" value={props.choice0} /> {props.choice0}<br />
                <input type="radio" name="quiz" value={props.choice1} /> {props.choice1} <br />
                <input type="radio" name="quiz" value={props.choice2} /> {props.choice2} <br />
                <input type="radio" name="quiz" value={props.choice3} /> {props.choice3} <br />
                <p></p>
                <input type="submit" value="Submit" />
                <p></p>
            </form>
            </div>
            </div>
        </div>
);

export default Learning;