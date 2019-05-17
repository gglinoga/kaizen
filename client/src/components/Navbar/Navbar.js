import React from "react";

const navStyle = {
    backgroundImage: "url('https://stablekernel.com/wp-content/uploads/2017/04/basicGradient-054950-edited.png')",
    fontFamily: "'Cinzel', serif",
    fontWeight: "bolder",
    height: "auto",
    paddingLeft: "10px",
}

const navLeft = {
    textAlign: "left",
    fontSize: "16px",
    margin: "auto",    
}

const navCenter = {
    margin: "auto",
    color: "white",
    textAlign: "center"
}

const a = {
    color: "steelblue",
}

const navRight = {
    textAlign: "bottom",
    fontSize: "16px",
    textAlign: "right",
    paddingRight: "30px",
    margin: "auto",

}

const Navbar = props => (
        <nav class="home">
        <div class="row" style={navStyle}>
        <div class="col-4" style={navLeft}>
                <a href="/"style={a}> home   </a>
        </div>
        <div class="col-4" style={navCenter}>
                <h2>kaizen</h2>
        </div>
        <div class="col-4" style={navRight}>
            <a href="#" style={a}>login   | </a>
            <a href="#" style={a}>user    </a>
        </div>
        </div>
        </nav>
);

export default Navbar;
