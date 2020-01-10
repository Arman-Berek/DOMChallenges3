import React,{Component} from 'react';


class AddRow extends Component{
    constructor(props){
        super(props);
        
    }
    handleAddRow = () => {
        
    }
    render(){
        return(
            <div>
                <button type="submit" onClick={this.handleAddRow}>Add Row</button>
                <button type="submit" onClick={this.handleAddColumn}>Add Column</button>
            </div>
        )
    }
}