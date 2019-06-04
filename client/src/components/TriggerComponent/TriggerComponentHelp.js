import React, { Component } from 'react'

const a = {
    color: "white",
}

export default class TriggerComponentLogin extends Component {
    render() {
        return (
            <div className style={a}>
                            <a href="#" style={a}><i className="far fa-comment-dots"></i></a>

            </div>
        )
    }
}