import  axios  from 'axios'
import React from 'react'
import FavouritesCreateForm from './FavouritesCreateForm'
import { useState, useEffect } from 'react'
import FavouriteListRow from './FavouriteListRow'
export default function FavouriteList(props) {
  

useEffect(() => {


    
    }, [])    


   
const allWineList = props.wineNights.map((list, index) => (
    <div key={index}>
        <FavouriteListRow {...list}> </FavouriteListRow>
    </div>
))

  return (
    <div>
       
                <h1>Favourite Wine List</h1>
      {allWineList}

        <hr></hr>
        
    </div>
  )
}
