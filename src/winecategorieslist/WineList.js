import React from 'react'
import WineRow from './WineRow'




export default function WineList(props) {
    const allWine= props.wineList.map((wine, index) => (
        <div key={index}>
        <WineRow {...wine}></WineRow>   
    </div>))

console.log(allWine)
  return (
     <div className="wine-list">
     <h1 className="section-title"> {props.wineCategory.name} Wines</h1>
     {allWine}
    </div>
  
    
  )
}
