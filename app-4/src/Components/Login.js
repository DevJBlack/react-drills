import React, { Component } from 'react'

class Login extends Component {
  constructor(){
    super()
    this.state = ({
      login: '',
      password: ''
    })
  }

  handleInput = (e) => {
    this.setState({
      login: e.target.value
    })
  }

  handlePass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleButtonClick = () => {
    alert(`Login: ${this.state.login} PassWord: ${this.state.password}`)
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="Login" onChange={this.handleInput}/>
        <input type="text" placeholder="PassWord" onChange={this.handlePass}/>
        <button onClick={this.handleButtonClick}>Login</button>
      </div>
    )
  }
}

export default Login