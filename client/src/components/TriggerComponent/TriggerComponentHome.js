import React, { Component } from 'react'

const a = {
    color: "white",
}

export default class TriggerComponentHome extends Component {
    render() {
        return (
            <div className>
                <a href="/"style={a}><i class="fas fa-home"></i>   </a>
            </div>
        )
    }
}
