import React from 'react'
import MalbecWineList from './MalbecWineList'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

export default function WineList() {
  return ( 

    <div>
        <h1>WineList</h1>
        <p><Link to='/malbecwinelist'>Malbec Wines</Link></p>
        <p><Link to="/chardonnaywinelist">Chardonnay Wines</Link></p>


    <div>
    </div>
    </div>
  )
}
