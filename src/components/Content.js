import React, { Component } from 'react'

export default class Content extends Component {
    render() {

        return (
           
            <div>
                components.js<br/>
                <h2>타이틀 :{this.props.title} </h2>
                <h2>desc : {this.props.desc}</h2>

            </div>
        )
    }
}
