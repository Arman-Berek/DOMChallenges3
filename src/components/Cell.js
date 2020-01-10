import React, {Component} from 'react';
import './Cell.css'

class Cell extends Component{
  constructor(props){
    super(props);
  }

  render(){
      return(
        <td class={this.props.color} onClick={this.props.handleClick} onMouseOver={this.handleMouseOver}/>
      );
  }
}

export default Cell;
