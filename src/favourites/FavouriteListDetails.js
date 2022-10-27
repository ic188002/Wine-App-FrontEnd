import React from 'react'

export default function FavouriteListDetails(props) {
  const favouritelistId = props.listDetails._id
  const wines = props.listDetails.wine
  console.log(wines)

  if (favouritelistId) {
    const showDetials = wines.map((wine, index) => (
      <div className='whole'>
      <div className="details-Fav-Items-title">
        <div className='flex-title'>
        <h5>{wine.title}</h5>
        <h5>{wine.price}</h5>
        </div>
        <div className="details-Fav-Items" key={index}>
          <div className='image-box-detail-fav'>
            <img className="details-image-fav" src={wine.imageUrl} />
          </div>
          <p className='description'>About the Wine: <br/><hr/>{wine.description}</p>
          <div className='links'>
          <a href={wine.link}>Click Here To Buy</a><br/>
          <button className="button-delete-wine" onClick={() => { props.deleteWines(wine._id) }}>Remove</button>
          </div>
        </div>
      </div>
      </div>
    ))

    return (
      <div>
        <hr></hr>
        <h1 className='list-title'>{props.listDetails.name}</h1>
        <hr/>
        {showDetials}
      </div>
    )

  } else {

  }
}
