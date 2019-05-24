import React, { Component } from "react";

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
        textAlign: "justify",
    },

    img: {
        width: "50%",
        float: "right",
        paddingLeft: "20px",
        paddingTop: "5px",
        paddingBottom: "5px"

    },

    quiz: {
        border: "black 2px solid",
        padding: "10px 20px",
        margin: "10px 10px"
    }
}

class Learning extends Component {
    state = {
        choices: [],
        selected: null
    }

    handleChange = (selected) => {
        this.setState({ selected }, () => {
            console.log(this.state);
        });
    }

    handleSubmit = () => {
        this.state.selected === this.props.correctAnswer ? this.handleCorrect() : this.handleWrong();
    }

    handleWrong = () => {
        alert("u wrong")
    }

    handleCorrect = () => {
        alert("u correct")
        document.getElementById("nextPage").style.display="inline"; // no
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="courseName" style={style.courseName}>{this.props.courseName}</div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <img className="lessonPic" style={style.img} src={this.props.lessonPic} alt=""></img>
                        <div className="lessonMaterial" style={style.lessonMaterial}>{this.props.lessonMaterial}</div>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col" style={style.quiz}>

                            <h4>Quiz</h4>
                            <p><b>{this.props.quizQuestion}</b></p>
                            {this.props.choices.map((choice, idx) => {
                                return (
                                    <div>
                                        <input type="radio" name="quiz" value={choice} onClick={() => this.handleChange(choice)} />
                                        <label>{choice}</label><br />
                                    </div>
                                );
                            })}
                            <p></p>
                            <input type="submit" onClick={this.handleSubmit} value="Submit" />
                            <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Learning;