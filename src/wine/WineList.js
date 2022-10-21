import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import WineDetails from './WineDetails'


export default function WineList() {
  return (

    <div>
      <h1>WineList</h1>
      <div className='Row'>
        <div className='Box1'><Link to="/chardonnaywinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Chardonnay Wines</h2>
        </Link> </div>
        <div className='Box1'><Link to="/rieslingwinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Riesling Wines</h2></Link>
        </div>
        <div className='Box'><Link to="/moscatowinelist">
          <img className='Bottle' src="/images/red.png" />
          <h2 className='info'>Moscato Wines</h2></Link>
        </div>
        <div className='Box3'><Link to="/rosewinelist">
          <img className='Bottle' src="/images/rose.png" alt="" />
          <h2>Rose Wines</h2></Link>
        </div>
      </div>


      <div className='Row'>
        <div className='Box'><Link to="/cabernetsauvignonwinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Cabernet Sauvignon Wines</h2></Link>
        </div>


        <div className='Box'><Link to='/malbecwinelist'>
          <img className='Bottle' src="/images/red.png" alt="" />
          <h2>Malbec Wines</h2></Link>
        </div>

        <div className='Box1'><Link to="/chardonnaywinelist">
          <img className='Bottle' src="/images/champ.png" />
          <h2>Champagne</h2></Link>
        </div>

        <div className='Box'><Link to="/portwinelist">
          <img className='Bottle' src="/images/red.png" alt="" />
          <h2>Port Wines</h2></Link>
        </div>
      </div>


      <div className='Row'>
        <div className='Box'><Link to="/shirazwinelist">
          <img className='Bottle' src="/images/red.png" alt="" />
          <h2>Shiraz Wines</h2></Link>
        </div>
        <div className='Box'><Link to="/riojawinelist">
          <img className='Bottle' src="/images/red.png" alt="" />
          <h2>Rioja Wines</h2></Link>
        </div>

        <div className='Box1'><Link to="/cotesdurhonewinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Cotes Du Rhone Wines</h2></Link>

        </div>
        <div className='Box'><Link to="/bordeauxwinelist">
          <img className='Bottle' src="/images/red.png" alt="" />
          <h2>Bordeaux Wines</h2></Link>
        </div>
      </div>


      <div className='Row'>
        <div className='Box1'><Link to="/pinotgrigiowinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Pinot Grigio Wines</h2></Link>
        </div>
        <div className='Box1'><Link to="/primitivowinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Primitivo Wines</h2></Link>
        </div>
        <div className='Box1'><Link to="/sauvignonwinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Sauvignon Blanc Wines</h2></Link>
        </div>
        <div className='Box1'><Link to="/cheninblancwinelist">
          <img className='Bottle' src="/images/white.png" alt="" />
          <h2>Chenin Blanc Wines</h2></Link>

        </div>
      </div>
      <WineDetails></WineDetails>
    </div >

  )
}
