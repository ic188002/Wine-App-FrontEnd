import React from 'react'
import WineDetails from './WineDetails'
import WineList from './WineList'

export default function WineCategoriesList(props) {
  // the main page/ 'div' that hold or our winelist details'
  return (
  
      <div className="wine-library">
      {/* within this we render the display for our WineList component  and winedetails components */}
      <WineList wineList={props.wineList}  wineCategory={props.wineCategory}></WineList>  
      <WineDetails wineList={props.wineList}  ></WineDetails>
      </div>
    
  )
}
