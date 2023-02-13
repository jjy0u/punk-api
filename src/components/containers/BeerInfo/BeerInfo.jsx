import React from 'react'
import { useParams } from 'react-router-dom'
import "./BeerInfo.scss"

const BeerInfo = (props) => {
    const {beerArr} = props

    const {beerId} = useParams()
    console.log(beerId)

    const targetBeer = beerArr.filter((beer) => beer.id == beerId)[0]

    console.log(targetBeer)
  return (
    <div>
      <img className="beer-info_image" src={targetBeer.image_url}/>
    </div>
  )
}

export default BeerInfo