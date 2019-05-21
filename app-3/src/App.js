import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = ({
      comfort: ['running','biking','reading','eating','coding'],
      userInput: ''
    })
  }


  handleInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    let myFav = this.state.comfort.filter((ele) => {
      return ele.includes(this.state.userInput)
    }).map((ele,i) => {
      return <h2 key={i}>{ele}</h2>
    })
    return (
      <div className="App">
        <input onChange={this.handleInput} type="password"/>
        {myFav}
      </div>
    );
  }
}

export default App;
