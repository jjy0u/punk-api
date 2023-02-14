import React from 'react'
import SearchFilter from '../SearchFilter/SearchFilter'

const SideNav = (props) => {
    const {handleInput} = props

  return (
    <div>        
        <SearchFilter handleInput={handleInput}/>
    </div>
  )
}

export default SideNav