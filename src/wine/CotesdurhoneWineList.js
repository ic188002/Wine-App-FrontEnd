import React, { useEffect, useState }  from 'react'
import Axios from 'axios'
import WineRow from './WineRow'

export default function CotesdurhoneWineList () {

    const [wineList, setWineList] = useState([]);

    useEffect(() => {
    
     loadWineList()

        }, [])

    const loadWineList = () => {
        Axios.get('https://api.spoonacular.com/food/wine/recommendation?wine=cotes_du_rhone&number=1&apiKey=cf8ded1fa117496c820dea2d4b16fbdf') 
    
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
     <h1>Cotes Du Rhone WineList</h1>
     
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
