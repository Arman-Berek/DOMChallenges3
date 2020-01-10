import React,{Component} from 'react';
import Cell from "./Cell.js"

class AddRow extends Component{
    constructor(props){
        super(props);

    }
    render(){
      var cells = [];
      for (var i = 0; i < this.props.rows; i++){
        cells.push(<Cell color={this.props.color}/>);
      }
      return(
        <tr> {cells} </tr>
      );
    }
}
export default AddRow;
