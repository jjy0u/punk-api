import React from 'react'
import './Card.scss'

const Card = (props) => {
    const {image, title, tagline} = props

  return (
    <div className= 'card'>
        <img className='card__image' src={image} alt={title} />
        <div className='card__info'>
            <div className='card__text'>
                <h3 className='card__name'>{title}</h3>
                <h4 className='card__tagline'>{tagline}</h4>
            </div>
            <button className='card__button'>Quick Look</button>
        </div>
    </div>
  )
}

export default Card