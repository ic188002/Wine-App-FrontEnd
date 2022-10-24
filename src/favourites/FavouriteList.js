import  axios  from 'axios'
import React from 'react'
import FavouritesCreateForm from './FavouritesCreateForm'
import { useState } from 'react'

export default function FavouriteList(props) {
    const [wineNights, setWineNights] = useState([]);
    let user = props.user
    const loadWineNight = () => {
        // Axios Code will go here
        axios.get("favouritewine/index")
        .then(response => {
            console.log(response);
            // this is equivalent to this.setState in class components.
            // Setting the state will rerender the whole component again.
            setWineNights(response.data)
        })
        .catch(error => {
            console.log("Error When Retrieving Wines")
            console.log(error);
        })
    }


    const addNewWineNight = (wineNight) => {
        axios.post("favouritewine/add", wineNight 
        // ,{headers: {
        //     "Authorization": "Bearer " + localStorage.getItem("token")
        // } }
    )
        .then(response => {
            loadWineNight();
        })
        .catch(error => {
            console.log(error)
            console.log("Error");
        }) 
    
}
    




  return (
    <div>
        <h1>FavouriteList</h1>
        
        <FavouritesCreateForm user={user} addNewWineNight={addNewWineNight}></FavouritesCreateForm>
    </div>
  )
}
