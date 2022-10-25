import React from 'react'

export default function FavouriteListRow(props) {
 
  return (
    <div>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <p>{props.wineNights}</p>
    <p>{props._id}</p>
    <hr></hr>
    </div>
  )
}
