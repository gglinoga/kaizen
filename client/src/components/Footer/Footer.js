import React from "react";
import styled from "styled-components";

const style = {
    footer: {
        fontFamily: "'Questrial', sans-serif",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "40px",
        margin: "auto",
        backgroundImage: "linear-gradient(to right, blue, purple)",
        border: "1px grey solid",
        textAlign: "right",
        margin: "auto",
        fontSize: "20px",
        paddingRight: "10px",
    },
    a: {
        color: "white"
    }
}

const HoverHelp = styled.p`
    color: white;
    :hover {
        color: white;
        cursor: pointer;
    }
}
`

const Footer = () => (
    <div class="Footer navbar-fixed-bottom" style={style.footer}>
    <div class="row">
        <div class="col-9"></div>
        <div class="col-3">

        <HoverHelp><a href="#" style={style.a}><i className="far fa-comment-dots"></i></a></HoverHelp>

        </div>
        </div>

    </div>
);

export default Footer;
