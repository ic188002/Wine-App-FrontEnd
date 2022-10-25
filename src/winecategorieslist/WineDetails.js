import axios from 'axios'
import React from 'react'

export default function WineDetails(props) {

  let currentWine = props.currentWine
  // this will be an onclick function , so we will need to pass a function through wineRow to grab the data, for now just mapped over
  // const wineDetails=props.wineList.map((wine, index) =>(
  //     <div key={index}>
  //      <h5>{wine.title}</h5>
  //     <h5>{wine.description}</h5>
  //     <h5>{wine.price}</h5>
  //     </div>
  // ))
  const pushId = (e, favWine, response) => {
    const wineId = currentWine.id
    console.log(wineId)
  }

  return (
    <div className="wine-details">
      <h1 className="section-title">Details</h1>
      <div className='wine-detail-inner'>
        <div className='image-details'><img className='image-detail-full' src={currentWine.imageUrl} alt=""></img>
        </div>
        <h5 className='wine-title-detail'>{currentWine.title}</h5>
        <div className='description-wine'>
        <p>{currentWine.description}</p>
        </div>
        <h3>{currentWine.price}</h3>
        <br/>
        <p><a href={currentWine.link}>Buy Here</a></p>
        <br/>
        <button onClick={pushId}>Add To Favourites</button>
      </div>
    </div>
  )
}
