import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl">☕</span>
              <span className="ml-2 text-2xl font-bold">Bean There</span>
            </div>
            <p className="text-coffee-200 mb-6 leading-relaxed">
              Your neighborhood coffee shop where quality meets community. 
              We're passionate about crafting the perfect cup and creating 
              memorable experiences for every guest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-coffee-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-coffee-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-coffee-200">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-coffee-200">
              <div>123 Coffee Street</div>
              <div>Downtown District, City 12345</div>
              <div>(555) 123-BEAN</div>
              <div>hello@beanthere.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-8 pt-8 text-center text-coffee-300">
          <p>&copy; 2024 Bean There Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}