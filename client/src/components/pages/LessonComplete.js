import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidenav from '../Sidenav/Sidenav';
import Course from "../Course/Course.js";

const style = {

    home: {
        backgroundColor: "silver",
        height: "100%",
        width: "100%",
        // position: "absolute",
        margin: "auto",
        display: "table",

    },

    content: {
        backgroundColor: "white",
        padding: "20px 30px 50px 30px",
        textAlign: "center"
    },

    description: {
        fontFamily: "'Questrial', sans-serif",
        fontSize: "30px",
        // backgroundColor: "white",
        textAlign: "center",
        // overflow: "auto",
        // padding: "20px",
    },
}


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

      
        window.location.replace('/lesson');
        
    }


    render() {
        return (
            <div>
                <Navbar courseTitle={this.state.courseName} />
                <div style={style.home}>
                <div className="row"></div>
                <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={style.content}>
                        <h2>Good job completing the course! Here are some other we would recommend.</h2>

                            <div className="row" style={style.description}>
                </div>
                <div className="row">
                        <div className="col-12" style={style.content}>
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
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Lesson;