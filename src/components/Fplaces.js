import React from 'react'
import Places from './Places'

export default function Fplaces() {

  const data = [
    ["Kerala", "Thiruvananthapuram", 1],
    ["Tamil Nadu", "Chennai", 2],
    ["Karnataka", "Bangaluru", 3],
    ["Maharashtra", "Mumbai", 4],
    ["Andhra Pradesh", "Hyderabad", 5],
    ["Telangana", "Hyderabad", 6],
    ["Madhya Pradesh", "Bhopal", 7],
    ["Uttar Pradesh", "Lucknow", 8],
    ["Gujarat", "Gandhinagar", 9],
    ["Rajasthan", "Jaipur", 10],
    ["Punjab", "Chandigarh", 11],
    ["Haryana", "Chandigarh", 12],
    ["Uttarakhand", "Dehradun", 13]
  ]

  return (
    <div>
      <Places showplaces = {data} />
    </div>
  )
}
