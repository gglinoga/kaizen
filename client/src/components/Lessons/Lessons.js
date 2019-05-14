import React from "react";
import "./Lessons.css"

const Lessons = props => (
    <div>
        <div class="card">
            <img src={props.image} class="card-img-top" alt={props.name} />
            <div class="card-body">
                <h5 class="card-title">Test Lesson Plan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
);

export default Lessons;