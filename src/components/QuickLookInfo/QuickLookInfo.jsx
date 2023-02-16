import React from 'react'
import blackCross from "../../assets/images/black-cross.png";
import Button from '../Button/Button';
import "./QuickLookInfo.scss"


const QuickLookInfo = (props) => {
    const {image, title, tagline, description, toggleQuickLook} = props
  return (
    <div className='quick-look'>
        <div className='quick-look__content'>
            <img
            src={blackCross}
            alt="Exit Quick Look"
            className="quick-look__cross"
            onClick={toggleQuickLook}
            />
            <div className='quick-look__img-container'>
                <img className='quick-look__image' src={image} alt= {title}/>
            </div>
            <div className='quick-look__info'>
                <h3 className='quick-look__name'>{title}</h3>
                <h4 className='quick-look__tagline'>{tagline}</h4>
                <p className='quick-look__description'>{description}</p>
                <Button/>

            </div>
        </div>
    </div>
  )
}

export default QuickLookInfo