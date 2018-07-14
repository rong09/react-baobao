import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {

    var items= this.props.items.map(fruit=>
        <ListItem label={fruit}/>
    )
    return (
        <div>
            <h2>{this.props.label}</h2>
            <ul>{items}</ul>
    
        </div>
    );
  }
}

export default List;
