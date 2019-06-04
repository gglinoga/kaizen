import React, { Component } from 'react'

const a = {
    color: "white",
}

export default class TriggerComponentUser extends Component {
    render() {
        return (
                <a href="/user" style={a}><i class="fas fa-user"></i>    </a>
        )
    }
}