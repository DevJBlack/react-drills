import React, { Component } from 'react'

class NewTask extends Component {
  constructor(){
    super()
    this.state = ({
      input: ''
    })
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  add = () => {
    this.props.add(this.state.input);
    this.setState({
      input: ''
    })
  }


  render(){
    return (
      <div>
        <input placeholder="Enter New Task" type="text" onChange={this.handleInput}/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default NewTask