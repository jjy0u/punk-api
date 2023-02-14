import React from 'react'
import "./Button.scss"

const Button = (props) => {
    const {className, handleClick, buttonText} = props
  return (
    <div>
        <button className={className} onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default Button