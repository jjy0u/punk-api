import React from 'react'
import "./FiltersList.scss"

const FiltersList = (props) => {
    const {handleCheck, checkAbvClass, checkClassicClass, checkAcidClass} = props

    let abvClass = 'filter__label'
    let classicClass = 'filter__label'
    let acidClass = 'filter__label'

    if (checkAbvClass) {
      abvClass += " checked";
    }
    if (checkClassicClass) {
      classicClass += " checked";
    }
    if (checkAcidClass) {
      acidClass += " checked";
    }

  return (
    <div className="filter">
      <div className = "filter__button filter__button--ABV">
        <input className="filter__checkbox" type="checkbox" id="ABV" onClick = {handleCheck} value="abv"/>
        <label className= {abvClass} htmlFor="ABV">High Alcohol (ABV{">"}6%)</label>
      </div>

      <div className = "filter__button filter__button--classic">
        <input className= "filter__checkbox" type="checkbox" id="classic" onClick = {handleCheck} value="classic"/>
        <label className={classicClass} htmlFor="classic">Classic Range</label>
      </div>

      <div className = "filter__button filter__button--acid">
        <input className="filter__checkbox" type="checkbox" id="acid" onClick = {handleCheck} value="acid"/>
        <label className={acidClass} htmlFor="acid">High Acidity (ph{"<"}4)</label>
      </div>

    </div>
  )
}

export default FiltersList