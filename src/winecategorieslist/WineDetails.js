import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import AddToFavourite from './AddToFavourite';



export default function WineDetails(props) {


  let wineNights = props.wineNights

  const currentWine = props.currentWine
  let details;

  const addToFavourites = props.wineNights.map((wineNight, index) => (
    <Dropdown.Item>+ {wineNight.name} </Dropdown.Item>
  ))

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
          <br /><br />

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
      <div className='full-nothing-selected'>
        <div className='fullish-nothing-selected'>
          <h4 className="no-wine-selected">
            <span>Select A wine for further details</span>
          </h4>
          <div className='standin-image-detail'>
            <img className="standin-image" src='/images/winedeats.png' alt='' />
          </div>
        </div>
      </div>
  }
  return (
    <div className="wine-details">
      <h1 className="section-title">DETAILS</h1>
      {details}

    </div>


  )
}