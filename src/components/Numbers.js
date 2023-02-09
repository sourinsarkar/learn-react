import React from 'react'

export default function Numbers() {
    const numbers = [1,2,3,4,5]
    const Numbers = numbers.map((x) => <li>{x}</li>)
  return (
    <div>
        <ul>{Numbers}</ul>
    </div>
  )
}
