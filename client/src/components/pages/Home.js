import React, {Component} from "react";
import Course from "../Course/Course.js";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";

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

    course: {
        justifyContent: "center",
    },

}
class Home extends Component {
    state = {
        show: false,
        modalOn: false
    }
    showModal = () => {
        console.log("click!");
        this.setState({
            ...this.state,
            show: !this.state.show
        });
}

loginEvent = (e) => {
    e.preventDefault();
    console.log(this.state.modalOn);
    console.log("test LoginEvent");
    if (this.state.show === false) {
        console.log(this.state.modalOn);
        this.showModal()
    };

}

render () {
    return(
        <div>
        <Navbar/>
            <Modal
                onClose={this.showModal}
                show={this.state.show}>
            </Modal>

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

                <a onClick={this.loginEvent}>
                <Course style={style.course} course=
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
                </a>

                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
)
    }
}

export default Home;
