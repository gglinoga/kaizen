import React, { Component } from 'react'

const hover = {
    fontFamily: "'Questrial', sans-serif",
    fontWeight: "bolder",
    color: "white",
    fontSize: "16px"
}


export default class HoverComponentUser extends Component {
    render() {
        return (
            <div style={hover}>
                <p2>user</p2>
                </div>
        )
    }
}