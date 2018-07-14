import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
<li>{this.props.label}</li>
    );
  }
}

export default ListItem;
