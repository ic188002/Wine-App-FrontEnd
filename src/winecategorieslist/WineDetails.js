import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export default function WineDetails(props) {




  let currentWine = props.currentWine
  let details;
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

  const addToFavourites = props.wineNights.map((wineNight, index) =>( 
     <Dropdown.Item>+ {wineNight.name} </Dropdown.Item>
  ))

  if (currentWine) {
    details =
      <div className="wine-details">
        <div className='wine-detail-inner'>
          <div className='image-details'><img className='image-detail-full' src={currentWine.imageUrl} alt=""></img>
          </div>
          <h5 className='wine-title-detail'>{currentWine.title}</h5>
          <div >
            <p className='description-wine'>{currentWine.description}</p>
          </div>
          <h3>{currentWine.price}</h3>
          <br/><br/>

          <OverlayTrigger
            trigger="click"
            overlay={
              <Popover id={'popover-positioned-top'}>
                <Popover.Header as="h3">{''}</Popover.Header>
                <Popover.Body>
                  <div className='overlay'>
                    <strong>Please Come Back To Us</strong><p><a href={currentWine.link}>Click Here To Buy</a></p>
                  </div>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary">Buy Here</Button>
          </OverlayTrigger>


          
          <DropdownButton id="dropdown-basic-button" title="+ Add To A List">
          {addToFavourites}
          </DropdownButton>

          <br /><br />
          <button onClick={pushId}>Add To Favourites</button>
        </div>
    
   

   
      </div>


  } else {
    details =
      <div className="wine-details">
        <p>
          <span>No Wine Selected</span>
        </p>
        <img src='/images/logo.png' alt='' />
      </div>
  }
  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}

    </div>


  )
}