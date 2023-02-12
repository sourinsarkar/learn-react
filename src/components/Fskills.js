import React from 'react'
import Skills from './Skills'

export default function Fskills() {
    const skills = [
        ["HTML", 10],
        ["CSS", 9],
        ["REACT", 1],
        ["C++", 9]
    ];
  return (
    <div>
        <Skills showskills = {skills}/>
    </div>
  )
}
