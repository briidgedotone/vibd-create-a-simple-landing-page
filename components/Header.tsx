import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl">☕</span>
            <span className="ml-2 text-xl font-bold text-coffee-800">Bean There</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-coffee-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-coffee-600 transition-colors">About</a>
            <a href="#menu" className="text-gray-700 hover:text-coffee-600 transition-colors">Menu</a>
            <a href="#contact" className="text-gray-700 hover:text-coffee-600 transition-colors">Contact</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-coffee-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="px-3 py-2 text-gray-700 hover:text-coffee-600">Home</a>
              <a href="#about" className="px-3 py-2 text-gray-700 hover:text-coffee-600">About</a>
              <a href="#menu" className="px-3 py-2 text-gray-700 hover:text-coffee-600">Menu</a>
              <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-coffee-600">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}