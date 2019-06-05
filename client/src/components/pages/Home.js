import React, { Component } from "react";
import Course from "../Course/Course.js";
import Navbar from "../Navbar/Navbar";
import Modal from "../../components/Modal/Modal"

const style = {

    home: {
        background: "url('https://i.pinimg.com/originals/c9/3e/60/c93e60f99f1a8876d3271463a4d93561.png')",
        backgroundSize: "300px",
        height: "auto",
        width: "100%",
        position: "absolute",
        zIndex: -1
    },

    content: {
        backgroundColor: "white",
        padding: "20px 30px 100px 30px",
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

    course: {
        fontSize: "70px"
    },

    row1: {
        height: "50px"
    }

}

class Home extends Component {

    state = {
        show: false,
        modalOn: false,
        apiResponse: "",
        courseArray: [],
        login: true

    }
    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show,
            login: true

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
        else if (this.state.login) {
        window.location.replace('/lesson');
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
                    <div className="row"></div>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={style.content}>
                            <div className="row" style={style.description}>
                                <div className="col-12" style={style.course}>
                                    <p>learning is fun</p>
                                    <h1>pick a course</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex flex-wrap justify-content-center">

                                                    {this.state.courseArray.map(course => (
                                                        <Course
                                                            id={course.id}
                                                            title={course.courseName}
                                                            handleClick={this.handleClick}
                                                            img={course.coursePic}
                                                        // description={course.description}
                                                        // numLessons={course.material.length}
                                                        />
                                                    ))}
                                    {/* </a> */}
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
