import React from 'react'
import { useParams } from 'react-router-dom'
import "./BeerInfo.scss"
import FoodPairings from '../../FoodPairings/FoodPairings'

const BeerInfo = (props) => {
  const {beerArr} = props
  const {beerId} = useParams()
  const targetBeer = beerArr.filter((beer) => beer.id == beerId)[0]
  const hopsArr = targetBeer.ingredients.hops
  const maltArr = targetBeer.ingredients.malt
  const ingredientsArr = Object.keys(targetBeer.ingredients)
  const foodPairingsArr = targetBeer.food_pairing


  const hopsNameArr = []
  for (let index = 0; index < hopsArr.length; index++) {
    hopsNameArr.push(hopsArr[index].name)
  }

  const maltNameArr = []
  for (let index = 0; index < maltArr.length; index++) {
    maltNameArr.push(maltArr[index].name)
  }

  const foodListJSX = foodPairingsArr.map((food) => {
    return ( 
    <FoodPairings
          food = {food}
    />
      )
  })

  return (
    <div className='beer-info'>
      <div className='beer-info__img-container'>
        <img className="beer-info__image" src={targetBeer.image_url}/>
      </div>
      <div className='beer-info__right-info'>
        <h3 className='beer-info__name'>{targetBeer.name}</h3>
        <h4 className='beer-info__tagline'>{targetBeer.tagline}</h4>
        <h5>First brewed: {targetBeer.first_brewed}</h5>
        <h6 className='beer-info__description'>{targetBeer.description}</h6>
        <p><span>ABV: </span> {targetBeer.abv}%</p>
        <p><span>pH:</span> {targetBeer.ph ? targetBeer.ph : "NA"}</p>
        <p><span>Hops:</span> {[...new Set(hopsNameArr)].join(", ")}</p>
        <p><span>Malt:</span> {[...new Set(maltNameArr)].join(", ")}</p>
        <p><span>Ingredients:</span> {ingredientsArr.join(", ")}</p>
      </div>
      <div className='beer-info__bottom-info'>
        <ul className="beer-info__food-pair"><span>Food Parings:</span> {foodListJSX} </ul>
        <p className="beer-info__food-pair"><span>Brewers Tips:</span> {targetBeer.brewers_tips} </p>
      </div>
    </div>
  )
}

export default BeerInfo