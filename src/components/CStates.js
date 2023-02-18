import React from 'react'

const PresentStatesData = ({states : {state, capital}}) => {
    return (
        <div>
            <h1>{state} {capital}</h1>
        </div>
    )
}

export default function CStates({showStatesData}) {
    const statesList = showStatesData.map((x) => <PresentStatesData states = {(x)} />)
  return (
    <div>
        {statesList}
    </div>
  )
}
