import React from 'react'
import {Link} from 'react-router-dom'
import Home from "../assets/Home.png";

function Header() {
  return (
    <div>

      <Link to={`/`}>
        <img src= {Home} alt="Home" width="100%"/>
        </Link>
      
    </div>
  )
}

export default Header