import React from "react";
import Course from "../Course/Course.js";
import puppies from "../../images/puppies.jpeg";

const style = {
    home: {
        padding: "30px",
        height: "auto"
    },
    description: {
        margin: "20px 100px",
        textAlign: "justify"
}

}

function Home () {
    return (
        <div style={style.home}>
        <div style={style.description}>
        DESCRIPTION: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>

        <Course course=
            {{ title:"Javascript", description:"JS Description", numLessons:"10" }}
        />

        <Course course=
            {{ title:"React", description:"React Description", numLessons:"10" }}
        />

        <Course course=
            {{ title:"HTML & CSS", description:"HTML & CSS Description", numLessons:"10" }}
        />

        </div>
    )
}

export default Home;
