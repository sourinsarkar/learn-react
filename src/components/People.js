import React from 'react'
import Datecontainer from './Datecontainer'

export default function People(props) {
  return (
    <div>
        <h1>{props.id}</h1>
        <h1>{props.name}</h1>
        <Datecontainer date = {props.date}/>
    </div>
  )
}
