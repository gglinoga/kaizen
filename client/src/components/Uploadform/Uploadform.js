import React, { Component } from "react";
import sample from "../../images/sample.png"

const style = {

    home: {
        backgroundColor: "silver",
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
        borderRadius: "20px"
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
    }
}


class Uploadform extends Component {

    state = {
        courseName: "",
        coursePic: "",
        lessonMaterial: "",
        textContent: "",
        lessonPic: "",
        Question: "",
        Answer: "",
        a: "",
        b: "",
        c: "",
        d: "",
        lessonNum: "",
        lessons: [],
        courseID: ""
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
        .then(res=>{
            // console.log(res.json())
            // console.log(res.text())
            // console.log(res.body)
            let foo = res.json();
            foo.then(json => {
                // console.log(res.json())
                console.log(json)
                let match = false;

                for (let i=0; i<json.length; i++){
                    if (json[i].courseName === this.state.courseName)
                    {
                    match = true;
                    console.log('match')
                    console.log(match);
                    this.setState({ courseID: json[i].id })
                    console.log(this.state.courseID);
                    alert('You have selected the ' + this.state.courseName + ' course.')
                    }}
                
                if (match === false) {
                    alert('You have added the ' + this.state.courseName + ' course.')
                    this.postCourse();
                    this.setState( {courseID: json[json.length-1].id+1})
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
        console.log(this.state.courseName)
        console.log(this.state.coursePic)
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
            
        }).then(()=>{
            console.log('posted ' + this.state.courseName)
        }
        )
        .catch(err=>{
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
    
    allLessons = () => {
        let url = "/api/lesson";
        console.log("-------------"+ this.state.courseID);
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
        .then((response)=>{
            console.log(response);
            response.json().then((data) => {
                console.log(data);
                this.setState({lessons : data})
                console.log(this.state.lessons)
            })
        })
        .catch(err=>{
            if (err) throw err;
        });
    }

    handleNewLesson = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.lessonMaterial) {
            alert(`Lesson Material is a Required Field!`);
        }
        if (!this.state.textContent) {
            alert(`Course Name is Required Field!`);
        }
        if (!this.state.quiz) {
            alert(`Quiz is Required Field!`);
        }
    }

    render() {
        return (


            <div>
                <div className="row" style={style.home}>

                    <div className="col-2"></div>

                    <div className="col-8" style={style.content}>
                    <h5 style={style.title}>Option A: Add a file</h5>

                        <div className="row">
                            <div className="col-4">
                        <p>Select a file (.xls or .csv): </p>
                        <input type="file" name="myFile" />
                        <br></br>
                        <br></br>
                        </div>
                            <div className="col-8">
                            <br></br>
                            <p>Model File (Click to download to your computer)</p>
                            <a href={sample}>
                            <img src={sample} style={style.img} alt="sample"/>
                            </a>

                            </div>
                            </div>
                            <br></br>
                            <br></br>
                        <h5 style={style.title}>Option B: Add Course Using Our Form</h5>
                        <h5>Step 1: Add Course</h5>
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="CourseName">Course Title</label>
                                        <input
                                            type="text"
                                            id="courseName"
                                            name="courseName"
                                            class="form-control"
                                            placeholder="Enter course title"
                                            value={this.state.courseName}
                                            onChange={this.handleInputChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="coursePic">Course Picture</label>
                                        <input
                                            type="text"
                                            id="coursePic"
                                            name="coursePic"
                                            class="form-control"
                                            placeholder="Enter link for course thumbnail"
                                            value={this.state.coursePic}
                                            onChange={this.handleInputChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                <input type="submit" style={style.btn2} onClick={this.handleNewCourse} value="Add Course " />
                                <h7 style={style.center}><i>(Must Add Course First Before Adding Lessons)</i></h7>
                                </div>
                                </div>
                                <hr></hr>



                            <div className="form-row">
                                <div className="col">
                                <h5>Step 2: Add Lessons</h5>
                                    <div className="form-group">
                                        <label for="lessonMaterial">Lesson Title</label>
                                        <input
                                            type="text"
                                            id="lessonMaterial"
                                            name="lessonMaterial"
                                            class="form-control"
                                            placeholder="Enter lesson title"
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
                                            placeholder="Enter lesson content. Type \n at the end of each paragraph."
                                            value={this.state.textContent}
                                            onChange={this.handleInputChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="lessonPic">Lesson Image</label>
                                        <input
                                            type="text"
                                            id="lessonPic"
                                            name="lessonPic"
                                            class="form-control"
                                            placeholder="Type url for lesson image (Optional)"
                                            value={this.state.lessonPic}
                                            onChange={this.handleInputChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                            <label for="quiz">Quiz</label>
                                <div className="col-1"></div>
                                <div className="col">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="question"
                                            name="question"
                                            class="form-control"
                                            placeholder="Question"
                                            value={this.state.question}
                                            onChange={this.handleInputChange}>
                                        </input>
                                        <input
                                            type="text"
                                            id="answer"
                                            name="answer"
                                            class="form-control"
                                            placeholder="Answer"
                                            value={this.state.Answer}
                                            onChange={this.handleInputChange}>
                                        </input>
                                        <input
                                            type="text"
                                            id="a"
                                            name="a"
                                            class="form-control"
                                            placeholder="a"
                                            value={this.state.a}
                                            onChange={this.handleInputChange}>
                                        </input>
                                        <input
                                            type="text"
                                            id="b"
                                            name="b"
                                            class="form-control"
                                            placeholder="b"
                                            value={this.state.b}
                                            onChange={this.handleInputChange}>
                                        </input>
                                        <input
                                            type="text"
                                            id="c"
                                            name="c"
                                            class="form-control"
                                            placeholder="c"
                                            value={this.state.c}
                                            onChange={this.handleInputChange}>
                                        </input>
                                        <input
                                            type="text"
                                            id="d"
                                            name="d"
                                            class="form-control"
                                            placeholder="d"
                                            value={this.state.d}
                                            onChange={this.handleInputChange}>
                                        </input>

                                    </div>
                                </div>
                            </div>

                            <input type="submit" style={style.btn} onClick={this.handleNewLesson} value="Add Lesson" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Uploadform;