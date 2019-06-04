import React, { Component } from "react";
import Modal from "../Modal/Modal";
import ReactHover from "react-hover";
import HoverComponentHome from "../HoverComponent/HoverComponentHome";
import TriggerComponentHome from "../TriggerComponent/TriggerComponentHome";
import HoverComponentLogin from "../HoverComponent/HoverComponentLogin";
import TriggerComponentLogin from "../TriggerComponent/TriggerComponentLogin";
import HoverComponentUser from "../HoverComponent/HoverComponentUser";
import TriggerComponentUser from "../TriggerComponent/TriggerComponentUser";
import HoverComponentUpload from "../HoverComponent/HoverComponentUpload";
import TriggerComponentUpload from "../TriggerComponent/TriggerComponentUpload";

const navStyle = {
    backgroundImage: "linear-gradient(to right, blue, purple)",
    fontFamily: "'Questrial', sans-serif",
    fontWeight: "bolder",
    height: "auto",
    paddingLeft: "10px",
    border: "2px grey solid",
    fontcolor: "#faf7ac"
}

const navLeft = {
    textAlign: "left",
    fontSize: "20px",
    margin: "auto",

}

const navCenter = {
    color: "white",
    textAlign: "center",
    fontSize: "34px",
    display: "table",
    margin: "auto"

}

const a = {
    color: "white",
}

const login = {

}

const navRight = {
    textAlign: "left",
    fontSize: "20px",
    margin: "auto",

}

const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0
}

class Navbar extends Component {

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

    render() {
        return (
            <div>
                <Modal
                    onClose={this.showModal}
                    show={this.state.show}>
                </Modal>

                <nav class="home">

                    <div class="row" style={navStyle}>

                        <div class="col-4" style={navLeft}>
                            <ReactHover
                                options={optionsCursorTrueWithMargin}>
                                <ReactHover.Trigger type='trigger'>
                                    <TriggerComponentHome />
                                </ReactHover.Trigger>
                                <ReactHover.Hover type='hover'>
                                    <HoverComponentHome />
                                </ReactHover.Hover>
                            </ReactHover>
                        </div>

                        <div class="col-4" style={navCenter}>
                            <i class="fas fa-book-reader"></i>
                        </div>


                        <div class="col-1"></div>

                        <div class="col-1" style={navRight}>
                            <a onClick={this.loginEvent} style={login} >
                                <ReactHover
                                    options={optionsCursorTrueWithMargin}>
                                    <ReactHover.Trigger type='trigger'>
                                        <TriggerComponentLogin />
                                    </ReactHover.Trigger>
                                    <ReactHover.Hover type='hover'>
                                        <HoverComponentLogin />
                                    </ReactHover.Hover>
                                </ReactHover>
                            </a>
                        </div>

                        <div class="col-1" style={navRight}>
                            <ReactHover
                                options={optionsCursorTrueWithMargin}>
                                <ReactHover.Trigger type='trigger'>
                                    <TriggerComponentUser />
                                </ReactHover.Trigger>
                                <ReactHover.Hover type='hover'>
                                    <HoverComponentUser />
                                </ReactHover.Hover>
                            </ReactHover>

                        </div>

                        <div class="col-1" style={navRight}>
                        <ReactHover
                                options={optionsCursorTrueWithMargin}>
                                <ReactHover.Trigger type='trigger'>
                                    <TriggerComponentUpload />
                                </ReactHover.Trigger>
                                <ReactHover.Hover type='hover'>
                                    <HoverComponentUpload />
                                </ReactHover.Hover>
                            </ReactHover>
                            
                        </div>

                    </div>

        </nav >
        </div >
)
    }

}

export default Navbar;
