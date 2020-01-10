import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      rowCount: 0,
      columnCount: 0,
      color: ""
    }
  }
  
  updateColor = (newColor) => {
    this.setState = ({
      color: this.state.color
    })
  }

  incrementRow = () => {
    this.setState({
      rowCount: this.state.rowCount + 1
    })
  }

  incrementColumn = () => {
    this.setState({
      columnCount: this.state.columnCount + 1
    })
  }

  decrementRow = () => {
    if(this.state.rowCount !== 0){
      this.setState({
        rowCount: this.state.rowCount - 1
      })
    }
  }

  decrementColumn = () => {
    if(this.state.columnCount !== 0){
      this.setState({
        columnCount: this.state.columnCount - 1
      })
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/*
            Testable button
          */}
          <button onClick={this.incrementRow}> Add row </button>
          row count: {this.state.rowCount}

          column count: {this.state.columnCount}

          color: { this.state.color}

        </header>
      </div>
    );
  }
}

export default App;
