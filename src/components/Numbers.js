import React from 'react'

export default function Numbers({numbers}) {
    const Numbers = numbers.map((x, i) => <li key = {i}>{x}</li>)
  return (
    <div>
        <ul>{Numbers}</ul>
    </div>
  )
}
