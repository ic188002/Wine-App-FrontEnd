
import React from 'react'
import WineCard from  './WineCard'
import { Link } from "react-router-dom"


// import wineData from  './wineClassificationData'

// imported the data to the winecategories page 




export default function WineIndex(props) {

  // console.log(wineCategoryName)

  // looped over each object in the wine data array to create the winecards for the index page 

   const wineIndex = props.wineCategories.map((category, index) => (
  // the winecard.js stores the information we want to display for each card 
  <Link to= {`/${category.url}`} style={{textDecoration: "none"}}> <WineCard loadWineList={() => props.loadWineList(category)} key={index} {...category}></WineCard></Link>
        
    ))
  
    
    // console.log(props.wineList)

  return (
   <div>
    <h1>Wine Categories</h1> 
    <div className='Grid'>

     {wineIndex}
    </div>
    <div>
     {/* <WineList wineList={wineList}  wineCategoryName={wineCategoryName}></WineList>  */}
    </div>
     </div>
  
  )
}

