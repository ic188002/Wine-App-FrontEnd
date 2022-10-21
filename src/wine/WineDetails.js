import React from 'react'

export default function WineDetails (props) {
  return (
    
    <>
    <td>{props.title}</td>
    <td>{props.description}</td>
    <td>{props.price}</td>
    </>
  )
}
