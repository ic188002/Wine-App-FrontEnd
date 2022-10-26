import  axios  from 'axios'
import React from 'react'
import FavouritesCreateForm from './FavouritesCreateForm'
import { useState, useEffect } from 'react'
import FavouriteListRow from './FavouriteListRow'
import FavouritesEditForm from './FavouritesEditForm'

export default function FavouriteList(props) {

    const [isEdit, setIsEdit] = useState(false);
    const [currentFavouriteWine, setCurrentFavouriteWine] = useState({});
  // const { wineId } = useParams()

useEffect(() => {    
    }, [])    

const editView = (id) => {
    axios.get(`favouritewine/edit?_id=${id}`)
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
    props.loadWineNight(props.user)
    setIsEdit(false)

    })
    .catch(error => {
      console.log("error Editing Wine nights in App.js 169")
      console.log(error)
    })
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////
  const deleteFavourites = (id) => {
    axios.delete(`favouritewine/delete?_id=${id}`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    .then(response => {
        console.log("record delete!")
        props.loadWineNight(props.user)
    })
    .catch(error => {
        console.log(error)
    })
}
///////////////////////////////////////////////////////////////////////////////////////////////////////




const allWineList = props.wineNights.map((list, index) => (
    <div key={index}>
        <FavouriteListRow {...list} loadWineNight={props.loadWineNight} editView={editView} deleteFavourites={deleteFavourites} > </FavouriteListRow>
    </div>
))

  return (
    <div>
       <div className='filter'>
        <div className='title'>
          <h1>Favourite Wine List</h1>
        </div>
        </div>
        <hr/>
        <div >
            <h5 className='fav-wine-list-info'>
                 Create A favourite wine list For any event, whether A wedding, dinner party or just a collection of you're favourites!
            </h5>
        </div>
        <hr/>
      {allWineList}
        <hr></hr>
        {(isEdit) ? <FavouritesEditForm currentFavouriteWine_id={currentFavouriteWine._Id} favouriteWine={currentFavouriteWine} editFavourites={editFavourites} /> : null }
    </div>
  )
}
