import React from 'react'



export default function WineRow(props) {
  return (

    <div className="wine-row">
      <div className='wineBox'>
        <div className='wineBoxCenter'>
          <img class="wineImage" src={props.imageUrl} />
        </div>
      </div>
      <div className="wine-summary">

        <h5>{props.title}</h5>
        <h3 className="price">{props.price}</h3>


      </div>
    </div>

  )
}
