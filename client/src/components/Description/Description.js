import React from "react";
import BackgroundImg from "../../../src/images/puppies.jpeg"

const style = {
    marginLeft: "200px",
    marginRight: "200px",
    marginTop: "50px",
    textAlign: "justify",

}

const Description = props => (
    <div style={style} BackgroundImg={BackgroundImg}>
        <p>DESCRIPTION: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    </div>
);

export default Description;