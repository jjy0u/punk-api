import React from 'react'
import "./FoodPairings.scss"

const FoodPairings = (props) => {
    const {food} = props
  return (
    <li>{food}</li>
  )
}

export default FoodPairings