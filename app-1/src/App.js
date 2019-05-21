import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = ({
      userInput: ''
    })
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(placeHolder){
    this.setState({
      userInput: placeHolder
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleInput(e.target.value)}/>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
