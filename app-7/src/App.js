import React, { Component } from "react";
import "./App.css";
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor(){
    super()
    this.state = ({
      list: []
    })
  }


  handleAdd = (task) => {
    this.setState({
      list: [...this.state.list, task]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>My to-do</h1>
       <NewTask add={this.handleAdd}/>
       <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
