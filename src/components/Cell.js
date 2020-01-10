import React, {Component} from 'react';
import './Cell.css'

class Cell extends Component{
  constructor(props){
    super(props);

    this.state = {
      color: 'blue'
    };
  }

  handleClick = () => {
    this.setState({
      color: this.props.color
    });
  }

  handleMouseOver = () => {
    if (this.props.drawing) {
      this.setState({
        color: this.props.color
      })
    }
  }

  render(){
      return(
        <td class={this.props.color} onClick={this.handleClick} onMouseOver={this.handleMouseOver}/>
      );
  }
}

export default Cell;
