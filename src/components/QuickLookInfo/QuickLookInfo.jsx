import React from 'react'
import blackCross from "../../assets/images/black-cross.png";
import "./QuickLookInfo.scss"


const QuickLookInfo = (props) => {
    const {image, title, toggleQuickLook} = props
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
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default QuickLookInfo