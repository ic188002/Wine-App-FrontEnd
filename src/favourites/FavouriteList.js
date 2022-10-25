import  axios  from 'axios'
import React from 'react'
import FavouritesCreateForm from './FavouritesCreateForm'
import { useState, useEffect } from 'react'
import FavouriteListRow from './FavouriteListRow'
export default function FavouriteList(props) {
  

useEffect(() => {


    
    }, [])    


//  const [wineNights, setWineNights] = useState([]);
    
//     const loadWineNight = () => {
    
//         // Axios Code will go here
//         axios.get(`favouritewine/index/`)
//         .then(response => {
//             console.log(response);
//             // this is equivalent to this.setState in class components.
//             // Setting the state will rerender the whole component again.
//             setWineNights(response.data)
//         })
//         .catch(error => {
//             console.log("Error When Retrieving Wines")
//             console.log(error);
//         })
//     }


//     const addNewWineNight = (wineNight) => {
//         axios.post("favouritewine/add", wineNight 
//         // ,{headers: {
//         //     "Authorization": "Bearer " + localStorage.getItem("token")
//         // } }
//     )
//         .then(response => {
//             loadWineNight();
//         })
//         .catch(error => {
//             console.log(error)
//             console.log("Error");
//         }) 
    
// }
   
const allWineList = props.wineNights.map((list, index) => (
    <div key={index}>
        <FavouriteListRow {...list}> </FavouriteListRow>
    </div>
))

  return (
    <div>
        {/* <FavouritesCreateForm user={user} addNewWineNight={addNewWineNight} ></FavouritesCreateForm> */}
        <div className='filter'>
         <div className='title'>
                <h1>Favourite Wine List</h1>
      {allWineList}
            </div>

            </div>
        <hr></hr>
//         <FavouritesCreateForm user={user} addNewWineNight={addNewWineNight}></FavouritesCreateForm>

    </div>
  )
}
