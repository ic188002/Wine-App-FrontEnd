
import React from 'react'
import WineCard from './WineCard'
import { Link } from "react-router-dom"


// import wineData from  './wineClassificationData'

// imported the data to the winecategories page 




export default function WineIndex(props) {

  // console.log(wineCategoryName)



  // // looped over each object in the wine data array to create the winecards for the index page 

   const wineIndex = props.wineCategories.map((category, index) => (
  // the winecard.js stores the information we want to display for each card 
  <Link  key={index} to={`/${category.url}`} style={{textDecoration: "none"}}> <WineCard loadWineIndex={() => props.loadWineIndex(category)} key={index} {...category}></WineCard></Link>
        
    ))
  
    
    // console.log(props.wineList)


  return (
    <div>


      <div className='filter'>
        <div className='title'>
          <h1>Wine Categories</h1>
        </div>
        <div className='filterby'>
          <h2>Filter By.</h2>
          <img className='redBottle' src='images/redbottle.png' height='100px' alt=""/>
          <img className='whiteBottle' src='images/whitebottle.png' height='100px' alt="" />
        </div>
      </div>
      <hr/>
      <div className='Grid'>

        {wineIndex}
      </div>
      <div>
        {/* <WineList wineList={wineList}  wineCategoryName={wineCategoryName}></WineList>  */}
      </div>
    </div>

  )
}

