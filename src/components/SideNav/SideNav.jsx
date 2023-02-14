import React from 'react'
import FiltersList from '../containers/FiltersList/FiltersList'
import SearchFilter from '../SearchFilter/SearchFilter'
import "./SideNav.scss"

const SideNav = (props) => {
    const {handleInput, handleClick} = props

  return (
    <div className='side-nav'>        
        <FiltersList handleClick={handleClick}/>

        <SearchFilter handleInput={handleInput}/>
    </div>
  )
}

export default SideNav