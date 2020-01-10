import React, {Component} from 'react';
import './Cell.css'

class Cell extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const color = this.props.color
      return(
        <td class={color} onClick={this.props.handleClick} onMouseOver={this.handleMouseOver}/>
      );
  }
}

export default Cell;
