import React from "react";

const Learning = props => (
    <div className="header">
        <div>
            <h1 className="courseName">{props.courseName}</h1>
            <img className="lessonPic" src={props.lessonPic} alt=""></img>
            <p className="lessonMaterial">{props.lessonMaterial}</p>
            <form>
                <p>{props.quizQuestion}</p>
                <input type="radio" name="quiz" value={props.choice0} /> {props.choice0}<br />
                <input type="radio" name="quiz" value={props.choice1} /> {props.choice1} <br />
                <input type="radio" name="quiz" value={props.choice2} /> {props.choice2} <br />
                <input type="radio" name="quiz" value={props.choice3} /> {props.choice3} <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
);

export default Learning;