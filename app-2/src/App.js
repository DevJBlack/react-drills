import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(){
    super()
    this.state = ({
      activities: ['running', 'biking', 'coding','reading', 'eating']
    })
  }


  render() {
    let myFav = this.state.activities.map((fav, i) => {
      return <h2 key={i}>{fav}</h2>
    })
    return (
      <div className="App">
        {myFav}
      </div>
    );
  }
}

export default App;
