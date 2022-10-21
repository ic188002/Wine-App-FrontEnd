import React, { useEffect, useState }  from 'react'
import Axios from 'axios'
import WineRow from './WineRow'

export default function MalbecWineList() {


    const [wineList, setWineList] = useState([]);

    useEffect(() => {
    
     loadWineList()

        }, [])

    const loadWineList = () => {
        Axios.get('https://api.spoonacular.com/food/wine/recommendation?wine=malbec&number=1&apiKey=7a64dea7d5bb41f38bb3b24933947711') 
    
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
            <WineRow {...wine}></WineRow>
            
        </tr>
    ))

  return (
    <div>
     <h1>MalbecWineList</h1>
     
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
