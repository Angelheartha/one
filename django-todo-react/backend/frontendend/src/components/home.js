import React from 'react';
import Signup from "./signup";


const Home = (props) =>{


const handleLogin = (data) =>{
     props.setLoggedInStatus("ログインなう")
     props.setUser(data)
  }



const handleSuccessfulAuthentication = (data) =>{
        handleLogin(data)
        navigate("/Dashboard");

   }



  return(
  <div>
    <h1>Home</h1>
    <h2>ログイン状態:{props.loggedInStatus}</h2>
    <Signup handleSuccessfulAuthentication = {handleSuccessfulAuthentication}/>
  </div>
  )
}

export default Home;