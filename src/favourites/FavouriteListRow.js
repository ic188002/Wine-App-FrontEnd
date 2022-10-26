import React from 'react'

export default function FavouriteListRow(props) {

  console.log(props._id)


  return (


    <div className='wine-night-full-div'>
      <div className='wine-night'>
        <h3>{props.name}</h3>
        <p className='fav-list-description'>{props.description}</p>
        <p className='fav-list-event'>Event: {props.wineNights}</p>
        {/* <p>{props._id}</p> */}
        <button className="button-fav-wines-edit"onClick={() => { props.editView(props._id) }}>Edit</button>
        <button className="button-fav-wines-delete">Delete</button>
        <img className="fav-list-image" src="images/logo1.png" height="70rem" />

   
    </div>
    </div>
  )
}

