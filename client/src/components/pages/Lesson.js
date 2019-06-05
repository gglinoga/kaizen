import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Learning from '../Learning/Learning';
import Sidenav from '../Sidenav/Sidenav';

const style = {

    home: {
        background: "url('https://i.pinimg.com/originals/c9/3e/60/c93e60f99f1a8876d3271463a4d93561.png')",
        backgroundSize: "300px",
        height: "auto",
        width: "100%",
        position: "absolute",
        zIndex: "-2"
    },

    content: {
        backgroundColor: "white",
        padding: "0px 30px 100px 30px",
        height: "1000px",
        align: "center",
        zIndex: "-1"

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
        lessonNames: "",
        lessonMaterial: [],
        lessonPic: "",
        answer: "",
        choices: [],
        question: "",
        jsonS: {},
        load: false,
        lessonCount: "",
        lessonNum: "",
        lessons: []
    };


    updateLesson = () => {
        if (this.state.i < this.state.lessonCount - 1) {
            this.setState({ i: this.state.i + 1 }, () => {
                this.getLesson();
                console.log(this.state)
                document.getElementById("nextPage").style.display = "none"; // no
            });
        }
        else{window.location.href="/LessonComplete"}
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
        })
        .then()
        .catch(error => {
            if (error) throw error
        })
    }


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
            foo.then( (json)=> {
                console.log(json);
                console.log(json[0].courseName)
                this.setState({lessons: json})
                this.setState({courseName: json[this.state.i].courseName}) 
                this.setState({lessonNames: json[this.state.i].lessonMaterial})
                this.setState({lessonMaterial: json[this.state.i].textContent})
                this.setState(({answer: json[this.state.i].quiz.answer}))
                this.setState(({choices: json[this.state.i].quiz.choices}))
                this.setState(({question: json[this.state.i].quiz.question}))
                this.setState({lessonPic: json[this.state.i].lessonPic})
                this.setState({lessonNum: json[this.state.i].lessonNum})
                let length = json.length
                console.log(length)
                this.setState({lessonCount: length})
                console.log(this.state.lessonCount)

                    })
            
        })   
        .catch(error => {
            if (error) throw error
        })
    }

    componentWillMount () {
        this.callAPI()
    }
    componentDidMount() {
    }
    componentDidUpdate() {
        if (!this.state.load){
        this.setState({load: true})
        this.getLesson();
}
    }


    render() {
        return (
            <div style={style.home}>
                <Navbar courseTitle={this.state.courseName}
                 />
                <div className="container">
                    <Sidenav 
                        lessons={this.state.lessons}
              
                    />
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={style.content}>
                            <div className="row" style={style.row1}></div>
                            <Learning
                                courseName={this.state.lessonNames}
                                lessonPic={this.state.lessonPic}
                                lessonMaterial={this.state.lessonMaterial}
                                quizQuestion={this.state.question}
                                correctAnswer={this.state.answer}
                                choices={this.state.choices}
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