
import React from 'react';

function PersonCard({ name, rating, review, image }) {
  return (
    <article className='person-card'>
      <div className='person'>
        <img src={image} alt={name} />
        <h5>{name}</h5>
      </div>
      <p className='rating'>Rating: {'⭐'.repeat(rating)}</p>
      <p className='review'>{review}</p>
    </article>
  );
}

export default PersonCard;
