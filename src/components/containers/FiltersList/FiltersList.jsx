import Button from "../../Button/Button";
import React from 'react'
import "./FiltersList.scss"

const FiltersList = (props) => {
    const {handleClick} = props
  return (
    <div className="filter">
        <Button className = "filter__button filter__button--ABV" handleClick = {handleClick} buttonText="High Alcohol (ABV>6%)" />
        <Button className = "filter__button filter__button--classic" handleClick = {handleClick} buttonText="Classic Range" />
        <Button className = "filter__button filter__button--acid" handleClick = {handleClick} buttonText="High Acidity (pH<4)" />
    </div>
  )
}

export default FiltersList