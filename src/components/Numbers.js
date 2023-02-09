import React from 'react'

export default function Numbers({numbers}) {
    const Numbers = numbers.map((x) => <li>{x}</li>)
  return (
    <div>
        <ul>{Numbers}</ul>
    </div>
  )
}
