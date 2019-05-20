import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Learning from '../Learning/Learning';
import Sidenav from '../Sidenav/Sidenav';

const style = {

    home: {
        backgroundColor: "white",
        fontFamily: "'Questrial', sans-serif",
        marginTop: "10px",
        margin: "auto",
        display: "table",
    },

    content: {
        backgroundColor: "white",
        padding: "0px 30px 100px 30px"

    },

    row1: {
        height: "20px",
    },

    lessonChange: {
        display: "none"
    },
    border: {
        backgroundColor: "silver"
    }


}


class Lesson extends Component {
    state = {
        i: 0,
        courseName: "Example Lesson",
        lessonNames: ["LESSON 1: Welcome to Something", "Lesson 2: I didn't think I will get this far"],
        lessonPic: ["https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1", "https://images.code.org/ac720d8ae4d6380fc72c8d6659910bcf-image-1446407286955.png"],
        lessonMaterial: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit ipsum, commodo id mauris et, ullamcorper dignissim urna. Nullam sit amet ligula sit amet mi vestibulum tristique. Nunc iaculis, ipsum eu scelerisque viverra, tortor lorem efficitur felis, quis porta mi nisi eget nunc. Sed accumsan semper diam id porttitor."],
        quizzes: [
            {
                question: "What is an array?",
                choices: ["Lorem ipsum", "Lorem ipsum dolor", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit amet"],
                correctAnswer: "Lorem ipsum dolor sit amet"
            },
            {
                question: "Test Question 2?",
                choices: ["1", "2", "3", "4"],
                correctAnswer: "1"
            }
        ]
    };


    updateLesson = () => {
        if (this.state.i < this.state.lessonNames.length - 1) {
            this.setState({ i: this.state.i + 1 }, () => {
                console.log(this.state)
                document.getElementById("nextPage").style.display = "none"; // no
            });
        }
    };

    render() {
        console.log(this.state.quizzes[this.state.i].choices)
        return (
            <div>
                <Navbar courseTitle={this.state.courseName} />
                <div class="container">
                    <Sidenav />
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={style.content}>
                            <div className="row" style={style.row1}></div>
                            <Learning
                                courseName={this.state.lessonNames[this.state.i]}
                                lessonPic={this.state.lessonPic[this.state.i]}
                                lessonMaterial={this.state.lessonMaterial[this.state.i]}
                                quizQuestion={this.state.quizzes[this.state.i].question}
                                correctAnswer={this.state.quizzes[this.state.i].correctAnswer}
                                choices={this.state.quizzes[this.state.i].choices}
                            >
                            </Learning>
                            <button id="nextPage" onClick={this.updateLesson} style={style.lessonChange}>Next Page</button></div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Lesson;