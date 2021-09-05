import React, { Component } from 'react'

export default class Subject extends Component {
    render() {
        return (
        
            <div>
                Subject.js
                <h2>title : {this.props.title}</h2>
                <h2>sub : {this.props.sub}</h2>

            </div>
        )
    }
}
