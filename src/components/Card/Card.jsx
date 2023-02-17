import React from 'react'
import QuickLookInfo from '../QuickLookInfo/QuickLookInfo'
import CardInfo from '../CardInfo/CardInfo'
import './Card.scss'
import { useState } from 'react'

const Card = (props) => {
    const {image, title, tagline, description} = props

    const [showText, setShowText] = useState(false);
    const [showQuickLook, setShowQuickLook] = useState(false);


    const toggleQuickLook = (event) => {
      event.preventDefault();
      setShowQuickLook(!showQuickLook);
    };

    const handleHover = () => {
      setShowText(!showText);
    };


  return (
    <div className= 'card' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img className='card__image' src={image} alt={title} />
        {showText && <CardInfo title={title} tagline={tagline} toggleQuickLook={toggleQuickLook}/>}
        {showQuickLook && <QuickLookInfo image = {image} title={title} tagline={tagline} description={description} toggleQuickLook = {toggleQuickLook} />}
    </div>
  )
}

export default Card