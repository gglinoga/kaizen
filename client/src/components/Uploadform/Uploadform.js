import React, { Component } from "react";

class Uploadform extends Component {

    state = {
        courseName: "",
        coursePic: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    render () {
        return (
            <div>
            <p>Select a file: </p>
            <input type="file" name="myFile"/>
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
                                        value = {this.state.courseName}
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
                                        value = {this.state.coursePic}
                                        onChange={this.handleInputChange}>
                                    </input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Uploadform;