import React, { Component } from "react";
import sample from "../../images/sample.png";
import LessonList from "../LessonList/LessonList";

const style = {

    home: {
        background: "url('https://i.pinimg.com/originals/c9/3e/60/c93e60f99f1a8876d3271463a4d93561.png')",
        backgroundSize: "300px",
        height: "auto",
        width: "100%",
        position: "absolute",
        left: 0,
        zIndex: -1

    },

    content: {
        backgroundColor: "white",
        padding: "20px 30px 100px 30px",
        height: "auto",
        align: "center",
        fontFamily: "'Questrial', sans-serif",
    },

    btn: {
        backgroundColor: "mediumblue",
        color: "white",
        borderRadius: "20px",
        textAlign: "center",
        display: "table",
        margin: "auto",
        padding: "5px 10px",

    },

    btn2: {
        backgroundColor: "mediumblue",
        color: "white",
        display: "table",
        margin: "auto",
        borderRadius: "20px",
        padding: "5px 10px",
        textAlign: "center"
    },

    img: {
        maxWidth: "400px"
    },

    title: {
        backgroundColor: "purple",
        padding: "5px 5px",
        borderRadius: "3px",
        color: "white"
    },

    center: {
        textAlign: "center",
        display: "table",
        margin: "auto"
    },

    courseName: {
        backgroundImage: "linear-gradient(to bottom, blue, red)",
        borderRadius: "5px",
        text: "center",
        color: "white"
    },

    left: {
        borderLeft: "silver 2px solid"
    },

    img2: {
        maxWidth: "150px"
    }
}


class Uploadform extends Component {

