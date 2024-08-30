import React from 'react'
import MenuCard from './MenuCard'

function Menu() {
  const menuItems = [
    { title: 'Greek Salad', description: 'Fresh and crispy', price: 12.99, image: 'https://via.placeholder.com/150' },
    { title: 'Bruschetta', description: 'Grilled bread with toppings', price: 9.99, image: 'https://via.placeholder.com/150' },
    { title: 'Lemon Dessert', description: 'Sweet and tangy', price: 7.99, image: 'https://via.placeholder.com/150' },
  ]

  return (
    <div className="container">
      <h2>Our Menu</h2>
      <div className="grid tricol-grid">
        {menuItems.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Menu