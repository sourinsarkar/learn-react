import React from 'react'
import CStates from './CStates'

export default function FStates() {
    const statesData = [
        {state : "Jharkhand", capital : "Ranchi"},
        {state : "Bihar", capital : "Patna"},
        {state : "West Bengal", capital : "Kolkata"},
        {state : "Odisha", capital : "Bhuvneshwar"},
        {state : "Uttar Pradesh", capital : "Lucknow"},
        {state : "Andra Pradesh", capital : "Hyderabad"},
        {state : "Madhya Pradesh", capital : "Bhopal"},
        {state : "Maharashtra", capital : "Mumbai"}
    ]
    return (
    <div>
        <CStates showStatesData = {statesData} />
    </div>
  )
}
