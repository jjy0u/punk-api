import React from 'react'

const Card = (props) => {
    const {image, title, description} = props

  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card