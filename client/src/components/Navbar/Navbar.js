import React from "react";

const navStyle = {
    background: "white",
    fontFamily: 'Questrial',
    height: "50px",
    paddingLeft: "10px",
    color: "black",
    border: "black"
}

const navLeft = {
    textAlign: "left",
    fontSize: "20px",
    img: {
        width: "5px",
    },
    margin: "auto",    
}

const a = {
    color: "black",
}

const navRight = {
    textAlign: "bottom",
    fontSize: "20px",
    textAlign: "right",
    paddingRight: "30px",
    margin: "auto",

}

const Navbar = () => (
        <div class="row" style={navStyle}>
        <div class="col-4" style={navLeft}>
                <a href="/" style={a}>LOGO </a>
                <a href="/"style={a}> Kaizen   </a>
                <a style={a}> /   </a>
                <a href="/Course" style={a}> Course    </a>
        </div>
        <div class="col-4"></div>
        <div class="col-4" style={navRight}>
            <a href="#" style={a}>Login   </a>
            <a href="#" style={a}>/       </a>
            <a href="#" style={a}>User    </a>
        </div>
        </div>
);

export default Navbar;
