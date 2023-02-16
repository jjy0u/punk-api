import Card from "../../Card/Card";
import React from 'react'
import { Link } from "react-router-dom";
import "./CardList.scss"

const CardList = (props) => {

    const {beerArr, toggleQuickLook} = props

    const cardsListJSX = beerArr.map((beer) => {
        return ( 
        <Link to={`/beer/${beer.id}`} key = {beer.id}>
        <Card
              image = {beer.image_url}
              title = {beer.name}
              tagline = {beer.tagline}
              description = {beer.description}
              toggleQuickLook = {toggleQuickLook}
              />
        </Link>
          )
      })

  return (
    <div>
        <div className="card-list">{cardsListJSX}</div>
    </div>
  )
}

export default CardList