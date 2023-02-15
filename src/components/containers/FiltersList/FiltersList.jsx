import React from 'react'
import "./FiltersList.scss"

const FiltersList = (props) => {
    const {handleCheck, checkClass} = props
  return (
    <div className="filter">
      <div className = "filter__button filter__button--ABV">
        <input className={checkClass}  type="checkbox" id="ABV" onClick = {handleCheck} value="abv"/>
        <label className='filter__label' htmlFor="ABV">High Alcohol (ABV{">"}6%)</label>
      </div>

      <div className = "filter__button filter__button--classic">
        <input className= {checkClass} type="checkbox" id="classic" onClick = {handleCheck} value="classic"/>
        <label className='filter__label' htmlFor="classic">Classic Range</label>
      </div>

      <div className = "filter__button filter__button--acid">
        <input className={checkClass} type="checkbox" id="acid" onClick = {handleCheck} value="acid"/>
        <label className='filter__label' htmlFor="acid">High Acidity (ph{"<"}4)</label>
      </div>

    </div>
  )
}

export default FiltersList