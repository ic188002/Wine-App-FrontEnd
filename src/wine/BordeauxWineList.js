
import React, { useEffect, useState }  from 'react'
import Axios from 'axios'
import WineRow from './WineRow'
import WineDetails from './WineDetails';

export default function BordeauxWineList() {

    const [wineList, setWineList] = useState([]);

    useEffect(() => {
    
     loadWineList()

        }, [])

    const loadWineList = () => {
        Axios.get('https://api.spoonacular.com/food/wine/recommendation?wine=bordeaux&number=10&apiKey=cf8ded1fa117496c820dea2d4b16fbdf') 
    
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
        <div key={index}>
            <WineRow {...wine}></WineRow>
            
        </div>
    ))
    const wineDetails=wineList.map((wine, index) =>(
        <div key={index}>
        <WineDetails {...wine}></WineDetails>
        </div>
    ))
  return (
    <div className="wine-library">
    <div className="wine-list">
     <h1 className="section-wine-title">BordeauxWineList</h1>
     <span className="section-count">Number of Wines: {allWine.length}</span>
     {allWine}
    </div>
    <div className="wine-details">
    <h1 className="section-wine-title">Details</h1>
      {wineDetails}
    </div>

    {/* <table>
    <tbody>
    <tr>
        <th>Wine Name</th>
        <th>Wine Description</th>
        <th>Price</th>
    </tr>
    </tbody> */}
   
{/* </table> */}


</div>
  )
}