import React, { Component } from 'react'
import ChildH from './ChildH'

const data = {
    welcome: "Welcome",
    title: "Sourin City",
    owner: {
        firstName: "Sourin",
        lastName: "Sarkar"
    },
    dob: "26-02-2002"
}

export default class FatherH extends Component {
  render() {
    return (
      <div>
        <ChildH alldata = {data}/>
      </div>
    )
  }
}
