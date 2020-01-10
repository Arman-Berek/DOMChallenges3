import React, { Component } from 'react';
import Row from './row';
import Cell from './Cell'

class Table extends Component {
  constructor(props){
    super(props);
  }


  render(){
    var rows = [];
    for (var i = 0; i < this.props.columns; i++){
      rows.push(<Row rows={this.props.rows} color={this.props.color}/>);
    }
    return(
      <div>
        <table> {rows} </table>
      </div>
    );
  }
}

export default Table;
