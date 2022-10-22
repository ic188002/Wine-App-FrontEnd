import React from 'react'
import WineDetails from './WineDetails'
import WineList from './WineList'

export default function WineCategoriesList(props) {
  return (
  
      <div className="wine-library">
      
      <WineList wineList={props.wineList}  wineCategory={props.wineCategory}></WineList>  
      <WineDetails wineList={props.wineList}  ></WineDetails>
      </div>
    
  )
}
