
import React from 'react';

function PersonCard({ name, rating, review, image }) {
  return (
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rating: {'⭐'.repeat(rating)}</p>
      <p>{review}</p>
    </article>
  );
}

export default PersonCard;
