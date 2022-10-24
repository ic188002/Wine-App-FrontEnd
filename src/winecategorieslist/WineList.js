import React from 'react'
import WineRow from './WineRow'

// within the winelist component we render the details for WineRow.
// an onclick function will need to be looped through wineRow to render the details for each particular wine


export default function WineList(props) {
    const allWine= props.wineList.map((wine, index) => (
        <div key={index}>
        <WineRow {...wine}></WineRow>   
    </div>))

console.log(allWine)
  return (
     <div className="wine-list">
     <h1 className="section-title"> {props.wineCategory.name}</h1>
     {allWine}
    </div>
  
    
  )
}
