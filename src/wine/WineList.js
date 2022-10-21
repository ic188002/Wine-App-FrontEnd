import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Container, Card, Button, CardGroup, Row, Col } from 'react-bootstrap';

export default function WineList() {
  return (

    <div>
      <h1>WineList</h1>

      <p><Link to="/chardonnaywinelist">Chardonnay Wines</Link></p>
      <p><Link to="/rieslingwinelist">Riesling Wines</Link></p>
      <p><Link to="/moscatowinelist">Moscato Wines</Link></p>
      <p><Link to="/cabernetsauvignonwinelist">Cabernet Sauvignon Wines</Link></p>
      <p><Link to="/rosewinelist">Rose Wines</Link></p>
      <p><Link to='/malbecwinelist'>Malbec Wines</Link></p>
      <p><Link to="/chardonnaywinelist">Chardonnay Wines</Link></p>
      <p><Link to="/portwinelist">Port Wines</Link></p>
      <p><Link to="/shirazwinelist">Shiraz Wines</Link></p>
      <p><Link to="/riojawinelist">Rioja Wines</Link></p>
      <p><Link to="/cotesdurhonewinelist">Cotes Du Rhone Wines</Link></p>
      <p><Link to="/bordeauxwinelist">Bordeaux Wines</Link></p>
      <p><Link to="/pinotgrigiowinelist">Pinot Grigio Wines</Link></p>
      <p><Link to="/primitivowinelist">Primitivo Wines</Link></p>
      <p><Link to="/sauvignonwinelist">Sauvignon Blanc Wines</Link></p>
      <p><Link to="/cheninblancwinelist"> Chenin Blanc Wines</Link></p>



    <div className='Row'>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Chardonnay Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Riesling Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/red.png"/>
        <h2 className='info'>Moscato Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Cabernet Sauvignon Wines</h2>
      </div>
    </div>

    <div className='Row'>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Rose Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/red.png"/>
        <h2>Malbec Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Chardonnay Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/red.png"/>
        <h2>Port Wines</h2>
      </div>
    </div>

    <div className='Row'>
      <div className='Box'>
        <img className='Bottle' src="/images/red.png"/>
        <h2>Shiraz Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/red.png"/>
        <h2>Rioja Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Cotes Du Rhone Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/red.png"/>
        <h2>Bordeaux Wines</h2>
      </div>
    </div>
    <div className='Row'>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Pinot Grigio Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Primitivo Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Sauvignon Blanc Wines</h2>
      </div>
      <div className='Box'>
      <img className='Bottle' src="/images/white.png"/>
        <h2>Chenin Blanc Wines</h2>
      </div>
    </div>
</div>

  )
}
