import React, {Component} from 'react';
import './App.css';
//import AddRow from './components/row'
import Table from './components/Table';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      rowCount: 1,
      columnCount: 1,
      color: "white",
      isMouseDown: false
    }
  }


  updateColor = (event) => {
    this.setState({
      color: event.target.value
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

  onMouseDown = (event) => {
    this.setState({
      isMouseDown: true,
    })
    console.log('mousedown triggered')
  }

  render(){
    return (
      <div className="App">
          <div className="button-background">
          <button class="inputs" onClick={this.incrementRow}> Add row </button>
          <button class="inputs" onClick={this.incrementColumn}> Add column </button>
          <button class="inputs" onClick={this.incrementRow}> Add row </button>
          <button class="inputs" onClick={this.incrementColumn}> Add column </button>
          <button class="inputs" onClick={this.decrementRow}> Remove row </button>
          <button class="inputs" onClick={this.decrementColumn}> Remove column </button>
          <select class="inputs" onChange={this.updateColor}>
            <option value="white"> White </option>
            <option value="black"> Black </option>
            <option value="blue"> Blue </option>
            <option value="red"> Red </option>
            <option value="yellow"> Yellow </option>
          </select>
          
          <div>
            Row count: {this.state.rowCount}
          </div>

          <div>
            Column count: {this.state.columnCount}
          </div>

          <div>
            Selected color: { this.state.color}
          </div>
          

          </div>
        <header className="App-header">
          {/*
            Testable button
             <AddRow rowCount={this.state.rowCount} columnCount={this.state.columnCount} color={this.state.color}></AddRow>
          */}

          <button onClick={this.onMouseDown}> Draw </button>
          <Table rows={this.state.rowCount} columns={this.state.columnCount} color={this.state.color} drawing={this.state.isMouseDown} onMouseDown={this.onMouseDown}/>

        </header>
        </div>
    );
  }
}

export default App;
