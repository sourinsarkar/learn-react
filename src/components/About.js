import React from 'react'
import GC from './GC'

export default function About(props) {
  return (
    <div>
        {/* <h1>{props.name} is {props.age} and he studies in {props.edu}. </h1>
        <h1>{props.day}/{props.month}/{props.year} </h1> */}

        <GC day1 = {props.day} month1 = {props.month} year1 = {props.year}/>
    </div>
  )
}