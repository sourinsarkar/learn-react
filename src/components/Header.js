import React from 'react'

export default function Header(props) {
  return (
    <div>
        <h1>{props.data.name} was the founder of {props.data.company}. It was established in {props.data.estd}, {props.data.location}. {props.data.name} was born on {props.data.birthdate}, {props.data.birthmonth}. </h1>
    </div>
  )
}
