import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"


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


    </div>


  )
}
