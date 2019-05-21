import React, { Component } from "react";
import "./App.css";
import Todo from './Components/Todo'



class App extends Component {
  constructor(){
    super()
    this.state = ({
      task: [],
      list: ''
    })
  }

  handleInputChange = (e) => {
    this.setState({
      list: e.target.value
    })
  }

  add = () => {
    this.setState({
      task: [...this.state.task, this.state.list],
      list: ''
    })
  }



  render() {
    let task = this.state.task.map((ele,i) => {
      return <Todo key={i} task={ele}/>
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
       {/* <div> */}
        <input placeholder="Tasks" type="text" onChange={this.handleInputChange}/>
        <button onClick={this.add}>Add</button>
         {/* </div>  */}
         {/* <Todo/> */}
        {task}
      </div>
    );
  }
}

export default App;
