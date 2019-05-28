import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login"

//gray background
const backdropStyle  = {
    position: "fixed",
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 50,
    overflowY: "auto"
}

const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: 5,
    maxWidth: 1000,
    minHeight: 700,
    margin: '0 auto',
    padding: 30,
    position: "relative",
    zIndex: 5
}

const footerStyle = {
    bottom: 20,
    align: "right"
    
}

export default class Modal extends React.Component {

    onClose = (e) => {
        console.log("close");
        this.props.onClose && this.props.onClose(e);
        console.log("close2" + this)
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                <Login/>
                {this.props.children}
                <br></br>
                <div className="text-center" style={footerStyle}>
                    <button onClick={(e) => {this.onClose(e)}}>
                        Close
                    </button>
                </div>
            </div>
            </div>

        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}