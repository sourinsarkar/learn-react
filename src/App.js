import React, {useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  // // const sub = () => {
  // //   if(count >= 1) {
  // //     setCount(count - 1) 
  // //   }
  // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {() => setCount(count + 1)} >Add</button>
      {/* <button onClick = {sub} >Sub</button> */}
      <button onClick = {() => setCount(count - 1)} >Sub</button>
    </div>
  )
}