import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import AddToFavourite from './AddToFavourite';



export default function WineDetails(props) {


  let wineNights= props.wineNights
  
  const currentWine = props.currentWine
  let details;

  if (currentWine.id) {
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


          <AddToFavourite wineNights={wineNights} currentWine={currentWine} addToWineNight={props.addToWineNight}></AddToFavourite>
    
          <br /><br />
        </div>
      </div>
  } 
  else {
    details =
     <div>
        <p>
          <span>No Wine Selected</span>
        </p>
        <img src='/images/logo.png' alt='' />
      </div>
  }
  return (
    <div className="wine-details">
      <h1 className="section-title">DETAILS</h1>
      {details}

    </div>


  )
}