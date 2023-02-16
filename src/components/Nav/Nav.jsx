import React from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      
      <Link to="/">
        <h1 className='nav__home'>Home</h1>
      </Link>
        <div className='nav__img-container'>
          <img className="nav__logo" src="https://www.now.brewdog.com/sites/template_2018/images/brewdog/shield.svg" alt="logo" />
        </div>
    </div>
  )
}

export default Nav