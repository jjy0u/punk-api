import React from 'react'
import './Card.scss'

const Card = (props) => {
    const {image, title} = props

  return (
    <div className='card'>
        <img className='card__image' src={image} alt={title} />
        <div className='card__info'>
            <h3 className='card__name'>{title}</h3>
            <button className='card__button'>Quick Look</button>
        </div>
    </div>
  )
}

export default Card