import React from 'react'
import CardInfo from '../CardInfo/CardInfo'
import './Card.scss'
import { useState } from 'react'

const Card = (props) => {
    const {image, title, tagline} = props

    const [showText, setShowText] = useState(false);

    const handleHover = () => {
      setShowText(!showText);
    };

  return (
    <div className= 'card' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img className='card__image' src={image} alt={title} />
        {showText && <CardInfo title={title} tagline={tagline}/>}
    </div>
  )
}

export default Card