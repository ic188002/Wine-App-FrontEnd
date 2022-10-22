import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import Signin from './user/Signin'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Alert } from "react-bootstrap"
import wineData from  './wineClassificationData'
import WineIndex from './wineindex/WineIndex';
import WineCategoriesList from './winecategorieslist/WineCategoriesList'


//ROUTING


export default function App() {

const wineCategories = wineData.wines

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  const [wineList, setWineList] = useState([]);
  const [wineCategory, setWineCategory] = useState([])

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
    axios.post("auth/signup", user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      });
  }

  const loginHandler = (cred) => {
    axios.post("auth/signin", cred)
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


  const loadWineList = (category) => {
    axios.get(`https://api.spoonacular.com/food/wine/recommendation?wine=${category.url}&number=1&apiKey=cf8ded1fa117496c820dea2d4b16fbdf`) 
  
    .then(response => {
        // console.log(response.data)
        setWineList(response.data.recommendedWines)
        setWineCategory(category)
    })
    .catch( error => {
        console.log('Error Retreving Wines ')
        console.log(error)
    })
  
  }
  console.log(wineList)
  console.log(wineCategory)
 

  const errMessage = message ? (

    <Alert variant='success' onClose={() => setMessage(null)} dismissible >{message}</Alert>
  ) : null






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
            
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={loginHandler} />}></Route>
              <Route path="/" element={<WineIndex loadWineList={loadWineList} wineCategories={wineCategories}/>}></Route>
              <Route path = {`/${wineCategory.url}`} element={<WineCategoriesList wineList={wineList} wineCategory={wineCategory}></WineCategoriesList>} ></Route>
              
            </Routes>
            
          </div>
        </div>
      </Router>
    </div>
  )
}