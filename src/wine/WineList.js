import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"


export default function WineList() {
  return (

    <div>
      <h1>WineList</h1>

      <p><Link to='/malbecwinelist'>Malbec Wines</Link></p>
      <p><Link to="/chardonnaywinelist">Chardonnay Wines</Link></p>
      <p><Link to="/rieslingwinelist">Riesling Wines</Link></p>
      <p><Link to="/moscatowinelist">Moscato Wines</Link></p>
      <p><Link to="/cabernetsauvignonwinelist">Cabernet Sauvignon Wines</Link></p>
      <p><Link to="/rosewinelist">Rose Wines</Link></p>
</div>

  )
}
