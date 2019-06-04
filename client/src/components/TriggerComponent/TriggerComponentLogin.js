import React, { Component } from 'react'

const a = {
    color: "white",
}

export default class TriggerComponentLogin extends Component {
    render() {
        return (
            <div className style={a}>
                <a href="/login" style={a}>
                    <i class="fas fa-sign-in-alt"></i>
                    </a>
            </div>
        )
    }
}