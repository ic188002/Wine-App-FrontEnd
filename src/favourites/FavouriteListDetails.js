import React from 'react'

export default function FavouriteListDetails(props) {
 const favouritelistId = props.listDetails._id
  const wines = props.listDetails.wine
       console.log(wines)

if(favouritelistId ){
const showDetials = wines.map((wine, index) => (
      <div key={index}>
        <h5>{wine.title}</h5>
        <img src={wine.imageUrl}/>
        <p>{wine.description}</p>
        <p>{wine.price}</p>
        <p>{wine.link}</p>
        <hr></hr>
        <button className="button-delete-wine" onClick={() => {props.deleteWines(wine._id) }}>Remove</button>

    </div>
       ))
    
  return (
    <div>
        
      <h1>{props.listDetails.name}</h1>
      {showDetials}
    </div>
  )

  } else {
    
  }
}
