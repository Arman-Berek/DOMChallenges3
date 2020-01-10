import React,{Component} from 'react';
import Cell from "./Cell.js";

class AddRow extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        let rows = [];
        for(let i = 0; i < this.props.rowCount;i++){
            rows.push(<Cell color="this.props.color"/>)
        }
        return(
            <table>
           <tr>
            {rows}
            </tr>
            </table>
        )
    }
}
export default AddRow;