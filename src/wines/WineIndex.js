import React from 'react'
import Axios from 'axios'


export default function WIneIndex() {

    const showWine = () => {
        Axios.get('https://api.spoonacular.com/food/wine/dishes?wine=malbec&apiKey=7a64dea7d5bb41f38bb3b24933947711')
        .then( response => {
          console.log(response.data)
          
          })
        .catch(error => {
          console.log(error)
        })
    }

  




    return (
        <div>
            <h1>Index page</h1>
            {showWine}



        </div>
    )
}
