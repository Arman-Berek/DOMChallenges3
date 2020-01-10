import React, { Component } from 'react';
import Row from './row';
import Cell from './Cell'

class Table extends Component {
  constructor(props){
    super(props);
  }


  render(){
    var rows = [];
    for (var i = 0; i < this.props.rows; i++){
      rows.push(<Row columns={this.props.columns} color={this.props.color} drawing={this.props.drawing}/>);
    }
    return(
      <div>
        <table> {rows} </table>
      </div>
    );
  }
}

export default Table;
