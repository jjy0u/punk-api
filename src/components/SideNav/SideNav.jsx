import React from 'react'
import FiltersList from '../containers/FiltersList/FiltersList'
import SearchFilter from '../SearchFilter/SearchFilter'
import "./SideNav.scss"

const SideNav = (props) => {
    const {handleInput, handleCheck , checkAbvClass, checkClassicClass, checkAcidClass} = props

  return (
    <div className='side-nav'>        
        <FiltersList handleCheck={handleCheck} checkAbvClass={checkAbvClass} checkClassicClass={checkClassicClass} checkAcidClass={checkAcidClass}/>

        <SearchFilter handleInput={handleInput}/>
    </div>
  )
}

export default SideNav