import React from 'react'

export default function FavouriteListRow(props) {




  return (


    <div className='wine-night-full-div'>
      <div className='wine-night'>
        <p className='fav-list-name'>{props.name}</p>
        <p className='fav-list-description'>{props.description}</p>
        <p className='fav-list-event'>Event: {props.wineNights}</p>
        {/* <p>{props._id}</p> */}
        <button className="button-fav-wines-edit"onClick={() => { props.editView(props._id) }}>Edit</button>
        <button className="button-fav-wines-delete"onClick={() => {props.deleteFavourites(props._id)}}>Delete</button>
        <button className="button-fav-wines-delete"onClick={props.winelistDetails}>View List</button>
        <img className="fav-list-image" src="images/logo1.png" height="70rem" />

   
    </div>
    </div>
  )
}
