import React, { Component } from 'react'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      count : 0,
    }
  }

  render() {

    const thecount = this.state.count;
    const addOne = thecount + 1;
    const addTwo = thecount + 2;
    const addThree = thecount + 3;
    const minusOne = thecount - 1;

    return (
      <div>
        <h1>{thecount}</h1>
        <button onClick = {() => this.setState({count : addOne})} >Add one</button>
        <button onClick = {() => this.setState({count : addTwo})} >Add two</button>
        <button onClick = {() => this.setState({count : addThree})} >Add three</button>
        <button onClick = {() => this.setState({count : minusOne})} >Minus One</button>
      </div>
    )
  }
}
