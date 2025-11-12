import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-coffee-600 mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Come experience the Bean There difference. We can't wait to serve you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-coffee-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <div className="font-semibold text-coffee-800">Location</div>
                    <div className="text-gray-600">123 Coffee Street<br />Downtown District, City 12345</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <div className="font-semibold text-coffee-800">Phone</div>
                    <div className="text-gray-600">(555) 123-BEAN</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <div className="font-semibold text-coffee-800">Email</div>
                    <div className="text-gray-600">hello@beanthere.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-4">Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-coffee-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-coffee-800 mb-6">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-800 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-800 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-800 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}