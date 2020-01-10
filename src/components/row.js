import React,{Component} from 'react';
import Cell from "./Cell.js";

class AddRow extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        for(let i = 0; i < this.props.rowCount;i++){
                for(let x = 0; x < this.props.columnCount; x++){
                <Cell color="this.props.color"/>
            }
        }
        return(
            <table>
           <tr>
            {}
            </tr>
            </table>
        )
    }
}
export default AddRow;