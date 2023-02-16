import React from 'react'
import blackCross from "../../assets/images/black-cross.png";
import "./QuickLookInfo.scss"


const QuickLookInfo = (props) => {
    const {image, toggleQuickLook} = props
  return (
    <div className='quick-look'>
        <div className='quick-look__content'>
            <img
            src={blackCross}
            alt="Exit Quick Look"
            className="quick-look__cross"
            onClick={toggleQuickLook}
            />
            <img src={image} alt="whatever" />
        </div>
    </div>
  )
}

export default QuickLookInfo