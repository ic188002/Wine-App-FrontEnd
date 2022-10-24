import React from 'react'

export default function WineDetails(props) {

  // this will be an onclick function , so we will need to pass a function through wineRow to grab the data, for now just mapped over
    const wineDetails=props.wineList.map((wine, index) =>(
        <div key={index}>
         <h5>{wine.title}</h5>
        <h5>{wine.description}</h5>
        <h5>{wine.price}</h5>
        </div>
    ))

  return (
    <div className="wine-details">
    <h1 className="section-title">Details</h1>
    <div className='wine-detail'>
      {wineDetails}
    </div>
    </div>
  )
}
