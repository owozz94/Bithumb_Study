import React, { Component } from 'react'
import Subject from './components/Subject'
import List from './components/List'
import Content from './components/Content'

export default class App extends Component {
  state={
    msg : {title : "할 수 있어!", sub : "잘 할거야!"},
    lists : [
      {id : 1, title : "flower", desc : "해바라기"},
      {id : 2, title : "happy", desc : "나의 인생"},
      {id : 3, title : "see", desc : "관찰자"},
    ]
  }
  render() {
    let ti2 = '';
    let de2 = '';
    const {title, desc} = this.state.lists;
    //Content.js에 들어갈거

    if(this.state.mode ==='read'){

      ti2 = this.state.lists[this.state.selected_id-1].title;
      de2 = this.state.lists[this.state.selected_id-1].desc;

    }
  

    return (
      <div>

        <Subject title={this.state.msg.title} 
        sub={this.state.msg.sub}></Subject>
        <hr/>
        <List data={this.state.lists} 
        onChangePage = {
          function(id){
            this.setState({
              mode : 'read',
              selected_id : Number(id),
              //여기로 넘어옴
            });
          }.bind(this)}>

        </List><hr/>
        <Content title={ti2} desc={de2}></Content> 
        
      </div>
    
    )
  }
}
