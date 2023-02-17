import React from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav__img-container'>
        <Link to="/"><img className="nav__logo" src="https://www.now.brewdog.com/sites/template_2018/images/brewdog/shield.svg" alt="logo" /></Link>
        </div>
    </div>
  )
}

export default Nav