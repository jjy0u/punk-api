import React from 'react'
import "./CardInfo.scss"

const CardInfo = (props) => {
    const {title, tagline} = props

  return (
    <div className='card__info'>
        <div className='card__text'>
            <h3 className='card__name'>{title}</h3>
            <h4 className='card__tagline'>{tagline}</h4>
        </div>
        <button className='card__button'>Quick Look</button>
    </div>
  )
}

export default CardInfo