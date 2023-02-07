import React from 'react'

export default function skills(props) {
  const skillset = props.skills.map((x) => <li> {x} </li>)

  return (
    <ul>{skillset}</ul>
  )
}
