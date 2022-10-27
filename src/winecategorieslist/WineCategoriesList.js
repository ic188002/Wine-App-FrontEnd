import React, {useState} from 'react'
import WineDetails from './WineDetails'
import WineList from './WineList'
import axios from 'axios'

export default function WineCategoriesList(props) {
  
  let wineNights= props.wineNights

  const[currentWine, setCurrentWine] =useState({})
  const handleDetailsClick= (wine) => {
    setCurrentWine(wine)
    console.log('clicked')
    console.log(wine)
    }
    

    const addToWineNight = (addToWineNight) => {
      axios.post("wine/add", addToWineNight, {
      headers:{
        "x-auth-token": localStorage.getItem('token')
    }}
      )
        .then(response => {
          console.log('favouritewine added to winenight successfully)')
        })
        .catch(error => {
          console.log(error)
          console.log("Error");
        })
    }
  

   
  // the main page/ 'div' that hold or our winelist details'
  return (

    <div className="wine-library">
      {/* within this we render the display for our WineList component  and winedetails components */}
      <WineList loadWineIndex={props.loadWineIndex}  wineDetails={handleDetailsClick}wineList={props.wineList}  wineCategory={props.wineCategory}></WineList>  
      <WineDetails currentWine={currentWine} wineNights={wineNights} addToWineNight={addToWineNight}></WineDetails>
      </div>
    

  )
}
