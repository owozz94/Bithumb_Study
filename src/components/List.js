import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
    
    
    render() {
        let lists = [];
        let data = this.props.data; //부모랑 data가 같아야됨.
        let i=0; 

        while(i<data.length){ 
            let row = data[i];
            i++;
            lists.push(<div>
              < a href={i}
              onClick={function(id, e){
                  this.props.onChangePage(id);
                  e.preventDefault();
              }.bind(this,row.id)
              //이 row.id가
              }>{row.title}     
             </a>
        </div>);

        }   

        return (
            <div>
                List.js<br/>
               <h2>{lists}</h2>
            </div>
        )
    }
}
