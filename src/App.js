import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Signup from './user/Signup'
import Signin from './user/Signin'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Alert } from "react-bootstrap"
// created an array of objects based on the winelist Classificaiton in spooncular (had to do this with hard data as Spooncular does not have an API to generate a full list of wines )
import wineData from  './wineClassificationData'
import WineIndex from './wineindex/WineIndex';
import WineCategoriesList from './winecategorieslist/WineCategoriesList'
import FavouritesCreateForm from './favourites/FavouritesCreateForm'
import FavouriteList from './favourites/FavouriteList'
import Profile from './user/Profile'

//////////////////////////////////////////////////////////////////
// import redWineData from  './redWineClassificationData'


//ROUTING


export default function App() {
//////////////////////////////////////////////////////////////////
// const redWinecaregories = redWineData.wines

const wineCategories = wineData.wines

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  const [wineList, setWineList] = useState([]);
  const [wineCategory, setWineCategory] = useState([])
  const [wineNights, setWineNights] = useState([]);



  //this will be exicuted 
   useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      let user = jwt_decode(token);
      if (user) {
        setIsAuth(true)
        setUser(user);
        loadWineNight(user.user.id)
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

// This function load the winelist when a wine on the index is clicked 
  const loadWineIndex = (category) => {

// it take the  winedata object as a parameter 
//  it passes the Url through the API to generate get the list of wines 
    axios.get(`https://api.spoonacular.com/food/wine/recommendation?wine=${category.url}&number=6&apiKey=5efa5fcad11940bd9a063a743119d8ee`) 
  
    .then(response => {

        // console.log(response.data)
  // we fetch the data from the API i save it in a variable call winelist 
        setWineList(response.data.recommendedWines)
  // we fetch the data from our classfication data and save it in a variable called wineCategory
        setWineCategory(category)
    })
    .catch( error => {
        console.log('Error Retreving Wines ')
        console.log(error)

    })
  
  }


  useEffect(() => {
    loadWineNight()

  }, [])


/////////////////////////////////////////////////////////////////////////////////////////////////////////
  // This function load the winelist when a wine on the index is clicked 
  // const loadRedWineIndex = (category) => {
  //   // it take the  winedata object as a parameter 
  //   //  it passes the Url through the API to generate get the list of wines 
  //   axios.get(`https://api.spoonacular.com/food/wine/recommendation?wine=${category.url}&number=6&apiKey=7a64dea7d5bb41f38bb3b24933947711`)

  //     .then(response => {
  //       // console.log(response.data)
  //       // we fetch the data from the API i save it in a variable call winelist 
  //       setWineList(response.data.recommendedWines)
  //       // we fetch the data from our classfication data and save it in a variable called wineCategory
  //       setRedWineCategory(category)
  //     })
  //     .catch(error => {
  //       console.log('Error Retreving Wines ')
  //       console.log(error)
  //     })
  // }



////////////////////////////////////////////////////////////////////////////////////



  const loadWineNight = (user) => {
    // Axios Code will go here
    // console.log(user) 120 _id changed to id
    axios.get(`favouritewine/index/?_id=${user}`)

    .then(response => {
      // console.log('clicked')
      console.log(response.data)

        // console.log(response.data.user.favouritewine);
        // this is equivalent to this.setState in class components.
        // Setting the state will rerender the whole component again.
        setWineNights(response.data.user.favouritewine)
    })
    .catch(error => {
        console.log("Error When Retrieving Wines")
        console.log(error);
    })
}


const addNewWineNight = (wineNight) => {
    axios.post("favouritewine/add", wineNight 
    // ,{headers: {
    //     "Authorization": "Bearer " + localStorage.getItem("token")
    // } }
)
    .then(response => {
       console.log('favouritewine added successfully)')
    })
    .catch(error => {
        console.log(error)
        console.log("Error");
    }) 
}

 

  

  // console.log(wineList)
  // console.log(wineCategory)
 

  const errMessage = message ? (

    <Alert variant='success' onClose={() => setMessage(null)} dismissible >{message}</Alert>
  ) : null



  console.log("app.js")


  return (
    <div>
      <Router>
        <div>
  
          <img className='wineByMe' src="/images/winebyme.png" alt=""/>
  
          {errMessage}
          <nav>
            {isAuth ? (
              <div>
                {user ? "Welcome " + user.user.name : null}&nbsp;

                <Link to='/' style={{ color: 'black'}}>Home</Link>&nbsp;&nbsp;
                <Link to='/logout' onClick={onLogoutHandler} style={{ color: 'black'}}>Logout</Link>&nbsp;&nbsp;
                <Link to= '/createfavouritewinelist' style={{ color: 'black'}}>Create a Wine List</Link>&nbsp;&nbsp;
                <Link to='/favouritewinelist' style={{ color: 'black'}}>Favourite Wine List</Link>&nbsp;&nbsp;


              </div>
            ) : (
              <div>

                <Link to='/signup' style={{color: 'black'}}>Signup</Link>&nbsp;&nbsp;
                <Link to='/signin' style={{color: 'black'}}>Signin</Link>&nbsp;&nbsp;
                <Link to='/' style={{color: 'black'}}>Home</Link>&nbsp;&nbsp;
                <Link to='/favouritewinelist' style={{color: 'black'}}>Favourite Wine List</Link>&nbsp;&nbsp;
                 <Link to='/profile' style={{ color: 'black'}}>Profile</Link>&nbsp;&nbsp;


                {/* <Link to='/malbecwines'>Malbec Wines</Link> */}

              </div>
            )}
          </nav>
          <div>
            <Routes>
              {/* This code to go in route path / -- <Signin login={loginHandler} /> */}
            
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={isAuth ? <WineIndex loadWineIndex={loadWineIndex} wineCategories={wineCategories}/> : <Signin login={loginHandler}/>}></Route>
              {/* we pass the load wine function through tthe wineIndex page as a prop as well as the wine selected from the data from wineClassfication.js */}
              <Route path="/" element={<WineIndex loadWineIndex={loadWineIndex} wineCategories={wineCategories}/>}></Route>
              {/* we pass the winelist data  fetched from the api through to our wineCategoriesList component along with the category */}
              <Route path={`/${wineCategory.url}`} element={<WineCategoriesList wineList={wineList} wineCategory={wineCategory}></WineCategoriesList>} ></Route>


              <Route path='/favouritewinelist' element={isAuth ? <FavouriteList loadWineNight={loadWineNight} wineNights={wineNights} user={user.user.id} ></FavouriteList> : <Signin login={loginHandler} />}></Route>
              <Route path='/createfavouritewinelist' element={isAuth ? <FavouritesCreateForm user={user.user.id} addNewWineNight={addNewWineNight} ></FavouritesCreateForm> : <Signin login={loginHandler} />}></Route>
              <Route path='/profile' element={<Profile ></Profile>}> </Route>
{/* 
              <Route path="/RedWineIndex" element={<RedWineIndex RedloadWineIndex={loadRedWineIndex} wineCategories={wineCategories} />}></Route> */}

            </Routes>
            
          </div>
          <div>

          </div>
        </div>
      </Router>
      <br/><br/><br/><br/><br/>
      <img className='wine-bottom' src='/images/winebottom1.png' alt=""/>
      <hr></hr>
      <footer id="footer">
        <p>WinesCompany</p>
        <p>Build By Helene van Besouw, Rob Sesemann, Ivan Craig</p>
        <p>2023</p>
        
      </footer>
    </div>
  )
}