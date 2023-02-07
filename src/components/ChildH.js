import React, { Component } from 'react'

export default class ChildH extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.alldata.welcome} to {this.props.alldata.title}.</h3>
        <h3>Mr. {this.props.alldata.owner.firstName} {this.props.alldata.owner.lastName} was born on {this.props.alldata.dob}. </h3>
      </div>
    )
  }
}
