
import React from 'react'
import RedWineCard from './RedWineCard'
import { Link, renderMatches } from "react-router-dom"
import wineData from '../wineClassificationData'


// import wineData from  './wineClassificationData'

// imported the data to the winecategories page 

export default function RedWineIndex(props) {

  // console.log(wineCategoryName)



// const filteredRedWines = () => {
//   if (wineData.type === "red" ) {
//     wineData.wines.map(wineData)
//   }
//   else {
// }

  // looped over each object in the wine data array to create the RedWineCards for the index page 

   const RedWineIndex = props.wineCategories.map((category, index) => (
  // the RedWineCard.js stores the information we want to display for each card 
  <Link  key={index} to={`/${category.url}`} style={{textDecoration: "none"}}> <RedWineCard loadRedWineIndex={() => props.loadRedWineIndex(category)} key={index} {...category}></RedWineCard></Link>
    ))


  return (
    <div>
      <div className='filter'>
        <div className='title'>
          <h1>Red Wine Categories</h1>
        </div>
        <div className='filterby'>
          <h2>Filter By.</h2>
          <img className='redBottle' src='images/redbottle.png' height='100px' alt=""/>
          <img className='whiteBottle' src='images/whitebottle.png' height='100px' alt="" />
        </div>
      </div>
      <hr/>
      <div className='Grid'>
   
        {RedWineIndex}
      </div>
      <div>
        {/* <WineList wineList={wineList}  wineCategoryName={wineCategoryName}></WineList>  */}
      </div>
    </div>

  )
}

