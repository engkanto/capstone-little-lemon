import React from 'react'
import PersonCard from './PersonCard'
import { useAppContext } from '../context/AppContext'

function Testimonial() {
  const { testimonials } = useAppContext()
  return (
    <div className="container">
      <h2>Testimonials</h2>
      <div className="grid fourcol-grid">
        {testimonials.map((item, index) => (
          <PersonCard key={item.id} {...item} style={{ animationDelay: `${index * 0.1}s` }} />
        ))}
      </div>
    </div>
  )
}

export default Testimonial