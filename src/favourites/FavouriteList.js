import  axios  from 'axios'
import React from 'react'
import FavouritesCreateForm from './FavouritesCreateForm'
import { useState, useEffect } from 'react'
import FavouriteListRow from './FavouriteListRow'
import FavouritesEditForm from './FavouritesEditForm'


export default function FavouriteList(props) {

    const [isEdit, setIsEdit] = useState(false);
    const [currentFavouriteWine, setCurrentFavouriteWine] = useState({});



const editView = (_id) => {
  console.log(_id)
    axios.get(`favouritewine/edit?_id=${_id}`)
    .then(response => {
      console.log(response.data.favouriteWine)
      // let favouriteWine = response.data.favouriteWine
      // console.log(favouriteWine + "Loaded favouritewine information")
      setIsEdit(true)
      setCurrentFavouriteWine(response.data.favouriteWine)
    })
  }
  
  const editFavourites = (list) => {
    axios.put("favouritewine/update", list, {headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
  } })
    .then(response => {
      console.log("Wine Night updated succesffully app.js 160")
    props.loadWineNight()
      console.log(response);
    })
    .catch(error => {
      console.log("error Editing Wine nights in App.js 169")
      console.log(error)
    })
  }

  console.log(currentFavouriteWine)

   
const allWineList = props.wineNights.map((list, index) => (
    <div key={index}>
        <FavouriteListRow  loadWineNight={props.loadWineNight} {...list} editView={editView} > </FavouriteListRow>
    </div>
))

  return (
    <div>
       
                <h1>Favourite Wine List</h1>
      {allWineList}
        <hr></hr>
        {(isEdit) ?
        <FavouritesEditForm  currentFavouriteWine_id={currentFavouriteWine.id} favouriteWine={currentFavouriteWine} editFavourites={editFavourites} /> : null }
    </div>
  )

  }