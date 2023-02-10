import React from 'react'
import { useParams } from 'react-router-dom'

const BeerInfo = (props) => {
    const {beerArr} = props

    const {beerId} = useParams()
    console.log(beerId)

    const targetBeer = beerArr.filter((beer) => beer.id == beerId)[0]

    console.log(targetBeer)
  return (
    <div>BeerInfo</div>
  )
}

export default BeerInfo