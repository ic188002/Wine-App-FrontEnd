import React from 'react'

export default function WineDetails(props) {
  return (
    <div >
          <h5>{props.title}</h5>
    <h5>{props.description}</h5>
        <h5>{props.price}</h5>
    </div>
  )
}
