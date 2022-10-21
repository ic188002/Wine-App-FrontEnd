import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import Signin from './user/Signin'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Alert } from "react-bootstrap"
import WineList from './wine/WineList'
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
  
  <Alert variant='success' onClose={()=>setMessage(null)} dismissible >{message}</Alert>
) : null

  return (
    <div>
    <Router>
      <div>
        {errMessage} 
        <nav>
          {isAuth ? (
            <div>
              {user ? "Welcome " +  user.user.name : null}&nbsp;
              <Link to='/'>Home</Link>&nbsp;
              <Link to='/logout' onClick={onLogoutHandler}>Logout</Link>&nbsp;
            </div>
          ) : (
            <div>
              <Link to='/signup'>Signup</Link>&nbsp;
              <Link to='/signin'>Signin</Link>&nbsp;
              <Link to='/'>Home</Link>&nbsp;
      

            </div>
          )}
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Signin login={loginHandler} />}></Route>
            <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
            <Route path="/signin" element={<Signin login={loginHandler} />}></Route>

          </Routes>
        </div>
      </div>
      <WineList></WineList>
    </Router>

  </div>
  )
}

