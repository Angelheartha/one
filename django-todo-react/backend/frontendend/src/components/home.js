import React from 'react';
import Signup from "./signup";


const Home = (props) => {
  return(
  <div>
    <h1>Home</h1>
    <h2>ログイン状態:{props.loggedInStatus}</h2>
    <Signup />
  </div>
  )
}

export default Home;