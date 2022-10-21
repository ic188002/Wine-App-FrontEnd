import React, { useEffect, useState }  from 'react'
import Axios from 'axios'
import WineDetails from './WineDetails'

export default function RieslingWineList() {


    const [wineList, setWineList] = useState([]);

    useEffect(() => {
    
     loadWineList()

        }, [])

    const loadWineList = () => {
        Axios.get('https://api.spoonacular.com/food/wine/recommendation?wine=riesling&number=1&apiKey=7a64dea7d5bb41f38bb3b24933947711') 
    
        .then(response => {
            console.log(response.data)
            setWineList(response.data.recommendedWines)
        })
        .catch( error => {
            console.log('Error Retreving Wines ')
            console.log(error)
        })
    
    }

    const allWine= wineList.map((wine, index) => (
        <tr key={index}>
            <WineDetails {...wine}></WineDetails>
            
        </tr>
    ))

  return (
    <div>
     <h1>RieslingWineList</h1>
     
    <table>
    <tbody>
    <tr>
        <th>Wine Name</th>
        <th>Wine Description</th>
        <th>Price</th>
    </tr>
    {allWine}
    </tbody>
   
</table>
</div>
  )
}
