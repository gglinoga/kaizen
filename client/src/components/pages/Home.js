import React, { Component } from "react";
import Course from "../Course/Course.js";
import Navbar from "../Navbar/Navbar";
import Modal from "../../components/Modal/Modal"

const style = {

    home: {
        backgroundColor: "silver",
        height: "auto",
        width: "100%",
        position: "absolute",
        zIndex: -1
    },

    content: {
        backgroundColor: "white",
        padding: "20px 30px 500px 30px",
        height: "auto",
        align: "center",
    },

    description: {
        fontFamily: "'Questrial', sans-serif",
        fontSize: "30px",
        backgroundColor: "white",
        textAlign: "center",
        overflow: "auto",
        padding: "20px",
    },

}

class Home extends Component {

    state = {
        show: false,
        modalOn: false,
        apiResponse: "",
        courseArray: [],
        login: false

    }
    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }

    handleClick = (id) => {
        console.log(id);
        fetch("/users/currentCourse", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                currentCourse: id,
                currentLessons: id
            })
        })
            .catch(error => {
                if (error) throw error
            });

        if (!this.state.login) {
            this.showModal()
        }
    }

    loginEvent = (e) => {
        e.preventDefault();
        console.log('test');
        if (this.state.show === false) {
            console.log(this.state.modalOn);
            this.showModal()
        };

    }

    callAPI(data) {
        console.log('callAPI')
        fetch("/api/courses", {
            method: 'GET',
        })
            .then(res => {
                let foo = res.json();
                foo.then(json => {
                    console.log(json);
                    this.setState({ courseArray: json })
                    console.log(this.state.courseArray)
                })

            })
            .catch(error => {
                if (error) throw error
            });
    }

    componentWillMount() {
        this.callAPI();
        console.log('mount');
    }

    render() {
        return (
            <div>
                <Navbar />

                <Modal
                    onClose={this.showModal}
                    show={this.state.show}>
                </Modal>

                <div style={style.home}>
                    <div className="row" style={style.row1}></div>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={style.content}>
                            <div className="row" style={style.description}>
                                <div className="col-12" style={style.course}>
                                    <h2>Learning is fun</h2>
                                    <h5>Pick a course.</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex flex-wrap justify-content-center">

                                        <a onClick={this.loginEvent}>

                                            {/* Hardcorded Courses
                <Course course=
                    {{ title: "Javascript", backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/21/14/39/rain-455124_1280.jpg')", description: "JS Description", numLessons: "10" }}
                />
                </a>
                <a onClick = {this.loginEvent}>
                <Course course=
                    {{ title: "React", description: "React Description", numLessons: "10" }}
                />
                </a>
                <a onClick = {this.loginEvent}>
                <Course course=
                    {{ title: "HTML & CSS", description: "HTML & CSS Description", numLessons: "10" }}
                /> */}

                                            {/* Mapped Courses */}
                                            <table>
                                                <tr>
                                                    {this.state.courseArray.map(course => (
                                                        <Course
                                                            id={course.id}
                                                            title={course.courseName}
                                                        // description={course.description}
                                                        // numLessons={course.material.length}
                                                        />
                                                    ))}

                                                </tr>
                                            </table>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    };
}

export default Home;
