import React from 'react'
import PersonCard from './PersonCard'

function Testimonial() {
  const testimonials = [
    { name: 'John Doe', rating: 5, review: 'Amazing food!', image: 'https://via.placeholder.com/100' },
    { name: 'Jane Smith', rating: 4, review: 'Great atmosphere', image: 'https://via.placeholder.com/100' },
    { name: 'Mike Johnson', rating: 5, review: 'Best restaurant in town', image: 'https://via.placeholder.com/100' },
    { name: 'Sarah Williams', rating: 4, review: 'Delicious dishes', image: 'https://via.placeholder.com/100' },
  ]

  return (
    <div className="container">
      <h2>Testimonials</h2>
      <div className="grid fourcol-grid">
        {testimonials.map((testimonial, index) => (
          <PersonCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonial