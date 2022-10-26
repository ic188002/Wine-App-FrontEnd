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
  
  const editFavourites = (favouriteWine) => {
    axios.put("favouritewine/update", favouriteWine, {headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
  } })
    .then(response => {
      console.log("Wine Night updated succesffully app.js 160")
      console.log(response);
      props.loadWineNight();
    })
    .catch(error => {
      console.log("error Editing Wine nights in App.js 169")
      console.log(error)
    })
  }
   
const allWineList = props.wineNights.map((list, index) => (
    <div key={index}>
        <FavouriteListRow {...list} editView={editView} > </FavouriteListRow>
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
        
        <FavouritesEditForm currentFavouriteWine_id={currentFavouriteWine._Id} favouriteWine={currentFavouriteWine} editFavourites={editFavourites} />
    </div>
  )
}
