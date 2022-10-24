import React from 'react'


export default function WineCard(props) {

   const image = `/images/${props.type}.png`
    let className;

// if else statement to assign classname subject to the type of wine for styling purposes 
if(props.type === 'red'){
    className = "Box"
} 

else if (props.type ==='rose'){
    className = "Box3"
}

else if (props.type === 'white' || 'champ'){
    className = "Box1"
} 
 else {

}


  return (
    // data we are displaying in each card 
   <div onClick={props.loadWineList} className={className}>
    <img className='Bottle' src={image} alt = "" />
    <h2 className='info'>{props.name} Wines</h2>
    </div>

    
  )
  }
  

