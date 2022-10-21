import React from 'react'

export default function WineRow (props) {
  return (
    
    <div className="wine-row">
      <div className="wine-summary">
      
        <h5>{props.title}</h5>
    {/* <h5>{props.description}</h5> */}
        <h5>{props.price}</h5>
      </div>
    </div>
  )
}
