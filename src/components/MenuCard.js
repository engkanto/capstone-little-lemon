import React from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

function MenuCard({ title, description, price, image, style }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <article 
      ref={ref} 
      className={`menu-card animate-slide-down ${isIntersecting ? 'animated' : ''}`}
      style={isIntersecting ? style : {}}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button>Order Delivery</button>
    </article>
  )
}

export default MenuCard