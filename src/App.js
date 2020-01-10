import React, {Component} from 'react';
import './App.css';
//import AddRow from './components/row'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      rowCount: 0,
      columnCount: 0,
      color: "white",
      isMouseDown: false
    }
  }

<<<<<<< HEAD
  updateColor = (newColor) => {
    this.setState = ({
      color: newColor
=======
  updateColor = (event) => {
    this.setState({
      color: event.target.value
>>>>>>> Added selectable color
    })
  }

  incrementRow = () => {
    this.setState({
      rowCount: this.state.rowCount + 1
    });
  }

  incrementColumn = () => {
    this.setState({
      columnCount: this.state.columnCount + 1
    });
  }

  decrementRow = () => {
    if(this.state.rowCount !== 0){
      this.setState({
        rowCount: this.state.rowCount - 1
      });
    }
  }

  decrementColumn = () => {
    if(this.state.columnCount !== 0){
      this.setState({
        columnCount: this.state.columnCount - 1
      });
    }
  }

<<<<<<< HEAD
=======

  
>>>>>>> Table row added
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/*
            Testable button
             <AddRow rowCount={this.state.rowCount} columnCount={this.state.columnCount} color={this.state.color}></AddRow>
          */}

         
          <div>
          <button onClick={this.incrementRow}> Add row </button>
          <button onClick={this.incrementColumn}> Add column </button>
          <select onChange={this.updateColor}>
            <option value="white"> White </option>
            <option value="black"> Black </option>
            <option value="blue"> Blue </option>
            <option value="red"> Red </option>
            <option value="yellow"> Yellow </option>
          </select>
          </div>

          <div>
          row count: {this.state.rowCount}
          </div>

          <div>
          column count: {this.state.columnCount}
          </div>

          <div>
          color: { this.state.color}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
