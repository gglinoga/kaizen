import React from "react";

const style = {
    footer: {
        fontFamily: "'Questrial', sans-serif",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "40px",
        backgroundImage: "linear-gradient(to right, blue, purple)",
        border: "1px grey solid",
    },

    help: {
        color: "white",
        fontSize: "24px",
        display: "table",
        margin: "auto",
        textAlign: "left"
        },

    kaizen: {
        color: "white",
        fontSize: "24px",
        display: "table",
        margin: "auto",
        fontFamily: "'Ranga', cursive",
        letterSpacing: "1px"
        },

    links: {
        color: "white",
        textAlign: "center",
        fontSize: "28px",
        display: "table",
        margin: "auto",
        padding: "0px 5px"
        }
}

const Footer = () => (
    <div className="Footer navbar-fixed-bottom" style={style.footer}>
    <div className="row">
        <div className="col-2" style={style.kaizen}>
            <p>&nbsp;&copy; 2019 kaizen</p>
        </div>
        <div className="col-8">
            <div className="row" style={style.links}>
        <i class="fab fa-linkedin"></i>&nbsp;<i class="fab fa-facebook-square"></i>&nbsp;<i class="fab fa-twitter-square"></i>&nbsp;<i class="fab fa-instagram"></i>&nbsp;<i class="fas fa-envelope"></i>     
            </div>
        </div>
        <div className="col-1"></div>
        <div className="col-1">
            <a href="#" style={style.help}><i className="far fa-comment-dots" ></i></a>
        </div>
        </div>
        </div>
);

export default Footer;
