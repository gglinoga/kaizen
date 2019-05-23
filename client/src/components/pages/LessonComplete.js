import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidenav from '../Sidenav/Sidenav';
import Course from "../Course/Course.js";


class Lesson extends Component {
    state = {
        i: 0,
        courseArray: []
    };

    callAPI(data) {
        console.log('callAPI')
        fetch("/api/courses", {
                method: 'GET',
                // body: JSON.stringify(data),
                // headers: {
                //     'Content-Type': 'application/json',
                // },
            })
            .then(res => {
                // res.json(data),
                let foo = res.json();

                foo.then(json => {
                    console.log(json);
                    this.setState({ courseArray: json})
                    console.log(this.state.courseArray)
                    // console.log(json[0].lessonMaterial)
                })
                // console.log(res.json());

            })
            // .then(res => this.setState({ apiResponse: res.body.lessonMaterial }))
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
                <Navbar courseTitle={this.state.courseName} />
                <Sidenav />
                <h2>Good job completing the course! Here are some other we would recommend.</h2>

                
{this.state.courseArray.map(course => (
    <Course
        id={course.id}
        title={course.courseName}
        // description={course.description}
        // numLessons={course.material.length}
    />
))}
                {/* <Course course=
                    {{ title: "Javascript",
                    backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/21/14/39/rain-455124_1280.jpg')",
                    description: "JS Description", numLessons: "10" }}
                />

                <Course course=
                    {{ title: "React", description: "React Description", numLessons: "10" }}
                />

                <Course course=
                    {{ title: "HTML & CSS", description: "HTML & CSS Description", numLessons: "10" }}
                /> */}
            </div>
        )
    }
}

export default Lesson;