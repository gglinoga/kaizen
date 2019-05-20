import React, { Component } from "react";
import Course from "../Course/Course.js";
import Navbar from "../Navbar/Navbar";
import Modal from "../../components/Modal/Modal"

const style = {

    home: {
        height: "100%",
        width: "100%",
        backgroundColor: "silver",
        position: "absolute",
        align: "center",
        zIndex: -2
    },

    content: {
        backgroundColor: "white",
        height: "auto",
        marginBottom: "80px",
        padding: "20px 30px",
        zIndex: -1,
        align: "center"

    },

    description: {
        fontFamily: "'Questrial', sans-serif",
        fontSize: "30px",
        backgroundColor: "white",
        textAlign: "center",
        border: "darkgrey solid 2px",
        overflow: "auto",
        color: "darkgrey",
        padding: "20px",
        marginBottom: "30px",
        marginTop: "20px",
        marginRight: "20px",
        marginLeft: "20px",


    },

    course: {
        marginTop: "40px"
    },

    row1: {
        height: "60px"
    },

}

class Home extends Component {
    state = {
        show: false
    }
    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
}
render () {
    return (
        <div>
        <Navbar/>
        <div style={style.home}>


        <input type="button"
            onClick={this.showModal}
            value="Show Modal" />
        <Modal
         onClose={this.showModal}
         show={this.state.show}>
             This message is from Modal!
         </Modal>

         
        <div className="row" style={style.row1}></div>

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
                    <div className="col">
                        <div className="d-flex flex-wrap">
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
        <div classNameName="row" style={style.row2}></div>
        </div>
        </div>
        </div>
    )};
    }

export default Home;