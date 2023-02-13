import React from 'react'
import { useParams } from 'react-router-dom'
import "./BeerInfo.scss"

const BeerInfo = (props) => {
    const {beerArr} = props
    const {beerId} = useParams()
    const targetBeer = beerArr.filter((beer) => beer.id == beerId)[0]
    const hopsArr = targetBeer.ingredients.hops
    const maltArr = targetBeer.ingredients.malt

    const hopsNameArr = []
    for (let index = 0; index < hopsArr.length; index++) {
      hopsNameArr.push(hopsArr[index].name)
    }

    const maltNameArr = []
    for (let index = 0; index < maltArr.length; index++) {
      maltNameArr.push(maltArr[index].name)
    }

    const ingredientsArr = Object.keys(targetBeer.ingredients)

  return (
    <div className='beer-info'>
      <div className='beer-info__img-container'>
        <img className="beer-info__image" src={targetBeer.image_url}/>
      </div>
      <div className='beer-info__right-info'>
        <h3>{targetBeer.name}</h3>
        <h4>{targetBeer.tagline}</h4>
        <h5>First brewed: {targetBeer.first_brewed}</h5>
        <p>{targetBeer.descrption}</p>
        <p>ABV: {targetBeer.abv}%</p>
        <p>Hops: {hopsNameArr.join(", ")}</p>
        <p>Malt: {maltNameArr.join(", ")}</p>
        <p>Ingredients: {ingredientsArr.join(", ")}</p>
      </div>
      <div className='beer-info__bottom-info'>
        <p className="beer-info__food-pair">Food Parings: </p>
        <p className="beer-info__food-pair">Brewers Tips: </p>
      </div>
    </div>
  )
}

export default BeerInfo