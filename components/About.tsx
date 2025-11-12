import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-coffee-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-coffee-800 mb-6">
              Brewing Excellence Since Day One
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Bean There was born from a simple passion: creating the perfect coffee experience. 
              We source our beans directly from sustainable farms around the world, ensuring 
              every cup supports both quality and community.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our expert baristas craft each drink with care, using traditional techniques 
              combined with modern innovation. Whether you're starting your day or taking 
              a well-deserved break, we're here to make it special.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="font-semibold text-coffee-800">Sustainable</div>
                <div className="text-sm text-gray-600">Ethically sourced beans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👨‍🍳</div>
                <div className="font-semibold text-coffee-800">Expert Crafted</div>
                <div className="text-sm text-gray-600">Skilled baristas</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-coffee-100 rounded-lg p-8 text-center">
              <span className="text-8xl">🏪</span>
              <div className="mt-4">
                <div className="text-coffee-800 font-semibold text-lg">Cozy Atmosphere</div>
                <div className="text-gray-600">Perfect for work, meetings, or relaxation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}