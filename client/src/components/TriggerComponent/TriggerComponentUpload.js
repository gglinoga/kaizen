import React, { Component } from 'react'

const a = {
    color: "white",
}

export default class TriggerComponentUpload extends Component {
    render() {
        return (
            <div>
            <a href="/upload" style={a}><i class="fas fa-file-upload"></i>  </a>
            </div>
        )
    }
}