import React, {Component} from "react";
import Modal from "../Modal/Modal";

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
    fontSize: "32px",
    display: "table",
    margin: "auto"
    
}

const a = {
    color: "white",
}

const navRight = {
    textAlign: "bottom",
    fontSize: "20px",
    textAlign: "right",
    paddingRight: "30px",
    margin: "auto",

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

render () {
    return(
        <div>
         <Modal
                onClose={this.showModal}
                show={this.state.show}>
                </Modal>
        <nav class="home">
        <div class="row" style={navStyle}>
        <div class="col-4" style={navLeft}>
                <a href="/"style={a}><i class="fas fa-home"></i>   </a>
        </div>
        <div class="col-4" style={navCenter}>
                <p style={navCenter}><i class="fas fa-book-reader"></i></p>
        </div>
        <div class="col-4" style={navRight}>
            <a onClick={this.loginEvent} style={a} ><i class="fas fa-sign-in-alt"></i>    </a>
            <a style={a}>|</a>
            <a href="#" style={a}>     <i class="fas fa-user"></i>    </a>
            <a style={a}>|</a>
            <a href="/upload" style={a}>     <i class="fas fa-file-upload"></i>     </a>
        </div>
        </div>
        </nav>
        </div>
)
    }

}

export default Navbar;
