import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SideNav from "../Sidenav/Sidenav";
import Course from "../Course/Course"

const style = {

    user: {
        backgroundColor: "silver",
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

    title: {
        backgroundColor: "purple",
        padding: "5px 5px",
        borderRadius: "3px",
        color: "white",
        display: "table",
        margin: "auto",
        width: "100%",
        height: "auto"
    },

    btn2: {
        backgroundColor: "silver",
        color: "white",
        borderRadius: "20px",
        padding: "5px 10px",
        textAlign: "center",
        fontSize: "12px",
        contentAlign: "right"

    },

    course: {
        justifyContent: "center",
    },

}

class User extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div style={style.user}>
                    <div className="row"></div>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={style.content}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row text-center"><p style={style.title}>User Profile</p></div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-2 text-center">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div className="col-2 text-center">
                                            <p>Username</p>
                                        </div>

                                        <div className="col-4 text-center">
                                            Email
                                        </div>
                                        <div className="col-4 text-right">
                                            <input type="submit" style={style.btn2} value="Update" />
                                        </div>


                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex flex-wrap justify-content-center text-center">
                                                <p style={style.title}>Courses Completed</p>

                                                <Course
                                                    title='javascript'
                                                    img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
                                                />
                                                <Course
                                                    title='photoshop'
                                                    img='https://seeklogo.com/images/P/photoshop-cs6-logo-E67E1EDDE0-seeklogo.com.png'
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <p style={style.title}>Courses In Progress</p>
                                            <div className="d-flex flex-wrap justify-content-center">

                                                <Course
                                                    title='react'
                                                    img='http://assets.stickpng.com/thumbs/584830f5cef1014c0b5e4aa1.png'
                                                ></Course>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    };
}

export default User;
