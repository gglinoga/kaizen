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
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
        this.newCourse();
    };

    newCourse = () => {
        fetch("/api/newCourse", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                courseName: this.state.courseName,
                coursePic: this.state.coursePic,
                lessonMaterial: this.state.lessonMaterial,
                textContent: this.state.textContent,
                lessonPic: this.state.lessonPic,
                quiz: this.state.quiz,
                lessonNum: this.state.lessonNum,
            })
        })
            .catch(error => {
                if (error) throw error
            });
    }

    handleNewCourse = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.courseName) {
            alert(`Course Name is a Required Field!`);
        }
        if (!this.state.coursePic) {
            alert(`Course Pic is a Required Field!`);
        }
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

                            <input type="submit" style={style.btn} onClick={this.handleNewCourse} value="Add Course" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Uploadform;