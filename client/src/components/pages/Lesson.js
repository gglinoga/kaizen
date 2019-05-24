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
        courseID: "",
        i: 0,
        courseName: "",
        lessonNames: [],
        lessonMaterial: [],
        quizzes: []
    };


    updateLesson = () => {
        if (this.state.i < this.state.lessonNames.length - 1) {
            this.setState({ i: this.state.i + 1 }, () => {
                console.log(this.state)
                document.getElementById("nextPage").style.display = "none"; // no
            });
        }
    };

    callAPI = () => {
        fetch("/users/currentCourse", {
            method: 'GET',
        })
        .then(res => {
            let foo = res.json();
            foo.then(json => {
                this.setState({courseID: json[0].currentCourse})
               })
        }).then()
        .catch(error => {
            if (error) throw error
        })
    }

// If getLesson is getting the json data from the table like intend, we setState.
// this.setState({courseName: json[courseID].courseName}) <----might not need this one if we don't want to display name
// this.setState({lessonNames: json[courseID].lessonNames})
// this.setState({lessonMaterial: json[courseID].lessonMaterial})
// this.setState({quizzes: json[courseID].quizzes})


    getLesson= () => {
        console.log('GL ' + this.state.courseID)
        fetch("/api/lesson", {
            method: 'POST',
            headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
                id: this.state.courseID
			})
        }).then( (res) => {
            console.log(this.state.courseID);
            let foo = res.json();
            foo.then(json => {
                console.log(json);
                    })
        })   
        .catch(error => {
            if (error) throw error
        })
    }

    componentWillMount () {
        this.callAPI()
    }
    componentDidUpdate() {
        this.getLesson();
    }


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