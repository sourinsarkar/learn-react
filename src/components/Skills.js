import React from 'react'

const GSkill = ({skill : [tech, level]}) => (
  <li>{tech} {level}</li>
)

export default function skills({showskills}) {
  // const skillset = props.skills.map((x) => <li> {x} </li>)

  const skillset = showskills.map((x) => <GSkill skill={(x)} />)

  return (
    // <ul>{skillset}</ul>
    <>
    <ul>{skillset}</ul>
    </>

  )
}
