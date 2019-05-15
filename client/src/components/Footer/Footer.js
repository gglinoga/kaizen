import React from "react";

const style = {
    backgroundColor: 'blue',
    fontFamily: 'Questrial',
    textAlign: 'center',
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "25px",
    margin: "auto",
}

const footerRight = {
    textAlign: "right",
    margin: "auto",
    paddingRight: "20px"
}

const Footer = () => (
    <div class="Footer navbar-fixed-bottom" style={style}>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">kaizen ©</div>
        <div class="col-4" style={footerRight}>
            <a>Live Support</a>
        </div>
        </div>

    </div>
);

export default Footer;
