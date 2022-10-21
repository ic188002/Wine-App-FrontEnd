import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import Signin from './user/Signin'


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Alert } from "react-bootstrap"
import WineList from './wine/WineList'

import MalbecWineList from './wine/MalbecWineList'



import BordeauxWineList from './wine/BordeauxWineList'
import PinotGWineList from './wine/PinotGWineList'
import PrimitivoWineList from './wine/PrimitivoWineList'
import SauvignonWineList from './wine/SauvignonWineList'
import CheninBlancWineList from './wine/CheninBlancWineList'

import ChardonnayWineList from './wine/ChardonnayWineList'
import RieslingWineList from './wine/RieslingWineList'
import CabernetSauvignonWineList from './wine/CabernetSauvignonWineList'
import MoscatoWineList from './wine/MoscatoWineList'
import RoseWineList from './wine/RoseWineList'

import ChampagneWineList from './wine/ChampagneWineList'
import PortWineList from './wine/PortWineList'
import ShirazWineList from './wine/ShirazWineList'
import CotesdurhoneWineList from './wine/CotesdurhoneWineList'
import RiojaWineList from './wine/RiojaWineList'
import WineDetails from './wine/WineDetails'

//ROUTING


export default function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  //this will be exicuted 
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      let user = jwt_decode(token);
      if (user) {
        setIsAuth(true)
        setUser(user);
      }
      else if (!user) {
        localStorage.removeItem("token");
        setIsAuth(false)
      }
    }
  }, [])

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      });
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then(response => {
        console.log(response.data.token);
        if (response.data.token != null) {
          localStorage.setItem("token", response.data.token)
          let user = jwt_decode(response.data.token)
          setIsAuth(true);
          setUser(user)

          setMessage("User Logged in Successfuly")
        }
      })
      .catch(error => {
        console.log(error);
      })
  }


  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
    setMessage("User Logged out Successfully")

  }



  const errMessage = message ? (

    <Alert variant='success' onClose={() => setMessage(null)} dismissible >{message}</Alert>
  ) : null



  Axios.get('https://api.spoonacular.com/food/wine/pairing?food=&apiKey=7a64dea7d5bb41f38bb3b24933947711')
    .then(response => {
      console.log(response.data)

    })
    .catch(error => {
      console.log(error)
    })





  return (
    <div>
      <Router>
        <div>
          {errMessage}
          <nav>
            {isAuth ? (
              <div>
                {user ? "Welcome " + user.user.name : null}&nbsp;
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/logout' onClick={onLogoutHandler}>Logout</Link>&nbsp;
              </div>
            ) : (
              <div>
                <Link to='/signup'>Signup</Link>&nbsp;
                <Link to='/signin'>Signin</Link>&nbsp;
                <Link to='/'>Home</Link>&nbsp;
                {/* <Link to='/malbecwines'>Malbec Wines</Link> */}

              </div>
            )}
          </nav>
          <div>
            <Routes>
              {/* This code to go in route path / -- <Signin login={loginHandler} /> */}
              <Route path="/" element={<WineList />}></Route>
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={loginHandler} />}></Route>
              <Route path="/malbecwinelist" element={<MalbecWineList />}></Route>
             
              <Route path="/chardonnaywinelist" element={<ChardonnayWineList></ChardonnayWineList>}></Route>

              <Route path="/bordeauxwinelist" element={<BordeauxWineList></BordeauxWineList>}></Route>
              <Route path="/pinotgrigiowinelist" element={<PinotGWineList></PinotGWineList>}></Route>
              <Route path="/primitivowinelist" element={<PrimitivoWineList></PrimitivoWineList>}></Route>
              <Route path="/sauvignonwinelist" element={<SauvignonWineList></SauvignonWineList>}></Route>
              <Route path="/cheninblancwinelist" element={<CheninBlancWineList></CheninBlancWineList>}></Route>

              <Route path="/rieslingwinelist" element={<RieslingWineList></RieslingWineList>}></Route>
              <Route path="/cabernetsauvignonwinelist" element={<CabernetSauvignonWineList></CabernetSauvignonWineList>}></Route>
              <Route path="/moscatowinelist" element={<MoscatoWineList></MoscatoWineList>}></Route>
              <Route path="/rosewinelist" element={<RoseWineList></RoseWineList>}></Route>

              <Route path="/champagnewinelist" element={<ChampagneWineList />}></Route>
              <Route path="/portwinelist" element={<PortWineList />}></Route>
              <Route path="/shirazwinelist" element={<ShirazWineList />}></Route>
              <Route path="/cotesdurhonewinelist" element={<CotesdurhoneWineList />}></Route>
              <Route path="/riojawinelist" element={<RiojaWineList />}></Route>






            </Routes>
            
          </div>
        </div>
      </Router>

    </div>
  )
}