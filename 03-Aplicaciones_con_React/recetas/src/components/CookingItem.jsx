import React from 'react'

const CookingItem = ({recipe}) => {
  const {nameRepice, ingredients, time } = recipe
  return (
    <div>
      <h2>{nameRepice}</h2> <br />
      <p>{ingredients}</p> <br />
      <p>{time}</p>
    </div>
  )
}

export default CookingItem