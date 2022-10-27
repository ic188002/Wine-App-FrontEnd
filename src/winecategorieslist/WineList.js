
import React from 'react'
import WineRow from './WineRow'
import { useState } from 'react'

// within the winelist component we render the details for WineRow.
// an onclick function will need to be looped through wineRow to render the details for each particular wine


export default function WineList(props) {

    const allWine= props.wineList.map((wine, index) => (
        <div onClick={() => props.wineDetails(wine)}  key={index}>
        <WineRow {...wine}></WineRow>   
    </div>))

// console.log(allWine)
  return (
     <div className="wine-list">
     <h1 className="section-title"> {props.wineCategory.name}</h1>
     {allWine}
    </div>
  
    
  )
}



 
// FUTURE CODE TO REVIEW 

// const filterrecommendations = (filter) => {
    
//   axios.get(`https://api.spoonacular.com/food/wine/recommendation?wine=${filter.category}&minRating=${filter.minRating}&number=6&apiKey=cf8ded1fa117496c820dea2d4b16fbdf`)
//   .then(response => {
//     console.log(filter)
//     // console.log(response.data)
//     // we fetch the data from the API i save it in a variable call winelist 
//     setWineFilter(response.data)
//   console.log(wineFilter)
 
//   })
//   .catch(error => {
//     console.log('Error Retreving Wines ')
//     console.log(error)
//   })
  
// }
