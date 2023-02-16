import React from 'react'
import "./CardInfo.scss"
import Button from '../Button/Button'

const CardInfo = (props) => {
    const {title, tagline, toggleQuickLook} = props

  return (
    <div className='card__info'>
        <div className='card__text'>
            <h3 className='card__name'>{title}</h3>
            <h4 className='card__tagline'>{tagline}</h4>
        </div>
        <Button className='card__button' buttonText="Quick Look" handleClick={toggleQuickLook}/>
    </div>
  )
}

export default CardInfo