import React from 'react'
import { Link } from 'react-router-dom'
import "./HomePage.css"

function HomePage() {
  return (
    <div className='home-page'>
       <nav className='navBar'>
            <Link className='nav-links'  to={"/"}> Company Logo</Link>
            <Link className='nav-links' to={"/login"}>Login</Link>
            <Link className='nav-links' to={"/Signin"}>Singin</Link>
       </nav>
    </div>
  )
}

export default HomePage