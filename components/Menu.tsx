import React from 'react'

export default function Menu() {
  const menuItems = [
    {
      name: "Signature Blend",
      description: "Our house blend with notes of chocolate and caramel",
      price: "$4.50",
      icon: "☕"
    },
    {
      name: "Cappuccino",
      description: "Rich espresso with steamed milk and foam art",
      price: "$5.00",
      icon: "🥛"
    },
    {
      name: "Cold Brew",
      description: "Smooth, refreshing cold-brewed coffee",
      price: "$4.00",
      icon: "🧊"
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk and your choice of syrup",
      price: "$5.50",
      icon: "☕"
    },
    {
      name: "Americano",
      description: "Bold espresso with hot water for a clean taste",
      price: "$3.50",
      icon: "☕"
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: "$6.00",
      icon: "🍫"
    }
  ]

  return (
    <section id="menu" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-coffee-600 mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Crafted with care, served with love. Each drink is made to order using 
            our premium beans and finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-coffee-600">{item.price}</span>
                <button className="bg-coffee-600 hover:bg-coffee-700 text-white px-4 py-2 rounded text-sm transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see our full menu?</p>
          <button className="btn-primary">
            Download Menu PDF
          </button>
        </div>
      </div>
    </section>
  )
}