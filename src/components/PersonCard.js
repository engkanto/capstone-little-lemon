import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function PersonCard({ name, rating, review, image, style }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <article 
      ref={ref} 
      className={`person-card animate-slide-down ${isIntersecting ? 'animated' : ''}`}
      style={isIntersecting ? style : {}}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className='rating'>Rating: {'⭐'.repeat(rating)}</p>
      <p className='review'>{review}</p>
    </article>
  );
}

export default PersonCard;
