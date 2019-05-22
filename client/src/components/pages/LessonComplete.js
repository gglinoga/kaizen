import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidenav from '../Sidenav/Sidenav';
import Course from "../Course/Course.js";


class Lesson extends Component {
    state = {
        i: 0
    };

    render() {
        return (
            <div>
                <Navbar courseTitle={this.state.courseName} />
                <Sidenav />
                <h2>Good job completing the course! Here are some other we would recommend.</h2>
                <Course course=
                    {{ title: "Javascript",
                    backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/21/14/39/rain-455124_1280.jpg')",
                    description: "JS Description", numLessons: "10" }}
                />

                <Course course=
                    {{ title: "React", description: "React Description", numLessons: "10" }}
                />

                <Course course=
                    {{ title: "HTML & CSS", description: "HTML & CSS Description", numLessons: "10" }}
                />
            </div>
        )
    }
}

export default Lesson;