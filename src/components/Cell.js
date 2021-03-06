import React, {Component} from 'react';
import './Cell.css'

class Cell extends Component{
  constructor(props){
    super(props);

    this.state = {
      color: 'gray'
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
      console.log('mouseovered');
    }
  }

  render(){
    const color = this.props.color
      return(
        <td class={this.state.color} onClick={this.handleClick} onMouseOver={this.handleMouseOver}/>
      );
  }
}

export default Cell;
