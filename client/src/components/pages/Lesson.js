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
        paddingBottom: "60px"
    },

    content: {
        backgroundColor: "white",
    },

    row1: {
        height: "20px",
    }

}


class Lesson extends Component {
    state = {
        i: 0,
        courseName: "Example Lesson",
        lessonNames: ["LESSON 1: Welcome to Something", "Lesson 2: I didn't think I will get this far"],
        lessonPic: ["https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1", "https://images.code.org/ac720d8ae4d6380fc72c8d6659910bcf-image-1446407286955.png"],
        lessonMaterial: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit ipsum, commodo id mauris et, ullamcorper dignissim urna. Nullam sit amet ligula sit amet mi vestibulum tristique. Nunc iaculis, ipsum eu scelerisque viverra, tortor lorem efficitur felis, quis porta mi nisi eget nunc. Sed accumsan semper diam id porttitor."],
        quizzes: [{
            question: "What is an array?",
            choice: [" Lorem ipsum dolor sit amet", " Lorem ipsum dolor sit amet", " Lorem ipsum dolor sit amet", " Lorem ipsum dolor sit amet"],
            correctAnswer: "c"
        },
        {
            question: "Test Question 2?",
            choice: ["1", "2", "3", "4"],
            correctAnswer: "1"
        }
        ]
    };

    updateLesson = () => {
        if (this.state.i < this.state.lessonNames.length - 1) {
            console.log(this)
            let counter = this.state.i;
            counter++;
            this.setState({ i: counter });
            console.log(this.state.i)
        }
    };

    render() {
        return (
            <div>
                <Navbar courseTitle={this.state.courseName} />
                <div class="container" style={style.home}>
                    <div className="row" style={style.row1}></div>
                    <div className="row">
                        <Sidenav />
                        <div className="col-2">
                        </div>
                        <div className="col-8">
                            <Learning
                                courseName={this.state.lessonNames[this.state.i]}
                                lessonPic={this.state.lessonPic[this.state.i]}
                                lessonMaterial={this.state.lessonMaterial[this.state.i]}
                                quizQuestion={this.state.quizzes[this.state.i].question}
                                choice0={this.state.quizzes[this.state.i].choice[0]}
                                choice1={this.state.quizzes[this.state.i].choice[1]}
                                choice2={this.state.quizzes[this.state.i].choice[2]}
                                choice3={this.state.quizzes[this.state.i].choice[3]}
                            >
                            </Learning>
                            <button onClick={this.updateLesson}>Next Page</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lesson;