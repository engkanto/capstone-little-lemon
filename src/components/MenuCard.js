import React from 'react'

function MenuCard({ title, description, price, image }) {
  return (
    <article className='menu-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button>Order Delivery</button>
    </article>
  )
}

export default MenuCard