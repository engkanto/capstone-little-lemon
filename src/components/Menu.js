import React from 'react'
import { useAppContext } from '../context/AppContext'
import MenuCard from './MenuCard'

function Menu() {
  const { menuItems } = useAppContext()

  return (
    <div className="container">
      <h2>Our Menu</h2>
      <div className="grid tricol-grid">
        {menuItems.map((item, index) => (
          <MenuCard key={item.id} {...item} style={{ animationDelay: `${index * 0.1}s` }} />
        ))}
      </div>
    </div>
  )
}

export default Menu