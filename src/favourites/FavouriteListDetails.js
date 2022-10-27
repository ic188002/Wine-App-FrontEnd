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
        <div className='title-and-button'>
        <h1 className='list-title'>Wine List: {props.listDetails.name}</h1>
        <button className="button-fav-list"onClick={props.closelist}>Close Wine List</button>
        </div>
        <hr></hr>
        {showDetials}
      </div>
    )

  } else {

  }
}
