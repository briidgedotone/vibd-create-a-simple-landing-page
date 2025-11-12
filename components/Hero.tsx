import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-coffee-50 to-coffee-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-coffee-900 leading-tight">
              Welcome to
              <span className="block text-coffee-600">Bean There</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Where every cup tells a story and every sip creates a memory. 
              Discover our premium coffee blends in a warm, welcoming atmosphere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Explore Menu
              </button>
              <button className="btn-secondary">
                Visit Us
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-coffee-200 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
              <span className="text-9xl">☕</span>
            </div>
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-coffee-600 font-semibold">Daily Special</div>
              <div className="text-sm text-gray-600">Caramel Macchiato</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}