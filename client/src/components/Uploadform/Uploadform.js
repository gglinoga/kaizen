import React, { Component } from "react";

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
}


class Uploadform extends Component {

    state = {
        courseName: "",
        coursePic: "",
        lessonMaterial: "",
        textContent: "",
        lessonPic: "",
        quiz: "",
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
                        <p>Select a file (.xls or .csv): </p>
                        <input type="file" name="myFile" />
                        <br></br>
                        <br></br>


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

                                <input type="submit" style={style.btn} onClick={this.handleNewCourse} value="Add Course" />
                            </div>


                            <div className="form-row">
                                <div className="col">
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
                                <div className="col">
                                    <div className="form-group">
                                        <label for="quiz">Quiz</label>
                                        <input
                                            type="text"
                                            id="quiz"
                                            name="quiz"
                                            class="form-control"
                                            placeholder="Quiz"
                                            value={this.state.quiz}
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