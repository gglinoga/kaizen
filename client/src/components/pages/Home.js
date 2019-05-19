import React from "react";
import Course from "../Course/Course.js";
import Navbar from "../Navbar/Navbar";

const style = {

    home: {
        backgroundColor: "silver",
        height: "auto"
    },

    content: {
        backgroundColor: "white",
        padding: "20px 30px 500px 30px",
        height: "100%"

    },

    description: {
        fontFamily: "'Questrial', sans-serif",
        fontSize: "30px",
        backgroundColor: "white",
        textAlign: "center",
        overflow: "auto",
        padding: "20px"
    },

    course: {
        justifyContent: "center"
    },
}

const Home = () => (
        <div>
        <Navbar/>
        <div style={style.home}>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8" style={style.content}>
                <div className="row" style={style.description}>
                    <div className="col-12">
                        <h2>Learning is fun</h2>
                        <h5>Qui consectetur amet mollit culpa laborum nulla aute ullamco aliquip sit veniam.</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-wrap" style={style.course}>
                <a href="/lesson">
                <Course style={style.course} course=
                    {{ title: "Javascript", backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/21/14/39/rain-455124_1280.jpg')", description: "JS Description", numLessons: "10" }}
                />
                </a>
                <a href="/lesson">
                <Course course=
                    {{ title: "React", description: "React Description", numLessons: "10" }}
                />
                </a>
                <a href="/lesson">
                <Course course=
                    {{ title: "HTML & CSS", description: "HTML & CSS Description", numLessons: "10" }}
                />
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
)

export default Home;
