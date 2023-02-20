import React from 'react'

export default function Datecontainer(props) {
    const month = props.date.toLocaleString('en', {month : 'long'});
    const day = props.date.toLocaleString('en', {day : '2-digit'});
    const year = props.date.toFullYear();
  return (
    <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
  )
}