    state = {
        courseName: "",
        coursePic: "",
        lessonMaterial: "",
        textContent: "",
        lessonPic: "",
        question: "",
        answer: "",
        a: "",
        b: "",
        c: "",
        d: "",
        lessonNum: "",
        lessons: [],
        courseID: "",
        lessonButton: false
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    newCourse = () => {
        let url = "/api/courses/";
        fetch(url, {
            method: 'GET',
        })
            .then(res => {
                let foo = res.json();
                foo.then(json => {
                    console.log(json)
                    let match = false;

                    for (let i = 0; i < json.length; i++) {
                        if (json[i].courseName === this.state.courseName.toLowerCase()) {
                            match = true;
                            console.log('match')
                            console.log(match);
                            this.setState({ 
                                courseID: json[i].id,
                                coursePic: json[i].coursePic
                             })
                            console.log(this.state.courseID);
                            alert('You have selected the ' + this.state.courseName + ' course.')
                        }
                    }

                    if (match === false) {
                        alert('You have added the ' + this.state.courseName + ' course.')
                        this.postCourse();
                        this.setState({ courseID: json[json.length - 1].id + 1 })
                        console.log(this.state.courseID)
                    }
                    this.allLessons();

                })
            })
            .then(error => {
                if (error) throw error
            })
    }


    ExistingCourse = () => {
        let url = "/api/courses/";
        fetch(url, {
            method: 'GET',
        })
            .then(res => {
                let foo = res.json();
                foo.then(json => {
                    console.log(json)
                    let match = false;

                    for (let i = 0; i < json.length; i++) {
                        if (json[i].courseName === this.state.courseName.toLowerCase()) {
                            match = true;
                            console.log('match')
                            console.log(match);
                            this.setState({ 
                                courseID: json[i].id,
                                coursePic: json[i].coursePic
                             })
                            console.log(this.state.courseID);
                            alert('You have selected the ' + this.state.courseName + ' course.')
                        }
                    }

                    if (match === false) {
                        alert('You have added the ' + this.state.courseName + ' course.')
                        this.postCourse();
                        this.setState({ courseID: json[json.length - 1].id + 1 })
                        console.log(this.state.courseID)
                    }
                    this.allLessons();

                })
            })
            .then(error => {
                if (error) throw error
            })
    }

    postCourse = () => {
        console.log('post course');
        let url = "/api/newCourse";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                courseName: this.state.courseName,
                coursePic: this.state.coursePic
            })

        }).then(() => {
            console.log('posted ' + this.state.courseName)
        }
        )
            .catch(err => {
                if (err) throw err
            })
    }

    handleNewCourse = event => {
        event.preventDefault();
        if (!this.state.courseName) {
            alert(`Course Name is a Required Field!`);
        }
        if (!this.state.coursePic) {
            alert(`Course Pic is a Required Field!`);
        }
        else {
            this.newCourse();
        }
    }

    handleExistingCourse = event => {
        event.preventDefault();
        if (!this.state.courseName) {
            alert(`Course Name is a Required Field!`);
        }
        else {
            this.ExistingCourse();
        }
    }

    allLessons = () => {
        let url = "/api/lesson";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.courseID
            })
        })
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({ lessons: data })
                    this.setState({ lessonNum: this.state.lessons.length + 1 })
                })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    postLesson = () => {
        // this.setState({ lessonButton: true })

        let url = "/api/newLesson";
        let quizJSON = `{"question":"${this.state.question}", "answer": "${this.state.answer}", "choices": ["${this.state.a}", "${this.state.b}", "${this.state.c}", "${this.state.d}"]}`
        console.log(quizJSON);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                lessonMaterial: this.state.lessonMaterial,
                lessonPic: this.state.lessonPic,
                courseID: this.state.courseID,
                textContent: this.state.textContent,
                quiz: quizJSON,
                lessonDescription: this.state.lessonMaterial,
                lessonNum: this.state.lessonNum
            })
        })
            .then((req, response) => {
                console.log(req.body)
                console.log(response);
                alert(`Congratulations, you have successfully added the lesson ${this.state.lessonMaterial}.`)
            })
    }



    handleNewLesson = event => {
        event.preventDefault();
        if (!this.state.lessonMaterial) {
            alert(`Lesson Material is a Required Field!`);
        }
        if (!this.state.textContent) {
            alert(`Course Name is a Required Field!`);
        }
        if (!this.state.question) {
            alert(`Quiz question is a Required Field!`);
        }
        if (!this.state.answer) {
            alert(`Quiz answer is a Required Field!`);
        }

        if (!this.state.lessonButton) {
            this.postAndAllLesson();
        }
    }

    postAndAllLesson = () => {
        this.postLesson();
        setTimeout(this.allLessons, 500)
    }

    render() {
        return (

            <div>
                <div className="row" style={style.home}>

                    <div className="col-2"></div>

                    <div className="col-8" style={style.content}>

                        <h5 style={style.title}>Option A: Upload File (.xls or .csv format only)</h5>

                        <div className="row">
                            <div className="col-4">
                                <br></br>
                                <input type="file" name="myFile" />
                                <br></br>
                                <br></br>
                            </div>
                            <div className="col-8">
                                <br></br>
                                <p>Template (Click to download)</p>
                                <a href={sample}>
                                    <img src={sample} style={style.img} alt="sample" />
                                </a>

                            </div>
                        </div>
                        <br></br>
                        <br></br>


                        <h5 style={style.title}>Option B: Use Our Form</h5>
                        <p></p>

                        <div className="row">
                            <div className="col-6 text-center">
                                <h5><i>Add New Course</i></h5>
                                <form>
                                    <div className="form-row">
                                            <div className="form-group">
                                                <label for="CourseName"></label>
                                                <input
                                                    type="text"
                                                    id="courseName"
                                                    name="courseName"
                                                    class="form-control"
                                                    placeholder="enter course title"
                                                    value={this.state.courseName}
                                                    onChange={this.handleInputChange}>
                                                </input>
                                            </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label for="coursePic"></label>
                                                <input
                                                    type="text"
                                                    id="coursePic"
                                                    name="coursePic"
                                                    class="form-control"
                                                    placeholder="enter url for thumbnail"
                                                    value={this.state.coursePic}
                                                    onChange={this.handleInputChange}>
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <input type="submit" style={style.btn2} onClick={this.handleNewCourse} value="Add New Course " />
                                        <h7 style={style.center}></h7>
                                    </div>
                                </div>
                                <br></br>
                            </div>


                            <div className="col-6 text-center" style={style.left}>
                                <h5><i>Select Existing Course</i></h5>
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label for="CourseName"></label>
                                                <input
                                                    type="text"
                                                    id="courseName"
                                                    name="courseName"
                                                    class="form-control"
                                                    placeholder="enter existing course title"
                                                    value={this.state.courseName}
                                                    onChange={this.handleInputChange}>
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <input type="submit" style={style.btn2}
                                            onClick={this.handleExistingCourse}
                                            value="Select Existing Course " />
                                        <h7 style={style.center}></h7>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h7><i>* Add or Select Course Before Adding Lessons</i></h7>
                            </div>
                        </div>

                        <div className="form-row" style={style.courseName}>
                            <div className="col-4"></div>
                            <div className="col-4 text-center">
                                <div className="row"></div>
                                <h3><u>{this.state.courseName}</u></h3>
                                <img src={this.state.coursePic} style={style.img2}></img>
                                <br/>
                                {this.state.lessons.map(lesson => (
                                    <LessonList
                                        lessonName={lesson.lessonMaterial}
                                        lessonNum={lesson.lessonNum}
                                    />
                                ))}
                            </div>
                        </div>
                        <br></br>


                        <div className="form-row">
                            <div className="col-12">
                                <h5><i>Add Lessons to Course</i></h5>
                                <div className="form-group">
                                    <label for="lessonMaterial">Title</label>
                                    <input
                                        type="text"
                                        id="lessonMaterial"
                                        name="lessonMaterial"
                                        class="form-control"
                                        placeholder="enter lesson title"
                                        value={this.state.lessonMaterial}
                                        onChange={this.handleInputChange}>
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label for="textContent">Lesson Content</label>
                                    <input
                                        type="text"
                                        id="textContent"
                                        name="textContent"
                                        class="form-control"
                                        placeholder="enter lesson content. Type \n at the end of each paragraph."
                                        value={this.state.textContent}
                                        onChange={this.handleInputChange}>
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label for="lessonPic">Image</label>
                                    <input
                                        type="text"
                                        id="lessonPic"
                                        name="lessonPic"
                                        class="form-control"
                                        placeholder="enter url for lesson image (Optional)"
                                        value={this.state.lessonPic}
                                        onChange={this.handleInputChange}>
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                        <div className="col">
                                <div className="form-group">
                            <label for="quiz">Quiz</label>
                            <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                                    <input
                                        type="text"
                                        id="question"
                                        name="question"
                                        class="form-control"
                                        placeholder="question"
                                        value={this.state.question}
                                        onChange={this.handleInputChange}>
                                    </input>
                                    <p></p>
                                    <input
                                        type="text"
                                        id="answer"
                                        name="answer"
                                        class="form-control"
                                        placeholder="enter correct answer"
                                        value={this.state.answer}
                                        onChange={this.handleInputChange}>
                                    </input>
                                    <p></p>
                                    <input
                                        type="text"
                                        id="a"
                                        name="a"
                                        class="form-control"
                                        placeholder="enter answer a"
                                        value={this.state.a}
                                        onChange={this.handleInputChange}>
                                    </input>
                                    <p></p>
                                    <input
                                        type="text"
                                        id="b"
                                        name="b"
                                        class="form-control"
                                        placeholder="enter answer b"
                                        value={this.state.b}
                                        onChange={this.handleInputChange}>
                                    </input>
                                    <p></p>
                                    <input
                                        type="text"
                                        id="c"
                                        name="c"
                                        class="form-control"
                                        placeholder="enter answer c"
                                        value={this.state.c}
                                        onChange={this.handleInputChange}>
                                    </input>
                                    <p></p>
                                    <input
                                        type="text"
                                        id="d"
                                        name="d"
                                        class="form-control"
                                        placeholder="enter answer d"
                                        value={this.state.d}
                                        onChange={this.handleInputChange}>
                                    </input>
</div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <input type="submit" style={style.btn} onClick={this.handleNewLesson} value="Add Lesson" />
                    </div>

                </div>

            </div>
        )
    }
}
export default Uploadform;